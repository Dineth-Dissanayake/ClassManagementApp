import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';

export default function App() {
    let [name, setName] = useState("");
    let [semail, setSemail] = useState("");
    let [parename, setParename] = useState("");
    let [spnum, setSpnum] = useState("");
    let [totalfee, setTotalfee] = useState("");

    const html = `
    <html>
      <body>
        <h1>Student Name ${name}</h1>
        <h1>Student Email ${semail}</h1>
        <h1>Parent Name ${parename}</h1>
        <h1>Parent Phone Number ${spnum}</h1>
        <h1>Total Class Fee ${totalfee}</h1>
        
      
      </body>
    </html>
  `;

    let generatePdf = async () => {
        const file = await printToFileAsync({
            html: html,
            base64: false
        });

        await shareAsync(file.uri);
    };

    return (
        <View style={styles.container}>
            <Text style={{
                color: "#0D0140",
                fontWeight: "bold",
                fontSize: 20,
                marginTop: -60,
                textAlign: "center",
            }}>STUDENT PAYMENT REGISTRATION SUMMARY REPORT FOR CASH PAYMENT</Text>

            <TextInput value={name} placeholder="Student Name" style={styles.textInput} onChangeText={(value) => setName(value)} />
            <TextInput value={semail} placeholder="Student Email" style={styles.textInput} onChangeText={(value) => setSemail(value)} />
            <TextInput value={parename} placeholder="Student Parent Name" style={styles.textInput} onChangeText={(value) => setParename(value)} />
            <TextInput value={spnum} placeholder="Student Parent Number" style={styles.textInput} onChangeText={(value) => setSpnum(value)} />
            <TextInput value={totalfee} placeholder="Total Class Fee" style={styles.textInput} onChangeText={(value) => setTotalfee(value)} />
            <Button title="Generate PDF" onPress={generatePdf} />
            <StatusBar style="auto" />
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
    textInput: {
        alignSelf: "stretch",
        padding: 0,
        margin: 8
    },
    text: {
        color: "#0D0140",
        marginVertical: 5,
        fontWeight: "bold",
        fontSize: 15,
    },
});