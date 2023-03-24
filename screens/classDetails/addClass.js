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
    const DatCollectinRef = collection(db, "Courses"); //Reference of Database collection

    //Inputs handle function
    const handleChangeText = (name, value) => {
        setData((prevState) => ({ ...prevState, [name]: value }));
    };

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    //Create user function,include firebase methods
    const add_data = async () => {
        try {
            await addDoc(DatCollectinRef, {
                subjectName: data.subjectName,
                grade: data.grade,
                classType: data.classType,
                teacherName: data.teacherName,
                day: data.day,
                time: data.time,
                hallNo: data.hallNo,

            });
            if (addDoc) {
                ToastAndroid.show("Class Details Submitted Successfully!", ToastAndroid.SHORT); //application toast message
                navigation.navigate("Add Class Next")

            }
        } catch (e) {
            //error handling
            ToastAndroid.show("Empty Form cannot be submitted! Please fill all fields !", ToastAndroid.SHORT); //application toast message

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
                    Add Class Information
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

                    {/* submit button */}
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={2}
                        onPress={() => add_data()}
                        underlayColor="#0084fffa"

                    >
                        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }} >
                            <Icon
                                name="arrow-circle-right"
                                size={20}
                                color="white"
                            /> &nbsp;
                            PROCEED TO NEXT
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
