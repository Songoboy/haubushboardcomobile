import React, { Component } from 'react';
import { Text, ScrollView, Image , ImageBackground} from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
// import * as Animatable from 'react-native-animatable';
// import * as MailComposer from 'expo-mail-composer';

class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                        {/* <Text style={{marginBottom: 10}}>Kanani Langley, Owner - Artist</Text>
                        
                        <Image
                            source={require("./images/HAUBUSH_Home.jpg")}
                            style={{
                                width: 395
                            }}
                            /> */}

                <ImageBackground
                        source={require("./images/HAUBUSH_Home.jpg")}
                        style={{
                        height: 700,
                        width: 395,
                        position: "relative", // because it's parent
                        // top: 2,
                        // left: 2
                        }}
                    >
                        <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: 25,
                            color: "yellow",
                            position: "absolute", // child
                            top: 40, // position where you want
                            left: 120,
                            right: 20,
                        }}
                        >Welcome to</Text>
                        <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: 30,
                            color: "yellow",
                            textAlign: "center",
                            position: "absolute", // child
                            top: 330, // position where you want
                            left: 20,
                            right: 20,
                        }}
                        >
                        Home of the Handcrafted Hawaiian Skateboards</Text>
                        <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: 12,
                            color: "white",
                            textAlign: "center",
                            position: "absolute", // child
                            top: 600, // position where you want
                            left: 20,
                            right: 20,
                        }}
                        >Copyright © 2021 Hau Bush Board Co - All Rights Reserved.</Text>
                        <Text
                        style={{
                            fontWeight: "regular",
                            fontSize: 22,
                            color: "white",
                            textAlign: "center",
                            position: "absolute", // child
                            top: 450, // position where you want
                            left: 20,
                            right: 20,
                        }}
                        >Recycled...Reused...Reclaimed</Text>
                        <Text
                        style={{
                            fontWeight: "regular",
                            fontSize: 18,
                            color: "yellow",
                            textAlign: "center",
                            position: "absolute", // child
                            top: 500, // position where you want
                            left: 20,
                            right: 20,
                        }}
                        >“...made with aloha, protected by mana...”</Text>
                    </ImageBackground>
            </ScrollView>
        );
    }
}

export default Home;

// Recycled...Reused...Reclaimed
// “...made with aloha, protected by mana...”


// import React, { Component } from 'react';
// import { View, Text, ScrollView, FlatList } from 'react-native';
// import { Card } from 'react-native-elements';
// import { HOMEPAGE } from '../shared/homepage';

// function RenderItem({item}) {
//     if (item) {
//         return (
//             <ScrollView>
//             <Card style 
//                 // featuredTitle={item.name}
//                 image={require('./images/HAUBUSH_Home.jpg')}
//             >
//                 <Text style={{margin: 10}}>
//                     {item.description}
//                 </Text>
//             </Card>
//             </ScrollView>
//         );
//     }
//     return <View />;
// }

// class Home extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             homepage: HOMEPAGE
//         };
//     }

//     static navigationOptions = {
//         title: 'Home'
//     }

//     render() {
//         return (
//             <ScrollView>
//                 <RenderItem 
//                     item={this.state.homepage.filter(homepage => homepage.featured)[0]}
//                 />
//             </ScrollView>
//         );
//     }
// }

// export default Home;








// import React from "react";
// import { ImageBackground, StyleSheet, Text, View } from "react-native";

// const image = ('./components/images/HAUBUSH_Home.jpg');

// const App = () => (
//   <View style={styles.container}>
//     <ImageBackground source={image} style={styles.image}>
//       <Text style={styles.text}>
//           Welcome to
//           Hau Bush Board Co.
//           </Text>
//     </ImageBackground>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column"
//   },
//   image: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "center"
//   },
//   text: {
//     color: "white",
//     fontSize: 25,
//     fontWeight: "bold",
//     textAlign: "center",
//     backgroundColor: "#000000a0"
//   }
// });

// export default App;