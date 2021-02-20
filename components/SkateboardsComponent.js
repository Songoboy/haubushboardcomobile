import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
// import * as Animatable from 'react-native-animatable';
// import * as MailComposer from 'expo-mail-composer';

class Skateboards extends Component {

    static navigationOptions = {
        title: 'Hawaiian Style Skateboards'
    }

    render() {
        return (
            <ScrollView>
                    <Card title='Hawaiian Style Skateboards'>
                    <Text style={{marginBottom: 10}}>To purchase one of these unique Hawaiian skateboards,
                      please contact Kanani @ 808-348-6002, or Direct Message via Instagram at hubushboardco</Text>
                       <Image
                            source={require("./images/Boards_10.jpg")}
                            style={{
                                width: 330
                            
                            }}
                            />
                    </Card>
                    <Card title='Papa Poko Series'>
                    <Text style={{marginBottom: 10}}>Hawaiian ‘short boards’ are 24”-25” long, perfect for carving</Text>
                       <Image
                            source={require("./images/Boards_6.jpg")}
                            style={{
                                width: 330
                            
                            }}
                            />
                    </Card>
                    <Card title='Papa Loa Series'>
                    <Text style={{marginBottom: 10}}>Hawaiian ‘long boards’ are 34” long, which is great for cruising</Text>
                       <Image
                            source={require("./images/Boards_1.jpg")}
                            style={{
                                width: 330
                            
                            }}
                            />
                    </Card>
                    <Card title='Custom Boards'>
                    <Text style={{marginBottom: 10}}>We LOVE special orders! Contact us to begin your special board</Text>
                       <Image
                            source={require("./images/About_10.jpg")}
                            style={{
                                width: 330
                            
                            }}
                            />
                    </Card>
            </ScrollView>
        );
    }
}

export default Skateboards;