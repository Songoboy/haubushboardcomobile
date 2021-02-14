import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { SECTIONS } from '../shared/sections';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: SECTIONS
        };
    }

    render() {
        return <Directory sections={this.state.sections} />;
    }
}

export default Main;