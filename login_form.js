import React from "react";
import {Formik} from "formik";
import {setSecureUser, setUser} from "./util/auth";
import {Button, StyleSheet, TextInput, View} from "react-native";
import {StatusBar} from "expo-status-bar";

export const LoginForm = (currentUser, setCurrentUser) => {
    return (
        <Formik
            initialValues={{username: '', password: ''}}
            onSubmit={
                values => {
                    setSecureUser(values, setCurrentUser)
                }
            }
        >
            {({handleChange, handleBlur, handleSubmit, values}) => (
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur('username')}
                        value={values.username}
                        keyboardType={'email-address'}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry={true}
                    />
                    <Button onPress={handleSubmit} title="Submit"/>
                    <StatusBar style="auto"/>
                </View>
            )}
        </Formik>)
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 300,
        paddingHorizontal: 5,
        backgroundColor: 'white',
        marginBottom: 5,
        borderWidth: 1,
        borderColor: '#333',
    },
    inputContainer: {
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    error: {textAlign: 'center', height: 17.5},
});
