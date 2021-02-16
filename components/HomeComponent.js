import React, { Component } from 'react';
import { View, Text, ScrollView, Image, ImageBackground } from 'react-native';
import { Card } from 'react-native-elements';
import { HOMEPAGE } from '../shared/homepage';

function RenderItem({item}) {
    if (item) {
        return (
            <Card style 
                featuredTitle={item.name}
                image={require('./images/HAUBUSH_Main2.jpg')}
            >
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            homepage: HOMEPAGE
        };
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <RenderItem 
                    item={this.state.homepage.filter(homepage => homepage.featured)[0]}
                />
            </ScrollView>
        );
    }
}

export default Home;

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