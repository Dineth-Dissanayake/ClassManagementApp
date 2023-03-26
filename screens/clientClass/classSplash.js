import React, { Component } from 'react';
import {
    Platform, StyleSheet, View, Text,
    Image, TouchableOpacity, Alert, ScrollView
} from 'react-native';

export default class Myapp extends Component<{}>
{
    constructor() {
        super();
        this.state = {
            isVisible: true,
        }
    }
    Hide_Splash_Screen = () => {
        this.setState({
            isVisible: false
        });
    }

    componentDidMount() {
        var that = this;
        setTimeout(function () {
            that.Hide_Splash_Screen();
        }, 5000);
    }

    render() {
        let Splash_Screen = (

            <View style={styles.SplashScreen_RootView}>
                <View style={styles.SplashScreen_ChildView}>

                    <Image
                        style={{ width: "100%", height: "50%", alignItems: "center", resizeMode: 'contain', marginTop: '-70'}}
                        source={require('../../assets/clsSplash.gif')} />
                    <Image
                        style={{ width: "100%", height: "70%", alignItems: "center", resizeMode: 'contain' }}
                        source={require('../../assets/clsSplash2.gif')} />

                </View>
            </View>)
        return (
            <View style={styles.MainContainer}>
                
                {
                    (this.state.isVisible === true) ? Splash_Screen : null
                }
            </View>
        );
    }
}
const styles = StyleSheet.create(
    {
        MainContainer:
        {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: (Platform.OS === 'ios') ? 20 : 0
        },

        SplashScreen_RootView:
        {
            justifyContent: 'center',
            flex: 1,
            margin: 10,
            position: 'absolute',
            width: '100%',
            height: '100%',
        },

        SplashScreen_ChildView:
        {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            flex: 1,
        },
    });  