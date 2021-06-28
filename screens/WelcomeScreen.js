import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';

export default class welcomeScreen extends React.Component{
    render() {
        return (
            <KeyboardAvoidingView>
                <View style={{backgroundColor:'lightblue'}}>
                <Text style = {styles.header}>Promptitude</Text>
                </View>
                <TextInput style={styles.input}
                    placeholder="Email-ID" />
                
                <TextInput style={styles.input}
                    placeholder="Password" />
                
                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.text}>Log-In</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.text}>Log-In</Text>
                    </TouchableOpacity>

                </KeyboardAvoidingView>
        
        )
    }
}
const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 5,
        borderRadius: 20,
        borderColor: 'darkblue',
        padding: 10,
        width: 350,
    },
    button: {
        alignSelf: 'center',
        backgroundColor: 'lightblue',
        borderColor: 'darkblue',
        width: 100,
        height: 50
    },
    text: {
        textAlign: 'center',
        color: 'maroon',
        fontSize: 20,
        fontStyle: 'italic'
    },
    header: {
        fontSize: 30,
        color: 'red',
        textAlign: 'center',
        marginTop: '-50'
    }
})