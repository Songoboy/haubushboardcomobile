import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
// import * as Animatable from 'react-native-animatable';
// import * as MailComposer from 'expo-mail-composer';

class Clothing extends Component {

    static navigationOptions = {
        title: 'Clothing/Stickers'
    }

    render() {
        return (
            <ScrollView>
                    <Card title='Missy Tanks'>
                    <Text style={{marginBottom: 10}}>Comfortable and stylish tank tops for the ladies</Text>
                       <Image
                            source={require("./images/Clothing_MissTank.jpg")}
                            style={{
                                width: 330
                            
                            }}
                            />
                    </Card>
                    <Card title='Sticker Decals'>
                    <Text style={{marginBottom: 10}}>Show your support of Hau Bush Board Co with these multi-sized sticker decals</Text>
                       <Image
                            source={require("./images/Clothing_sticker2.jpg")}
                            style={{
                                width: 330
                            
                            }}
                            />
                    </Card>
                    <Card title='Keiki Shirts'>
                    <Text style={{marginBottom: 10}}>Even the keiki can represent Hau Bush Board Co.!</Text>
                       <Image
                            source={require("./images/Clothing_Keiki.jpg")}
                            style={{
                                width: 330
                            
                            }}
                            />
                    </Card>
            </ScrollView>
        );
    }
}

export default Clothing;