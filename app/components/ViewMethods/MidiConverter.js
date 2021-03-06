import TextConverter from './TextConverter';

import MidiConverter from '../../webWorkers/midiConverter';

import { WEB_WORKER_MAX_RETRIES } from '../../lib/constants';
import mediaSessionSupport from '../../lib/mediaSessionSupport';

const {
    supported: mediaSessionSupported,
    ignored: mediaSessionIgnored,
} = mediaSessionSupport();

export default class MidiConverterMethods extends TextConverter {
    startMidiConverterWorker = () => {
        this.startWorker({
            workerId: 'midiConverter',
            workerClass: MidiConverter,
            onmessage: this.saveConvertedMidi,
        });
    }

    addToMidiConversionQueue({ wad }) {
        this.createAndStartQueue({
            workerId: 'midiConverter',
            workerStarter: () => this.startMidiConverterWorker(),
            targetObject: 'midis',
            formatCheck: lumpFormat => lumpFormat === 'MUS' || lumpFormat === 'MIDI',
            handleNextLump: this.sendNextMidiLump,
            queueStarted: () => {
                const { preselectedMidi } = this.state;
                if (!preselectedMidi) {
                    const { midis: { converted: convertedMidis } } = this.state;
                    this.selectFirstMidi({ midis: convertedMidis });
                }
            },
            wad,
        });
    }

    sendNextMidiLump = ({ nextLump, nextWadId }) => {
        this.catchErrors(() => {
            let nextLumpInQueue = {};
            if (!nextLump && nextWadId) {
                const result = this.getNextItemInQueue({
                    targetObject: 'midiConverter',
                    wadId: nextWadId,
                });

                nextLumpInQueue = result.nextLump;
            }

            this.midiConverter.postMessage({
                wadId: nextWadId,
                lump: nextLump || nextLumpInQueue,
            });
        }, () => this.restartConvertingWads({ nextLump, nextWadId }),
            { displayErrorMessage: this.midiConverterRetries === WEB_WORKER_MAX_RETRIES });
    }

    saveConvertedMidi = (payload) => {
        this.saveConvertedLump({
            targetObject: 'midis',
            handleNextLump: this.sendNextMidiLump,
            lumpSaved: () => {
                const { preselectedMidi } = this.state;
                if (!preselectedMidi) {
                    const { midis: { converted: convertedMidis } } = this.state;
                    this.selectFirstMidi({ midis: convertedMidis });
                }
            },
            payload,
        });
    }

    restartMidiConverterWorker = (nextPayload) => {
        this.addGlobalMessage({
            type: 'info',
            id: 'mc',
            text: 'Restarting midiConverter...',
        });

        this.restartWebWorker({
            workerId: 'midiConverter',
            workerStarter: this.startMidiConverterWorker,
            sendNextLump: () => this.sendNextMidiLump(nextPayload),
        });
    }

    selectFirstMidi = ({ midis }) => {
        const { wads, selectedMidi } = this.state;

        if (selectedMidi.name) {
            return;
        }

        const wadIds = Object.keys(midis);

        if (wadIds.length > 0) {
            const firstWadId = wadIds[0];

            const lumpTypes = Object.keys(midis[firstWadId]);

            if (lumpTypes.length > 0) {
                const firstLumpType = lumpTypes[0];
                const midiIds = Object.keys(midis[firstWadId][firstLumpType]);

                if (midiIds.length > 0) {
                    const firstMidiId = midiIds[0];
                    const firstMidiData = midis[firstWadId][firstLumpType][firstMidiId];
                    const wad = wads[firstWadId];
                    const lump = wad && wad.lumps && wad.lumps.music && wad.lumps.music[firstMidiId];

                    if (!lump) {
                        return;
                    }

                    if (mediaSessionSupported && !mediaSessionIgnored) {
                        const wadName = wad ? wad.name : '';

                        navigator.mediaSession.metadata = new MediaMetadata({
                            title: lump.name,
                            artist: wadName,
                        });
                    }

                    this.setState(() => {
                        const newlySelectedMidi = {
                            data: firstMidiData,
                            lumpName: lump.name,
                            lumpType: lump.type,
                            wadId: firstWadId,
                            startedAt: 0,
                            time: 0,
                        };

                        return {
                            selectedMidi: newlySelectedMidi,
                            preselectedMidi: true,
                        };
                    });
                }
            }
        }
    }
}
