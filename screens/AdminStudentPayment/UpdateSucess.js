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
                Student Payment Details Update Succefully !!

            </Text>
            <Image
                style={{ width: "80%", height: "60%", alignItems: "center", marginTop: -30 }}
                source={require('../../assets/S.gif')} />
            <View >

                <Text>{"\n"}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("stdpay report")}
                >
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
                        <Icon
                            name="print"
                            size={30}
                            color="white"
                        /> &nbsp;
                        GO TO SUMMARY SHEET
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
        width: 320
    },

    loan: {
        color: "#008000",
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "left",
        marginRight: 260

    }
});