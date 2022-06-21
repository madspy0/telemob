//import {DevSettings} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import {deleteItemAsync} from "expo-secure-store";

export async function setSecureUser(values, setCurrentUser) {
    getJwt(values)
        .then(jwt => {
            SecureStore.setItemAsync('telemob_user', jwt);
            alert('Secure data successfully saved')
            setCurrentUser(JSON.parse(jwt))
        })
        .catch(e => {
            alert('Failed to save the data to the secure storage')
            console.log(e)
        })
}

export async function getSecureUser() {
    let result = await SecureStore.getItemAsync('telemob_user');
    if (result) {
        return (JSON.parse(result))
    }
/*    else {
        alert('No values stored under that key.');
    }*/
}

export async function logoutSecureUser() {
    try {
        await deleteItemAsync('telemob_user');
    } catch (e) {
        alert('Failed to remove secure storage');
    }

}

export const logout = async () => {
    try {
        await AsyncStorage.removeItem('@telemob_user');
        //DevSettings.reload()
    } catch (e) {
        alert('Failed to remove storage');
    }
}

export const getUser = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@telemob_user')
        return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch (e) {
        alert('Failed to fetch the input from storage');
    }
    console.log('Done.')
};

export const setUser = async (values, setCurrentUser) => {
    getJwt(values)
        .then(jwt => {
            AsyncStorage.setItem('@telemob_user', jwt)
            alert('Data successfully saved')
            //DevSettings.reload()
            setCurrentUser(JSON.parse(jwt))
        })
        .catch(e => {
            alert('Failed to save the data to the storage')
            console.log(e)
        })
}

export const getJwt = async (values) => {
    const url = 'http://192.168.33.102/api/login';
    try {
        const response = await fetch(url,
            {
                method: 'POST', // или 'PUT'
                body: JSON.stringify(values), //JSON.stringify({'username': values.email, 'password': values.password}), // данные могут быть 'ской' или {объектом}!
                headers: new Headers({
                    'Content-Type': 'application/json',
                    // 'Host': '192.168.1.138'
                })
            }
        );

        if (!response.ok) {
            await Promise.reject(response);
        }
        const json = await response.json();
        console.log('Успех:', JSON.stringify(json));
        return (JSON.stringify(json))
    } catch (error) {
        console.error('Ошибка:', error);
    }
}


