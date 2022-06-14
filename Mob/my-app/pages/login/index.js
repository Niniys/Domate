import React, { useState, useEffect } from "react";
import { View, Text, Keyboard, TextInput, ToastAndroid, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Image, Animated } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import AsyncStorage from '@react-native-community/async-storage';
//import { func } from "prop-types";



export default function Login({ navigation }) {
    const [nome_usuario, setNome_usuario] = useState("");
    const [senha, setSenha] = useState("");

    const [cadastro, setCadastro] = useState(false);

    const [animando] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
    const [logo] = useState(new Animated.ValueXY({ x: 300, y: 160 }));
    const [transparencia] = useState(new Animated.Value(0));

    const [valor, setValor] = useState('');




    useEffect(() => {
        // show = Keyboard.addListener('keyboardDidShow', keyboardDidShow)
        // hide = Keyboard.addListener('keyboardDidHide', keyboardDidHide)

        Animated.parallel([
            Animated.spring(animando.y, {
                toValue: 0,
                speed: 4,
                bounciness: 15, 
                useNativeDriver: false
            }),
            Animated.timing(transparencia, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false
            }),

        ]).start();

    }, [])

    // function keyboardDidShow(){
    //     Animated.parallel([
            
    //         Animated.event(hert.x,{
    //             toValue: 180,
    //             duration: 110,
    //             useNativeDriver: true
    //         }),
            
    //         Animated.event(logo.y,{
    //             toValue: 100,
    //             duration: 100,
    //             useNativeDriver: true
    //         })
    //     ]).start();
    // }

    // function keyboardDidHide(){
    //     Animated.parallel([
    //         Animated.spring(logo.x,{
    //             toValue: 300,
    //             duration: 100,
    //             // useNativeDriver: true
    //         }),
    //         Animated.spring(logo.y,{
    //             toValue: 160,
    //             duration: 100,
    //             // useNativeDriver: true
    //         })
    //     ]).start();
    // }

    async function autenticar(){
        let user = {
            nome_usuario: nome_usuario,
            senha: senha
        }


        fetch('http://10.87.207.4:3000/login', {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(user),
        })
            .then(resp => { return resp.json() })
            .then( data => {

                data.forEach((element) => {
                    console.log(element)
                    AsyncStorage.setItem('userdata', JSON.stringify(element))
                    console.log( AsyncStorage.setItem('userdata', JSON.stringify(data)));
                    navigation.navigate("Main");

                })
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

        fetch("http://10.87.207.4:3000/usuario", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(user)
        })
            .then(resp => {
                if (!(resp.status == 404)) {
                    return resp.json();
                }
            })
            .then(async data => {
                if (data.length > 0) {
                    await AsyncStorage.setItem('userdata', JSON.stringify(data));
                    navigation.navigate("Main");

                } else {
                    ToastAndroid.show("Falha ao cadastrar", ToastAndroid.SHORT);
                    setCadastro(false);
                }
            });
    }

    return (
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.logo}>
                <Animated.Image
                source={require('../assets/logo.png')}
                style={{
                    width: logo.x,
                    height: logo.y,
                }}
                />
            </View>

            <Animated.View 
                style = {[
                    styles.container,
                    {
                        opacity: transparencia,
                        transform: [
                            { translateY: animando.y}
                        ]
                    }
                ]}
            >
                    <TextInput
                        value={nome_usuario}
                        onChangeText={setNome_usuario}
                        placeholderTextColor={'#ced4da'}
                        placeholder={"Usuario"}
                        style={styles.textInput}
                    />
                    <TextInput
                        value={senha}
                        secureTextEntry={true}
                        onChangeText={setSenha}
                        placeholderTextColor={'#ced4da'}
                        placeholder={"Senha"}
                        style={styles.textInput}
                    />

                    {
                        (cadastro) ?
                        
                            <View style={styles.container}>
                                <TouchableOpacity onPress={() => cadastrar()} style={[styles.submit]}>
                                    <Text style={styles.submitText}>Cadastrar</Text>
                                </TouchableOpacity>

                                <Text style={styles.outroSubmitText}>Já tem uma conta?</Text>
                                <TouchableOpacity onPress={() => desabilitar()} style={[styles.outroSubmit]}>
                                    <Text style={styles.outroSubmitText}>Login</Text>
                                </TouchableOpacity>
                            </View>


                            :


                            <View style={styles.container}>
                                <TouchableOpacity onPress={() => autenticar()} style={[styles.submit]}>
                                    <Text style={styles.submitText}>Entrar</Text>
                                </TouchableOpacity>

                                <Text style={styles.outroSubmitText}>Não tem uma conta?</Text>
                                
                                <TouchableOpacity onPress={() => { habilitarCadastro() }} style={[styles.outroSubmit]}>
                                    <Text style={styles.outroSubmitText}>Cadastre-se</Text>
                                </TouchableOpacity>

                            </View>
                    }
            </Animated.View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#191919'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 5
    },
    logo: {
        flex: 1,
        justifyContent: 'center',
        width: '70%',
        height: '10%',
        
    },
    textInput: {
        backgroundColor: '#fff',
        width: '90%',
        marginBottom: 18,
        marginTop: -7,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10
    },
    submit: {
        backgroundColor: '#35AAFF',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginTop: 4
    },
    outroSubmit: {
        marginTop: 0
    },
    submitText: {
        color: '#FFFFFF',
        fontSize: 18
    },
    outroSubmitText: {
        color: '#FFFFFF',
        marginTop: 4
    },

})