import React, { Component } from 'react';

import style from './App.scss';

import Wad from '../models/Wad';
import Lump from '../models/Lump';

import LocalStorageManager from '../lib/LocalStorageManager';

import Header from './Header';
import Logo from './Logo';
import WadUploader from './Upload/WadUploader';
import UploadedWadList from './Upload/UploadedWadList';
import WadDetails from './WadExplorer/WadDetails';
import BackToTop from './BackToTop';
import ErrorMessage from './ErrorMessage';

const localStorageManager = new LocalStorageManager();

const { NODE_ENV } = process.env;

if (NODE_ENV === 'development') {
    document.title += ' [dev]';
}

const prefixWindowtitle = document.title;

export default class App extends Component {
    state = {
        wads: {},
        selectedWad: {},
        selectedLump: {},
        selectedLumpType: '',
        displayError: {},
    }

    async componentDidMount() {
        const wads = await this.getWadsFromLocalMemory();
        this.setState(() => ({
            wads,
        }));

        const freedoomPreloaded = await localStorageManager.get('freedoom-preloaded');
        if (!freedoomPreloaded) {
            // this.preUploadFreedoom();
        }

        const { match } = this.props;
        const { params } = match;
        const { wadName, lumpName, lumpType } = params;

        if (window.location.hash.includes('#/uploader')) {
            const uploader = document.getElementById('uploader');
            if (uploader) {
                uploader.scrollIntoView();
            }
        }

        if (wadName) {
            this.selectWad(wadName, true);
        }

        if (lumpType) {
            this.selectLumpType(lumpType, true);
        }

        if (lumpName) {
            this.selectLump(lumpName, true);
        }
    }


    async getWadsFromLocalMemory() {
        const savedWads = await localStorageManager.get('wads');

        if (!savedWads) {
            return {};
        }

        const wadsData = Object.keys(savedWads).map(wadId => savedWads[wadId]);

        const wadList = wadsData.map((wadData) => {
            // Wad instances must be re-instantiated
            const wad = new Wad();
            wad.restore(wadData);

            const lumps = {};
            Object.keys(wad.lumps).map((lumpType) => {
                const lumpTypes = {};
                Object.keys(wad.lumps[lumpType]).map((lumpName) => {
                    // Lump instances must be re-instantiated
                    const lump = new Lump();
                    lump.setIndexData(wad.lumps[lumpType][lumpName]);
                    lumpTypes[lumpName] = lump;
                    return null;
                });
                lumps[lumpType] = lumpTypes;

                return null;
            });

            wad.lumps = lumps;

            return wad;
        });

        const wads = {};
        for (let i = 0; i < wadList.length; i++) {
            const wad = wadList[i];
            wads[wad.id] = wad;
        }

        return wads;
    }

    async saveWadsInLocalMemory(wads) {
        return localStorageManager.set('wads', wads);
    }

    preUploadFreedoom = () => {
        const freedoom1 = new Wad();
        freedoom1.readRemoteFile(
            '/public/freedoom1.wad',
            'freedoom1.wad',
            {},
            this.addFreedoom,
            true,
        );

        const freedoom2 = new Wad();
        freedoom2.readRemoteFile(
            '/public/freedoom2.wad',
            'freedoom2.wad',
            {},
            this.addFreedoom,
            true,
        );

        // dev: comment out when feature is ready
        // localStorageManager.set('freedoom-preloaded', true);
    }

    addFreedoom = (wad) => {
        if (wad.uploaded && wad.processed) {
            this.addWad(wad);
        }
    }

    addWad = (wad) => {
        this.setState((prevState) => {
            const updatedWads = {
                ...prevState.wads,
                [wad.id]: wad,
            };

            this.saveWadsInLocalMemory(updatedWads);

            return ({
                wads: updatedWads,
            });
        });
    }

    deleteWad = (wadId) => {
        this.setState((prevState) => {
            const { wads } = prevState;

            const filteredWadKeys = Object.keys(wads).filter(wadKey => wadKey !== wadId);

            const updatedWads = {};
            for (let i = 0; i < filteredWadKeys.length; i++) {
                const wad = wads[filteredWadKeys[i]];

                updatedWads[wad.id] = wad;
            }

            localStorageManager.set('wads', updatedWads);

            if (prevState.selectedWad && prevState.selectedWad.id === wadId) {
                window.location.hash = '#uploader';

                return ({
                    wads: updatedWads,
                    selectedWad: {},
                    selectedLump: {},
                });
            }

            return ({
                wads: updatedWads,
            });
        });
    }

    deleteWads = () => {
        this.setState(() => ({
            wads: {},
            selectedWad: {},
            selectedLump: {},
        }));
    }

