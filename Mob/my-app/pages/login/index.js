import React, { useState, useEffect } from "react";
import { ImageBackground, View, Text, TextInput, ToastAndroid, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from './style.js';

// const image = {uri: ""}

export default function Login({ navigation }) {
    const [nome_usuario, setNome_usuario] = useState("");
    const [senha, setSenha] = useState("");

    const [cadastro, setCadastro] = useState(false);

    const autenticar = () => {
        let user = {
            nome_usuario: nome_usuario,
            senha: senha
        }
        

        fetch('http://10.87.207.4:3000/login', {
            "method":"POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(user),
        })
        .then(resp => { return resp.json()})
        .then( async data => {
            // console.log(data)
            if(data != undefined){
                await AsyncStorage.setItem('userdata', JSON.stringify(data[0]));
                navigation.navigate("Main");
            }else{
                ToastAndroid.show('Email ou Senha Inválidos', ToastAndroid.SHORT);
            }
        })
    }

    const habilitarCadastro = () => {
        setCadastro(true);
    }

    const cadastrar = () => {
        let user = {
            nome_usuario: nome_usuario,
            senha: senha,
        }

        fetch("http://localhost:3000/usuario", {
            "method":"POST",
            "headers": {
                "Content-Type":"application/json"
            },
            "body": JSON.stringify(user)
        })
        .then(resp => {
            if(!(resp.status == 404)){
                return resp.json();
            }})
        .then( data => {
            if(data == undefined) {
                ToastAndroid.show("Falha ao cadastrar", ToastAndroid.SHORT);
                setCadastro(false);
            } else {
                AsyncStorage.setItem('userdata', JSON.stringify(data));
                navigation.navigate("main");
            }
        });
    }

    return(
        <View style={style.container}>
            {/* <ImageBackground source={image} resizeMode="cover" style={style.image} imageStyle={{opacity: 0.3}}> */}
                <View>
                {/* <Image style={style.logo} source={require('../../assets/app/logo.png')} /> */}
                <TextInput 
                    value={nome_usuario} 
                    onChangeText={setNome_usuario} 
                    placeholderTextColor={'#ced4da'} 
                    placeholder={"Usuario"} 
                    style={style.textInput}
                />
                <TextInput 
                    value={senha} 
                    secureTextEntry={true} 
                    onChangeText={setSenha} 
                    placeholderTextColor={'#ced4da'} 
                    placeholder={"Senha"} 
                    style={style.textInput}
                />
        
                {
                    (cadastro) ?
                        <View>
                            <TextInput 
                                value={nome_usuario} 
                                onChangeText={setNome_usuario} 
                                placeholderTextColor={'#ced4da'} 
                                placeholder={"Usuario"} 
                                style={style.textInput}
                            />
                            <TextInput 
                                value={senha} 
                                onChangeText={setSenha}  
                                placeholderTextColor={'#ced4da'} 
                                placeholder={"Senha"} 
                                style={style.textInput} 
                            />
                            <TouchableOpacity onPress={() => cadastrar() } style={[style.button, style.boxWithShadow]}>
                                <Text style={style.buttontext}>Cadastrar</Text>
                            </TouchableOpacity>
                        </View>
                    :
                        <View style={style.view}>
                            <TouchableOpacity onPress={() => autenticar() } style={[style.button, style.boxWithShadow]}>
                                <Text style={style.buttontext}>Entrar</Text>
                            </TouchableOpacity>

                            <View style={style.alignmargin}>
                                    <Text style={style.text}>Não tem uma conta?</Text>
                                <TouchableOpacity onPress={() => { habilitarCadastro() }}>
                                    <Text style={style.text2}>CADASTRE-SE</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                }
                </View>
            {/* </ImageBackground> */}
        </View>
    )
}