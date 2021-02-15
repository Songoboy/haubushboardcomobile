import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import Section from './SectionComponent';
import { View } from 'react-native';
import { SECTIONS } from '../shared/sections';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: SECTIONS,
            selectedSection: null
        };
    }

    onSectionSelect(sectionId) {
        this.setState({selectedSection: sectionId});
    }

        render() {
            return (
        <View style={{flex: 1}}>
                <Directory
                    sections={this.state.sections}
                    onPress={sectionId => this.onSectionSelect(sectionId)}
                />
                <Section
                    section={this.state.sections.filter(
                        section => section.id === this.state.selectedSection)[0]}
                />
            </View>
        );    
    }
}

//     render() {
//         return <Directory campsites={this.state.campsites} />;
//     }
// }

export default Main;