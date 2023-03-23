import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    ScrollView,
    ToastAndroid,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { db } from "../../firebase-config/firebase-config";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";

export default function UserList() {
    const [getData, setGetData] = useState("");
    const navigation = useNavigation();
    const DatCollectinRef = collection(db, "Courses"); //firebase databse reference
    const [ignored, forceUpdate] = React.useReducer((x) => x + 1, 0); //the method for refresh functions

    useEffect(() => {
        //fetch the all data from firebase and set it to usestate, this firebase method
        const getAllData = async () => {
            const data = await getDocs(DatCollectinRef);
            setGetData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            forceUpdate();
        };
        getAllData();
    }, [ignored]);

    //delete users from datasase
    const deleteUser = async (id) => {
        try {
            const UserDoc = doc(db, "Courses", id);
            await deleteDoc(UserDoc);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        ToastAndroid.show("Class Details Deleted Successfully!", ToastAndroid.SHORT);
        forceUpdate();
    };

    return (

        <ScrollView style={styles.scrollView}>
            <View>
                <Text
                    style={{
                        color: "#0D0140",
                        fontWeight: "bold",
                        fontSize: 30,
                        marginTop: 20,
                        textAlign: "center",
                    }}
                >
                    All Class Information
                </Text>
                {/* Store feched data in list using react native flatlist */}
                <FlatList
                    style={{
                        margin: 5,
                        height: "95%",
                    }}
                    data={getData}
                    renderItem={({ item }) => (
                        <View
                            style={{
                                margin: 5,
                                backgroundColor: "#fff",
                                padding: 10,
                                borderRadius: 15,
                                elevation: 10,
                            }}
                        >
                            <Text style={styles.text}>Subject Name : {item.subjectName}</Text>
                            <Text style={styles.text}>Grade : {item.grade}</Text>
                            <Text style={styles.text}>Class Type : {item.classType}</Text>
                            <Text style={styles.text}>Teacher's Name : {item.teacherName}</Text>
                            <Text style={styles.text}>Day Of Class : {item.day}</Text>
                            <Text style={styles.text}>Time Duration Of Class : {item.time}</Text>
                            <Text style={styles.text}>Hall Number : {item.hallNo}</Text>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: "row",
                                    justifyContent: "flex-end",
                                }}
                            >
                                {/* update button */}
                                <TouchableOpacity
                                    style={{
                                        marginTop: 15,
                                        flex: 0.4,
                                        backgroundColor: "#0056A2",
                                        marginHorizontal: 5,
                                        height: 30,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: 10,
                                    }}
                                    activeOpacity={2}
                                    //pass data to another page using usenavigate parameterss to update user
                                    onPress={() => navigation.navigate("Update Class Info", { item })}
                                    underlayColor="#0084fffa"
                                >
                                    <Text style={{ fontSize: 15, color: "#fff" }}>UPDATE</Text>
                                </TouchableOpacity>
                                {/* delete button */}
                                <TouchableOpacity
                                    style={{
                                        marginTop: 15,
                                        flex: 0.4,
                                        backgroundColor: "tomato",
                                        marginHorizontal: 5,
                                        height: 30,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: 10,
                                    }}
                                    activeOpacity={2}
                                    onPress={() => deleteUser(item.id)}
                                    underlayColor="#0084fffa"
                                >
                                    <Text style={{ fontSize: 15, color: "#fff" }}>DELETE</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                ></FlatList>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "#0D0140",
        marginVertical: 5,
        fontSize: 15,
    },
    button: {
        marginTop: 15,
        backgroundColor: "#448AFF",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7,
    },

    scrollView: {

        marginHorizontal: 20,

    },
});