    selectWad = async (wadId, init) => {
        this.setState((prevState) => {
            const selectedWad = prevState.wads[wadId];
            if (!selectedWad) {
                document.title = prefixWindowtitle;
                return {};
            }

            let selectedLump = {};

            if (prevState.selectedLump.name) {
                if (selectedWad.lumps[prevState.selectedLumpType][prevState.selectedLump.name]) {
                    selectedLump = { ...selectedWad.lumps[prevState.selectedLumpType][prevState.selectedLump.name] };
                }

                if (selectedLump.name) {
                    document.title = `${prefixWindowtitle} / ${selectedWad.name} / ${prevState.selectedLumpType} / ${prevState.selectedLump.name}`;
                } else {
                    document.title = `${prefixWindowtitle} / ${selectedWad.name} / ${prevState.selectedLumpType}`;
                }
            } else if (prevState.selectedLumpType) {
                if (selectedWad.lumps[prevState.selectedLumpType]) {
                    document.title = `${prefixWindowtitle} / ${selectedWad.name} / ${prevState.selectedLumpType}`;
                } else {
                    document.title = `${prefixWindowtitle} / ${selectedWad.name}`;
                }
            } else {
                document.title = `${prefixWindowtitle} / ${selectedWad.name}`;
            }

            return {
                selectedWad,
                selectedLump,
            };
        }, () => {
            if (init) {
                setTimeout(() => {
                    this.focusOnWad();
                }, 100);
            }
        });
    }

    selectLump = (lumpName, init) => {
        this.setState((prevState) => {
            if (!prevState.selectedWad) {
                return {};
            }

            if (!prevState.selectedWad.lumps) {
                return {};
            }

            if (!prevState.selectedLumpType) {
                return {};
            }

            const selectedLump = prevState.selectedWad.lumps[prevState.selectedLumpType][lumpName];
            if (!selectedLump) {
                document.title = `${prefixWindowtitle} / ${prevState.selectedWad.name} / ${prevState.selectedLumpType}`;
                return {};
            }

            document.title = `${prefixWindowtitle} / ${prevState.selectedWad.name} / ${prevState.selectedLumpType} / ${selectedLump.name}`;

            return {
                selectedLump,
            };
        }, () => {
            if (init) {
                setTimeout(() => {
                    this.focusOnLump();
                }, 200);
            }
        });
    }

    selectLumpType = (lumpType) => {
        this.setState((prevState) => {
            if (!prevState.selectedWad) {
                return {};
            }

            document.title = `${prefixWindowtitle} / ${prevState.selectedWad.name} / ${lumpType}`;

            return {
                selectedLumpType: lumpType,
            };
        });
    }

    deselectAll = () => {
        document.title = `${prefixWindowtitle}`;
        this.setState(() => ({
            selectedWad: {},
            selectedLump: {},
        }));
    }

    focusOnWad = (keepState = true) => {
        const element = document.getElementById('wadDetails');
        if (element) {
            element.scrollIntoView();
            if (!keepState) {
                this.setState(() => ({
                    selectedLump: {},
                    selectedLumpType: '',
                }));
            }
        }
    }

    focusOnLump = () => {
        const element = document.getElementById('lumpDetails');
        if (element) {
            element.scrollIntoView();
        }
    }

    updateSelectedWadFromList = (updatedWad) => {
        this.setState(async (prevState) => {
            const wads = {
                ...prevState.wads,
                [updatedWad.id]: { ...updatedWad },
            };

            const result = await this.saveWadsInLocalMemory(wads);

            return {
                wads,
                selectedWad: updatedWad,
            };
        });
    }

    updateFilename = (name) => {
        const { selectedWad } = this.state;
        const wad = selectedWad;

        if (name === '') {
            const error = 'WAD filename can not be empty.';
            wad.errors.empty_filename = error;
        } else {
            wad.errors.empty_filename = '';
            wad.name = name;
            this.updateSelectedWadFromList(wad);
        }
    }

    componentDidCatch(error, info) {
        this.setState(() => ({ displayError: { error, info } }));
    }

    render() {
        const {
            displayError,
            wads,
            selectedWad,
            selectedLump,
            selectedLumpType,
        } = this.state;

        if (displayError.error) {
            const { message, lineNumber, columnNumber } = displayError.error;
            const error = `Error: ${message} (${lineNumber}:${columnNumber})`;
            return (
                <div className={style.app}>
                    <Header />
                    <div className={style.errorScreenOuter}>
                        <div className={style.errorScreenInner}>
                            <ErrorMessage message={error} />
                            <div>
                                URL:
                                {' '}
                                {document.location.href}
                            </div>
                            <a href="/">Click here to reload the app.</a>
                        </div>
                    </div>
                    <BackToTop focusOnWad={this.focusOnWad} />
                </div>
            );
        }

        return (
            <div className={style.app}>
                <Header />
                <div className={style.main}>
                    <Logo />
                    <div className={style.top}>
                        <WadUploader
                            wads={wads}
                            addWad={this.addWad}
                            deselectAll={this.deselectAll}
                        />
                        {Object.keys(wads).length > 0 && (
                            <UploadedWadList
                                wads={wads}
                                selectedWad={selectedWad}
                                selectedLumpType={selectedLumpType}
                                selectedLump={selectedLump}
                                selectWad={this.selectWad}
                                deleteWad={this.deleteWad}
                                deleteWads={this.deleteWads}
                            />
                        )}
                    </div>
                    {selectedWad.id
                        && (
                            <WadDetails
                                selectedWad={selectedWad}
                                selectedLump={selectedLump}
                                selectedLumpType={selectedLumpType}
                                selectWad={this.selectWad}
                                selectLump={this.selectLump}
                                selectLumpType={this.selectLumpType}
                                deleteWad={this.deleteWad}
                                updateFilename={this.updateFilename}
                                focusOnWad={this.focusOnWad}
                                focusOnLump={this.focusOnLump}
                            />
                        )}
                </div>
                <BackToTop focusOnWad={this.focusOnWad} />
            </div>
        );
    }
}
