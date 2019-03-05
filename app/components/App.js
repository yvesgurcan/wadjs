import React, { Component, Fragment } from "react";

import style from "./App.css";

import AppTitle from './AppTitle'
import Uploader from './Uploader'

export default class App extends Component {
    render () {
        return (
            <Fragment>
                <AppTitle />
                <Uploader />
            </Fragment>
        );
    }
}
