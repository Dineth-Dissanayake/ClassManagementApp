import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { db } from "../../firebase-config/firebase-config";
import { useNavigation } from "@react-navigation/native";
import { collection, addDoc } from "firebase/firestore";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LoginPage() {
  const [data, setData] = useState("");
  const navigation = useNavigation();
  const DatCollectinRef = collection(db, "Courses"); //Reference of Database collection

  //Inputs handle function
  const handleChangeText = (name, value) => {
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const re = /^[0-9\b]+$/;
    const parentname = /^[a-zA-Z]/;

    if (subjcode == "" || classadmFee == "" || classfee == "" || startDate == ""  ) {
        ToastAndroid.show("Fields cannot be empty", ToastAndroid.SHORT); //application toast message
      return false;
    }
    else if (subjcode.length < 4 || subjcode.length >4 || !re.test(subjcode)) {
      ToastAndroid.show("Invalid Subject Code", "Subject code length should be 4 character & Number",ToastAndroid.SHORT);
    return false;
  }
    else if (!re.test(subjcode) || subjcode.length != 10) {
      ToastAndroid.show("Invalid subject code", "Subject code cannot have more than 10 characters",ToastAndroid.SHORT);
    return false;
  }    
    }  

  //Create user function,include firebase methods
  const add_data = async () => {
    try {
      await addDoc(DatCollectinRef, {
        subjcode: data.subjcode,
        classadmFee: data.classadmFee,
        classfee: data.classfee,
        startDate: data.startDate,
      });
      if (addDoc) {
        ToastAndroid.show("Class Details Submitted Successfully!", ToastAndroid.SHORT); //application toast message
        navigation.navigate("Class Info Add Success")
      }
    } catch (e) {
      //Handling an error
      console.error("Error In Data Insertion: ", e);
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode, errorMessage);
    }
  };

  return (

    <View style={{ flex: 1, top: 20 }}>

      <Image
        style={{ width: "100%", height: "25%", alignItems: "center", marginTop: 20 }}
        source={require('../../assets/classAdd.gif')} />

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
        <Text style={styles.text}>Subject Code:</Text>
        {/* input fields  */}
        <TextInput
          style={{
            borderColor: "#67afff",
            borderWidth: 1.5,
            borderRadius: 10,
            padding: 5,
            paddingLeft: 10,
          }}
          keyboardType="subjcode"
          placeholder="Input Subject Code"
          onChangeText={(val) => handleChangeText("subjcode", val)}
        ></TextInput>
        {/* lables */}
        <Text style={styles.text}>Class Admission Fee:</Text>
        {/* input fields  */}
        <TextInput
          style={{
            borderColor: "#67afff",
            borderWidth: 1.5,
            borderRadius: 10,
            padding: 5,
            paddingLeft: 10,
          }}
          placeholder="Input Class Admission Fee"
          onChangeText={(val) => handleChangeText("classadmFee", val)}
        ></TextInput>

        <Text style={styles.text}>Monthly Class Fee:</Text>
        {/* input fields  */}
        <TextInput
          style={{
            borderColor: "#67afff",
            borderWidth: 1.5,
            borderRadius: 10,
            padding: 5,
            paddingLeft: 10,
          }}
          placeholder="Input Class Fee"
          onChangeText={(val) => handleChangeText("classfee", val)}
        ></TextInput>

        <Text style={styles.text}>Class Start Date:</Text>
        {/* input fields  */}
        <TextInput
          style={{
            borderColor: "#67afff",
            borderWidth: 1.5,
            borderRadius: 10,
            padding: 5,
            paddingLeft: 10,
          }}
          placeholder="Input Start Date"
          onChangeText={(val) => handleChangeText("startDate", val)}
        ></TextInput>

        {/* submit button */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={2}
          onPress={() => add_data()}
          underlayColor="#0084fffa"
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
            <Icon
              name="check-square"
              size={20}
              color="white"
            /> &nbsp;
            SUBMIT
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginHorizontal: 15 }}>
      </View>
      <View >
        <View >
        </View>
      </View>
    </View>  
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
    backgroundColor: "#000080",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },
  scrollView: {

    marginHorizontal: 20,

  },
});
