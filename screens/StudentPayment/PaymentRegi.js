import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ToastAndroid,
    ScrollView,
    StatusBar,
    RefreshControl,
} from "react-native";
import React, { useState } from "react";
import { db } from "../../firebase-config/firebase-config";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { collection, addDoc } from "firebase/firestore";

export default function LoginPage() {
    const [data, setData] = useState("");
    const navigation = useNavigation();
    const [refreshing, setRefreshing] = React.useState(false);
    const DatCollectinRef = collection(db, "Payment"); //database collection reference

    //inputs handle function
    const handleChangeText = (name, value) => {
        setData((prevState) => ({ ...prevState, [name]: value }));
    };

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);



    //create user function,include firebase methods
    const add_data = async () => {
        try {
            await addDoc(DatCollectinRef, {
                stid: data.stid,
                stdName: data.stdName,
                stdphoneNu: data.stdphoneNu,
                stdemail: data.stdemail,
                stdparentname: data.stdparentname,
                parentContactNum: data.parentContactNum,


            });
            if (addDoc) {
                ToastAndroid.show("Your payment successfull!", ToastAndroid.SHORT); //application toast message
                navigation.navigate("Add payment")


            }
        } catch (e) {
            //error handling
            ToastAndroid.show("You cant submit Empty form", ToastAndroid.SHORT); //application toast message

        }
    };

    return (


        <ScrollView style={styles.scrollView}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>


            <View style={{ flex: 1, top: 20 }}>

                <Text
                    style={{
                        color: "#000080",
                        fontWeight: "bold",
                        fontSize: 30,
                        marginTop: 30,
                        textAlign: "center",
                    }}
                >
                    Add Student Payment Information
                </Text>

                {/* user data entering form start form here */}
                <View
                    style={{
                        margin: 5,
                        borderBottomWidth: 1,
                        borderColor: "#BDBDBD",
                        padding: 10,
                    }}
                >
                    {/* lables */}
                    <Text style={styles.text}>Student ID</Text>
                    {/* input fields  */}
                    <TextInput
                        style={{
                            borderColor: "#67afff",
                            borderWidth: 1.5,
                            borderRadius: 10,
                            padding: 5,
                            paddingLeft: 10,
                        }}
                        keyboardType="student-id"
                        placeholder="Enter your student ID"
                        onChangeText={(val) => handleChangeText("stid", val)}
                    ></TextInput>
                    {/* lables */}
                    <Text style={styles.text}>Student Name</Text>
                    {/* input fields  */}
                    <TextInput
                        style={{
                            borderColor: "#67afff",
                            borderWidth: 1.5,
                            borderRadius: 10,
                            padding: 5,
                            paddingLeft: 10,
                        }}
                        placeholder="Enter Student name"
                        onChangeText={(val) => handleChangeText("stdName", val)}
                    ></TextInput>

                    <Text style={styles.text}>Student Contact Name</Text>
                    {/* input fields  */}
                    <TextInput
                        style={{
                            borderColor: "#67afff",
                            borderWidth: 1.5,
                            borderRadius: 10,
                            padding: 5,
                            paddingLeft: 10,
                        }}
                        placeholder="Contact Number"
                        onChangeText={(val) => handleChangeText("stdphoneNu", val)}
                    ></TextInput>

                    <Text style={styles.text}>Student Email</Text>
                    {/* input fields  */}
                    <TextInput
                        style={{
                            borderColor: "#67afff",
                            borderWidth: 1.5,
                            borderRadius: 10,
                            padding: 5,
                            paddingLeft: 10,
                        }}
                        placeholder="Student Email"
                        onChangeText={(val) => handleChangeText("stdemail", val)}
                    ></TextInput>

                    <Text style={styles.text}>Parent Name</Text>
                    {/* input fields  */}
                    <TextInput
                        style={{
                            borderColor: "#67afff",
                            borderWidth: 1.5,
                            borderRadius: 10,
                            padding: 5,
                            paddingLeft: 10,
                        }}
                        placeholder="Student Parent Name"
                        onChangeText={(val) => handleChangeText("stdparentname", val)}
                    ></TextInput>

                    <Text style={styles.text}>Parent Contact Number</Text>
                    {/* input fields  */}
                    <TextInput
                        style={{
                            borderColor: "#67afff",
                            borderWidth: 1.5,
                            borderRadius: 10,
                            padding: 5,
                            paddingLeft: 10,
                        }}
                        placeholder="Parent Contact Number"
                        onChangeText={(val) => handleChangeText("parentContactNum", val)}
                    ></TextInput>
                  
                    {/* submit button */}
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={2}
                        onPress={() => add_data()}
                        underlayColor="#0084fffa"

                    >
                        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }} >
                            <Icon
                                name="cc-visa"
                                size={20}
                                color="white"
                            /> &nbsp;
                            Proceed To Payment
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 15 }}>
                </View>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    text: {
        color: "#0D0140",
        marginVertical: 5,
        fontWeight: "bold",
        fontSize: 15,
    },
    button: {
        marginTop: 25,
        backgroundColor: "#0D0140",
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },

    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {

        marginHorizontal: 20,

    },
});
