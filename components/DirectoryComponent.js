import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { SECTIONS } from '../shared/sections';

class Directory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sections: SECTIONS
        };
    }

    static navigationOptions = {
        title: 'Directory'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('Section', { sectionId: item.id })}
                    leftAvatar={{ source: require('./images/HAUBUSH_Main2.jpg')}}
                />
            );
        };

        return (
            <FlatList
                data={this.state.sections}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Directory;