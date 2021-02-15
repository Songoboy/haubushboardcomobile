import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

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

function Section(props) {
    return <RenderSection section={props.section} />;
}

export default Section;