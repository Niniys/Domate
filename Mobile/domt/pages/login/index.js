import React, { useState, useEffect } from "react";
import { View, Text, TextInput, ToastAndroid, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from './style.js';


export default function Login({ navigation }) {
    const [nome_usuario, setNome_usuario] = useState("");
    const [senha, setSenha] = useState("");

    const [cadastro, setCadastro] = useState(false);

    const autenticar = () => {
        let user = {
            nome_usuario: nome_usuario,
            senha: senha
        }
        

        fetch('http://192.168.0.109:3000/login', {
            "method":"POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(user),
        })
        .then(resp => { return resp.json()})
        .then( async data => {
            // console.log(data)
            if(data.length > 0){
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

    const desabilitar = () => {
        setCadastro(false);
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
        .then(async data => {
            if(data.length > 0) {
                await AsyncStorage.setItem('userdata', JSON.stringify(data));
                navigation.navigate("main");

            } else {
                ToastAndroid.show("Falha ao cadastrar", ToastAndroid.SHORT);
                setCadastro(false);
            }
        });
    }

    return(
        <View style={style.container}>
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
                            <TouchableOpacity onPress={() => cadastrar() } style={[style.button]}>
                                <Text style={style.buttontext}>Cadastrar</Text>
                            </TouchableOpacity>

                            <Text style={style.text}>Já tem uma conta?</Text>
                            <TouchableOpacity onPress={() => desabilitar() } style={[style.button]}>
                                <Text style={style.buttontext}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    :
                        <View style={style.view}>
                            <TouchableOpacity onPress={() => autenticar() } style={[style.button]}>
                                <Text style={style.buttontext}>Entrar</Text>
                            </TouchableOpacity>

                            <View style={style.alignmargin}>
                                    <Text style={style.text}>Não tem uma conta?</Text>
                                <TouchableOpacity onPress={() => { habilitarCadastro() }}>
                                    <Text style={style.text2}>Cadastre-se</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                }
                </View>
            {/* </ImageBackground> */}
        </View>
    )
}