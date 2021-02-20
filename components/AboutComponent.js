import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
// import { Text, ScrollView } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
// import * as Animatable from 'react-native-animatable';
// import * as MailComposer from 'expo-mail-composer';

class About extends Component {

    static navigationOptions = {
        title: 'About Us'
    }

    render() {
        return (
            <ScrollView>
                    <Card title='The Passion Behind the Boards:   
                    Owner /Artist Kanani Langley -                Hau Bush Boy'>
                       <Image
                            source={require("./images/About_Main.jpg")}
                            style={{
                                width: 330
                            }}
                            />
                      <Text style={{marginBottom: 0}}></Text>
                      <Text style={{marginBottom: 10}}>
                        Born and raised in Ewa Beach HI, this surfer-skater grew up only 2 short minutes from his beloved,
                        hometown surf break...Hau Bush. When the waves were down it was time to “he’e ‘aina’...surf the land.
                        Kanani was consumed with all things skate and surf at a very young age, so when he and his friends
                        built a 10ft high ramp at 13years old, it was just the beginning! This Hau Bush Boy’s passion runs deep
                        for his beach, our ohana, and his Hawaiian people. Kanani still lives in his childhood home,
                        in Ewa Beach with his wife and 3 pups</Text>
                      <Image
                            source={require("./images/About_3.jpg")}
                            style={{
                                width: 330
                            
                            }}
                            />
                    </Card>
            </ScrollView>
        );
    }
}

export default About;