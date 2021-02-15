import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { SECTIONS } from '../shared/sections';

function RenderSection({section}) {
    
    if (section) {
        return (
            <Card 
                featuredTitle={section.name}
                image={require('./images/HAUBUSH_Main2.jpg')}
            >
                <Text style={{margin: 10}}>
                    {section.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class Section extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sections: SECTIONS
        };
    }

    static navigationOptions = {
        title: 'Section Information'
    }

    render() {
        const sectionId = this.props.navigation.getParam('sectionId');
        const section = this.state.sections.filter(section => section.id === sectionId)[0];
        return <RenderSection section={section} />;
    }
}

export default Section;