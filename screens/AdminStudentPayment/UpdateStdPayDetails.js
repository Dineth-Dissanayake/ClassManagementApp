import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ToastAndroid,
    ScrollView
} from "react-native";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase-config/firebase-config";
import { useNavigation } from "@react-navigation/native";
import {
    collection,
    getDocs,
    updateDoc,
    getDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

export default function UpdateUser({ route }) {
    const { item } = route.params;
    const id = item.id;
    const [data, setData] = useState("");
    const navigation = useNavigation();
    const initialState = {
        stdName: "",
        stdphoneNu: "",
        stdemail: "",
        stdparentname: "",
        parentContactNum: "",
    };

    useEffect(() => {
        const updatemember = async () => {
            try {
                const docRef = await getDoc(doc(db, "Payment", id));
                // console.log("Document update data:", docRef.data());
                setData({ ...docRef.data(), id: docRef.id });
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        };

        updatemember();
    }, []);

    const handleChangeText = (name, value) => {
        setData((prevState) => ({ ...prevState, [name]: value }));
    };

    const UpdateUser = async () => {
        try {
            await updateDoc(doc(db, "Payment", id), {
                stdName: data.stdName,
                stdphoneNu: data.stdphoneNu,
                stdemail: data.stdemail,
                stdparentname: data.stdparentname,
                parentContactNum: data.parentContactNum,


            });
            if (updateDoc) {
                ToastAndroid.show("Updated successfully!", ToastAndroid.SHORT);
                navigation.navigate("admin stdpay");
            }
        } catch (e) {
            console.error("Error adding document: ", e);
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode, errorMessage);
        }
    };

    return (
        <ScrollView style={styles.scrollView}>
            <View style={{ flex: 1, top: 20 }}>
                <Text
                    style={{
                        color: "#0D0140",
                        fontWeight: "bold",
                        fontSize: 20,
                        marginTop: 30,
                        textAlign: "center",
                    }}
                >
                    Update Student Payment Details
                </Text>
                <View
                    style={{
                        margin: 5,
                        borderBottomWidth: 1,
                        borderColor: "#BDBDBD",
                        padding: 10,
                    }}
                >
                    <Text style={styles.text}>Student Name</Text>
                    <TextInput
                        style={{
                            borderColor: "#67afff",
                            borderWidth: 1.5,
                            borderRadius: 10,
                            padding: 5,
                            paddingLeft: 10,
                        }}
                        keyboardType="name"
                        placeholder="enter student name"
                        value={data.stdName}
                        onChangeText={(val) => handleChangeText("stdName", val)}
                    ></TextInput>

                    <Text style={styles.text}>Student Phone Number</Text>
                    <TextInput
                        style={{
                            borderColor: "#67afff",
                            borderWidth: 1.5,
                            borderRadius: 10,
                            padding: 5,
                            paddingLeft: 10,
                        }}
                        placeholder="enter student phone number"
                        value={data.stdphoneNu}
                        onChangeText={(val) => handleChangeText("stdphoneNu", val)}
                    ></TextInput>

                    <Text style={styles.text}>Student Email</Text>
                    <TextInput
                        style={{
                            borderColor: "#67afff",
                            borderWidth: 1.5,
                            borderRadius: 10,
                            padding: 5,
                            paddingLeft: 10,
                        }}
                        placeholder="enter student email"
                        value={data.stdemail}
                        onChangeText={(val) => handleChangeText("stdemail", val)}
                    ></TextInput>

                    <Text style={styles.text}>Parent Name </Text>
                    <TextInput
                        style={{
                            borderColor: "#67afff",
                            borderWidth: 1.5,
                            borderRadius: 10,
                            padding: 5,
                            paddingLeft: 10,
                        }}
                        placeholder="enter parent name"
                        value={data.stdparentname}
                        onChangeText={(val) => handleChangeText("stdparentname", val)}
                    ></TextInput>

                    <Text style={styles.text}>Parent Contact Number</Text>
                    <TextInput
                        style={{
                            borderColor: "#67afff",
                            borderWidth: 1.5,
                            borderRadius: 10,
                            padding: 5,
                            paddingLeft: 10,
                        }}
                        placeholder="enter parent contact number"
                        value={data.parentContactNum}
                        onChangeText={(val) => handleChangeText("name", val)}
                    ></TextInput>
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={2}
                        onPress={() => UpdateUser()}
                        underlayColor="#0084fffa"
                    >
                        <Text style={{ fontSize: 17, fontWeight: "bold", color: "#fff" }}>
                            Update Student Payment Details
                        </Text>
                    </TouchableOpacity>
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
        marginTop: 15,
        backgroundColor: "#0D0140",
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7,
    },

    scrollView: {

        marginHorizontal: 20,

    },
});
