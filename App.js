import { View, Platform, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// shamali- student payment 
import Addpayment from "./screens/StudentPayment/Addpayment";
import PaymentRegi from "./screens/StudentPayment/PaymentRegi";
import PaymentSuccess from "./screens/StudentPayment/PaymentSuccess";
import ViewStdPayDetails from "./screens/AdminStudentPayment/ViewStdPayDetails";
import UpdateStdPayDetails from "./screens/AdminStudentPayment/UpdateStdPayDetails";
import PaymentSplash from "./screens/StudentPayment/PaymentSplash";


// IT20153236 - Piyadali D.S.P. - Class Details
import addClass from "./screens/classDetails/addClass";
import addClassNext from "./screens/classDetails/addClassNext";
import classAddSuccess from "./screens/classDetails/classAddSuccess";
import updateClassInfo from "./screens/classDetails/updateClassInfo";
import sucessClassUpdate from "./screens/classDetails/sucessClassUpdate";
import viewAdminClass from "./screens/classDetails/viewAdminClass";
import viewClassClient from "./screens/clientClass/viewClassClient";
import classSplash from "./screens/clientClass/classSplash";

import { StyleSheet, Text } from 'react-native';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View
      style={{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator>

          {/* student payment- it20148218 Dilrukshi M.G.S */}
          <Stack.Screen name="splash" component={PaymentSplash} />
          <Stack.Screen name="admin stdpay" component={ViewStdPayDetails} />
          <Stack.Screen name="std regi pay" component={PaymentRegi} />
          <Stack.Screen name="Add payment" component={Addpayment} />
          <Stack.Screen name="std pay success" component={PaymentSuccess} />
          <Stack.Screen name="admin update" component={UpdateStdPayDetails} />          


          {/* Class Details - IT20153236 - Piyadali D.S.P. */}
          <Stack.Screen name="splash class" component={classSplash} />
          <Stack.Screen name="Add Class Information" component={addClass} />
          <Stack.Screen name="Add Class Next" component={addClassNext} />
          <Stack.Screen name="Class Info Add Success" component={classAddSuccess} />
          <Stack.Screen name="Update Class Info" component={updateClassInfo} />
          <Stack.Screen name="Update success" component={sucessClassUpdate} />
          <Stack.Screen name="View Class Info" component={viewAdminClass} />
          <Stack.Screen name="View Client Class Info" component={viewClassClient} />

          main

        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
