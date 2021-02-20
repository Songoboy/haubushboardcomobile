import React, { Component } from 'react';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import Section from './SectionComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Skateboards from './SkateboardsComponent';
import Clothing from './ClothingComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

const DirectoryNavigator = createStackNavigator(
    {
        Directory: { screen: Directory },
        Section: { screen: Section },
        // About: { screen: About },
        // Contact: { screen: Contact }
    }, 
    {
        initialRouteName: 'Directory',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#7D6447'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#7D6447'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const AboutNavigator = createStackNavigator(
    {
        Home: { screen: About }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#7D6447'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const SkateboardsNavigator = createStackNavigator(
    {
        Home: { screen: Skateboards }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#7D6447'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const ClothingNavigator = createStackNavigator(
    {
        Home: { screen: Clothing }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#7D6447'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const ContactNavigator = createStackNavigator(
    {
        Home: { screen: Contact }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#7D6447'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Directory: { screen: DirectoryNavigator },
        About: { screen: AboutNavigator },
        Skateboards: { screen: SkateboardsNavigator },
        Clothing: { screen: ClothingNavigator },
        Contact: { screen: ContactNavigator }
    },
    {
        drawerBackgroundColor: '#CFB990'
    }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
            }}>
                <AppNavigator />
            </View>
        );    
    }
}

export default Main;