import { View, Platform, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// shamali- student payment 
import Addpayment from "./screens/StudentPayment/Addpayment";
import PaymentRegi from "./screens/StudentPayment/PaymentRegi";
import PaymentSuccess from "./screens/StudentPayment/PaymentSuccess";

// Piyadali D.S.P. - Class Details
import addClass from "./screens/classDetails/addClass";

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

          {/* student payment- shamali */}
          <Stack.Screen name="std regi pay" component={PaymentRegi} />
          <Stack.Screen name="Add payment" component={Addpayment} />
          <Stack.Screen name="std pay success" component={PaymentSuccess} />

          {/* Class Details - Piyadali D.S.P. */}
          <Stack.Screen name="Add Class Information" component={addClass} />




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
