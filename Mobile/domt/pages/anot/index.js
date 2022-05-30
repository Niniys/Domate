import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, ToastAndroid, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// function Login({ navigation }) {
//     const [email, setEmail] = useState("");
//     const [senha, setSenha] = useState("");

//     useEffect(async () => {
//         if(await AsyncStorage.getItem("userdata") !== null){
//             navigation.navigate("Main")
//         }

//     }, [])

//     const autenticar = () => {
//         let usuario = {
//             email: email,
//             senha: senha,
//         }

//         fetch('http://10.87.207.4:3000/login', {
//             "method": "POST",
//             "headers": {
//                 "Content-Type": "application/json"
//             },
//             "body": JSON.stringify(usuario),
//         })
//         .then(resp => { return resp.json() })
//         .then(async data => {
//             if(data.length > 0) {
//                 await AsyncStorage.setItem('userdata', JSON.stringify(data[0]));
//                 navigation.navigate('Anotacao');
//             }else {
//                 ToastAndroid.show('Email ou Senha Invalidos', ToastAndroid.SHORT);
//             }
//         })
//     }
// }

export default function AAA() {
    return (
        <View>
            <Text>BBBBBBBBBbb</Text>
        </View>
    )
}