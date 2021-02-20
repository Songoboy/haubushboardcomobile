import React, { Component } from 'react';
import { Text, ScrollView, Image } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
// import * as Animatable from 'react-native-animatable';
// import * as MailComposer from 'expo-mail-composer';

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        return (
            <ScrollView>
                    <Card title="Contact Information" wrapperStyle={{margin: 20}}>
                        <Text style={{marginBottom: 10}}>Kanani Langley, Owner - Artist</Text>
                        <Text>Phone: 1-808-348-6002</Text>
                        <Text style={{marginBottom: 10}}>Email: haubushboardco@gmail.com</Text>
                        <Text style={{marginBottom: 10}}>Follow us on Instagram @haubushboardco</Text>
                        
                        <Image
                            source={require("./images/Contact.jpg")}
                            style={{
                                width: 290
                            }}
                            />
                        <Button
                            title="Send Email"
                            buttonStyle={{backgroundColor: '#7D6447', margin: 40}}
                            icon={<Icon
                                name='envelope-o'
                                type='font-awesome'
                                color='#fff'
                                iconStyle={{marginRight: 10}}
                            />}
                            onPress={() => this.sendMail()}
                        />
                        </Card>
        </ScrollView>
        );
    }
}

export default Contact;

// render() {
//     return (
//         <ScrollView>
//             {/* <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
//                 <Card title="Contact Information" wrapperStyle={{margin: 20}}>
//                     <Text>1 Nucamp Way</Text>
//                     <Text>Seattle, WA 98001</Text>
//                     <Text style={{marginBottom: 10}}>Kanani Langley</Text>
//                     <Text>Phone: 1-808-348-6002</Text>
//                     <Text style={{marginBottom: 10}}>Email: haubushboardco@gmail.com</Text>
//                     <Text>Follow us on Instagram @haubushboardco</Text>
//                     <Button
//                         title="Send Email"
//                         buttonStyle={{backgroundColor: '#5637DD', margin: 40}}
//                         icon={<Icon
//                             name='envelope-o'
//                             type='font-awesome'
//                             color='#fff'
//                             iconStyle={{marginRight: 10}}
//                         />}
//                         onPress={() => this.sendMail()}
//                     />
//                     </Card>
//             </Animatable.View> */}
//         </ScrollView>
//     );
// }