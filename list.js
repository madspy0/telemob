import React from 'react';
import {getUsers} from "./util/users";
import {Button, StyleSheet, Text, View, FlatList} from "react-native";
import {logout} from "./util/auth";
import {StatusBar} from "expo-status-bar";

export const List = (currentUser, setCurrentUser) => {

    getUsers()
    return (
        <View style={styles.container}>
            <Text>{currentUser.username}</Text>
            <Button onPress={() =>
                logout().then(() => setCurrentUser(null))
            } title="logout"/>
            <FlatList
                data={[
                    {key: 'Devin'},
                    {key: 'Dan'},
                    {key: 'Dominic'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'Joel'},
                    {key: 'John'},
                    {key: 'Jillian'},
                    {key: 'Jimmy'},
                    {key: 'Julie'},
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
            <StatusBar style="auto"/>
        </View>)
}
const styles =
    StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: 22
        },
        item: {
            padding: 10,
            fontSize: 18,
            height: 44,
        },
    });
