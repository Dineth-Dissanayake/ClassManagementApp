import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, Alert, Image, Text, } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Icon } from 'react-native-elements'


export default function App() {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text
                style={{
                    color: "#000080",
                    fontWeight: "bold",
                    fontSize: 30,
                    textAlign: "center",
                    alignItems: "center",
                    marginTop: 0,
                }}
            >
                Class Details Added successfully !!!
            </Text>
            <Image
                style={{ width: "80%", height: "60%", alignItems: "center", marginTop: -30 }}
                source={require('../../assets/classSuccess1.gif')} />
            <View >

                <Text>{"\n"}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Add Class Information")}
                >
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
                        <Icon
                            name="wpforms"
                            size={30}
                            color="white"
                        /> &nbsp;
                        BACK
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    image: {
        width: 250,
        height: 100,
    },
    input: {
        width: 500,
        borderColor: 'gray',
        borderWidth: 1,
    },

    text: {
        color: "#0D0140",
        marginVertical: 5,
        fontSize: 35,
        marginTop: 0
    },

    button: {
        marginTop: 15,
        backgroundColor: "#000080",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7,
        width: 120
    },

    loan: {
        color: "#008000",
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "left",
        marginRight: 260

    }
});