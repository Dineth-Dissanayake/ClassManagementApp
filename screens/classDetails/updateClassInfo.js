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
        subjectName: "",
        grade: "",
        classType: "",
        teacherName: "",
        day: "",
        time: "",
        hallNo: "",
    };

    useEffect(() => {
        const updatemember = async () => {
            try {
                const docRef = await getDoc(doc(db, "Courses", id));
                // console.log("Document update data:", docRef.data());
                setData({ ...docRef.data(), id: docRef.id });
            } catch (e) {
                console.error("Error In Data Insertion: ", e);
            }
        };

        updatemember();
    }, []);

    const handleChangeText = (name, value) => {
        setData((prevState) => ({ ...prevState, [name]: value }));
    };

    const UpdateUser = async () => {
        try {
            await updateDoc(doc(db, "Courses", id), {
                subjectName: data.subjectName,
                grade: data.grade,
                classType: data.classType,
                teacherName: data.teacherName,
                day: data.day,
                time: data.time,
                hallNo: data.hallNo,

            });
            if (updateDoc) {
                ToastAndroid.show("Class Information Updated Successfully!", ToastAndroid.SHORT);
                navigation.navigate("View Class");
            }
        } catch (e) {
            console.error("Error In Data Insertion: ", e);
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode, errorMessage);
        }    };

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
                    Update Class Information
                </Text>

                <View
                    style={{
                        margin: 5,
                        borderBottomWidth: 1,
                        borderColor: "#BDBDBD",
                        padding: 10,
                    }}
                >

                    {/* lables */}
                    <Text style={styles.text}>Subject Name</Text>
                    {/* input fields  */}
                    <TextInput
                        style={{
                            borderColor: "#67afff",
                            borderWidth: 1.5,
                            borderRadius: 10,
                            padding: 5,
                            paddingLeft: 10,
                        }}
                        keyboardType="subjectName"
                        placeholder="Input Subject Name"
                        onChangeText={(val) => handleChangeText("subjectName", val)}
                    ></TextInput>
                    {/* lables */}
                    <Text style={styles.text}>Grade</Text>
                    {/* input fields  */}
                    <TextInput
                        style={{
                            borderColor: "#67afff",
                            borderWidth: 1.5,
                            borderRadius: 10,
                            padding: 5,
                            paddingLeft: 10,
                        }}
                        placeholder="Input Grade"
                        onChangeText={(val) => handleChangeText("grade", val)}
                    ></TextInput>

                    <Text style={styles.text}>Class Type</Text>
                    {/* input fields  */}
                    <TextInput
                        style={{
                            borderColor: "#67afff",
                            borderWidth: 1.5,
                            borderRadius: 10,
                            padding: 5,
                            paddingLeft: 10,
                        }}
                        placeholder="Input Class Type"
                        onChangeText={(val) => handleChangeText("classType", val)}
                    ></TextInput>

                    <Text style={styles.text}>Teacher's Name</Text>
                    {/* input fields  */}
                    <TextInput
                        style={{
                            borderColor: "#67afff",
                            borderWidth: 1.5,
                            borderRadius: 10,
                            padding: 5,
                            paddingLeft: 10,
                        }}
                        placeholder="Input Teacher's Name"
                        onChangeText={(val) => handleChangeText("teacherName", val)}
                    ></TextInput>

                    <Text style={styles.text}>Day Of Class:</Text>
                    {/* input fields  */}
                    <TextInput
                        style={{
                            borderColor: "#67afff",
                            borderWidth: 1.5,
                            borderRadius: 10,
                            padding: 5,
                            paddingLeft: 10,
                        }}
                        placeholder="Input day"
                        onChangeText={(val) => handleChangeText("day", val)}
                    ></TextInput>

                    <Text style={styles.text}>Time Duration Of Class:</Text>
                    {/* input fields  */}
                    <TextInput
                        style={{
                            borderColor: "#67afff",
                            borderWidth: 1.5,
                            borderRadius: 10,
                            padding: 5,
                            paddingLeft: 10,
                        }}
                        placeholder="Input Time Duration"
                        onChangeText={(val) => handleChangeText("time", val)}
                    ></TextInput>
                    
                    <Text style={styles.text}>Hall Number:</Text>
                    {/* input fields  */}
                    <TextInput
                        style={{
                            borderColor: "#67afff",
                            borderWidth: 1.5,
                            borderRadius: 10,
                            padding: 5,
                            paddingLeft: 10,
                        }}
                        placeholder="Input Hall Number"
                        onChangeText={(val) => handleChangeText("hallNo", val)}
                    ></TextInput>

                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={2}
                        onPress={() => UpdateUser()}
                        underlayColor="#0084fffa"
                    >
                        <Text style={{ fontSize: 17, fontWeight: "bold", color: "#fff" }}>
                            Update Class Information
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
