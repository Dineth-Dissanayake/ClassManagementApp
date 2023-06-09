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
  const DatCollectinRef = collection(db, "Payment"); //database collection reference

  const [stdname, setStdname] = useState('');
  const [cardnumber, setCardnumber] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [cvc, setCvc] = useState('');



  //inputs handle function
  const handleChangeText = (name, value) => {
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const semail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const re = /^[0-9\b]+$/;
    const parentname = /^[a-zA-Z]/;

    if (stdname == "" || cardnumber == "" || expireDate == "" || cvc == "") {
      ToastAndroid.show("Feild cannot be empty", ToastAndroid.SHORT); //application toast message
      return false;
    }
    else if (cardnumber.length < 16 || studentId.length > 16 || !re.test(stid)) {
      ToastAndroid.show("Invalid Student ID STD length should be 6 character & Number", ToastAndroid.SHORT);
      return false;
    }
    else if (cvc.length < 4 || studentId.length > 4 || !re.test(stid)) {
      ToastAndroid.show("Invalid cvc", ToastAndroid.SHORT);
      return false;
    }


    else {
      return true;
    }
  };

  //create user function,include firebase methods
  const add_data = async () => {
    if (validateForm()) {
      try {
        await addDoc(DatCollectinRef, {
          stdname: data.stdname,
          cardnumber: data.cardnumber,
          expireDate: data.expireDate,
          cvc: data.cvc,
        });
        if (addDoc) {
          ToastAndroid.show("Your payment successfull!", ToastAndroid.SHORT); //application toast message
          navigation.navigate("std pay success")
        }
      } catch (e) {
        //error handling
        console.error("Error adding document: ", e);
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      }
    }

  };




  return (

    <View style={{ flex: 1, top: 20 }}>

      <Image
        style={{ width: "100%", height: "25%", alignItems: "center", marginTop: 20 }}
        source={require('../../assets/creditcard.gif')} />

      <Text
        style={{
          color: "#000080",
          fontWeight: "bold",
          fontSize: 30,
          marginTop: 30,
          textAlign: "center",
        }}
      >
        Add Payment Information
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
          keyboardType="student-name"
          placeholder="Enter your name"
          onChangeText={(val) => handleChangeText("stdname", val)}
        ></TextInput>
        {/* lables */}
        <Text style={styles.text}>Card Number</Text>
        {/* input fields  */}
        <TextInput
          style={{
            borderColor: "#67afff",
            borderWidth: 1.5,
            borderRadius: 10,
            padding: 5,
            paddingLeft: 10,
          }}
          placeholder="enter card number"
          onChangeText={(val) => handleChangeText("cardnumber", val)}
        ></TextInput>

        <Text style={styles.text}>Expire Date</Text>
        {/* input fields  */}
        <TextInput
          style={{
            borderColor: "#67afff",
            borderWidth: 1.5,
            borderRadius: 10,
            padding: 5,
            paddingLeft: 10,
          }}
          placeholder="MM/YY"
          onChangeText={(val) => handleChangeText("expireDate", val)}
        ></TextInput>

        <Text style={styles.text}>CVC</Text>
        {/* input fields  */}
        <TextInput
          style={{
            borderColor: "#67afff",
            borderWidth: 1.5,
            borderRadius: 10,
            padding: 5,
            paddingLeft: 10,
          }}
          placeholder="CVC"
          onChangeText={(val) => handleChangeText("cvc", val)}
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
              name="credit-card"
              size={20}
              color="white"
            /> &nbsp;
            Proceed
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
