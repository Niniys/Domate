import React, { useState, useEffect, Image } from 'react';
import { View, TextInput, Text, ToastAndroid, TouchableOpacity, StyleSheet, FlatList, ScrollView, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from "react-native-vector-icons/Entypo";




export default function Anotacao({ navigation }) {

    const [anotacao, setAnot] = useState("")
    const [lista, setLista] = useState([])

    useEffect(() => {
        listar();
    }, [])

    // const deletar = () => {
    //     const host = AsyncStorage.getItem("usernota");
    //     console.log(host)
    //     fetch('http://192.168.1.164:3000/nota/' + host.id, {
    //         "method": "DELETE"
    //     })
    //     .then(resp => { return resp.json() })
    //     .then(data => {
    //         alert(data)

    //     })
    // }

    const anotar = () => {
        let dados = {
            anot: anotacao
        }

        fetch('http://192.168.1.164:3000/nota', {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(dados),
        })
            .then(resp => { return resp.json() })
            .then(data => {
                // console.log(data)
                if (data != null || data != undefined) {
                    ToastAndroid.show('Anotação adicionada com sucesso', ToastAndroid.SHORT);
                } else {
                    ToastAndroid.show('Preencha os campos', ToastAndroid.SHORT);
                }
            })
    }

    const listar = () => {
        fetch('http://192.168.1.164:3000/nota', {
            method: 'GET'
        })
            .then(res => { return res.json(); })
            .then(data => {
                setLista(data);
                AsyncStorage.setItem("usernota", JSON.stringify(data))
                console.log(data.id)
                if (data.length > 0) {
                    fetch('http://192.168.1.164:3000/nota/' + data.id, {
                        "method": "DELETE"
                    })
                    .then(resp => { return resp.json() })
                    .then(data => {
                        alert("Anotação concluida")
                        return data

                    })
                        
                }
                    


            })
            .catch((error) => {
                console.error(error);
            });

    }

    // let icon = (
    //     <Icon
    //         name="open-book"
    //         color={selected == index ? "#000" : "#000"}
    //         size={35}
    //     />
    // );


    // let selected = state.index;
    return (
        // key={index}
        <View style={styles.container} >
            <Text style={styles.textStyle}>Anotações</Text>
            <View>
                <TextInput
                    style={styles.textInput}
                    value={anotacao}
                    onChangeText={setAnot}
                    placeholder={"Escreva suas anotações"}
                />
                <TouchableOpacity onPress={() => anotar()} style={[styles.button]}>
                    <Text style={styles.submit}>Adicionar anotação</Text>
                </TouchableOpacity>
                <ScrollView style={styles.scroll}>
                    {
                        lista.map((item, index) => {
                            return (

                                <View key={index}>
                                    <Text style={styles.text}>{item.anot}
                                        {/* <Button>A</Button> */}
                                        <TouchableOpacity style={styles.botoes}>
                                            <Text onPress={() => delet()}>Concluir</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Text>!!!</Text>
                                        </TouchableOpacity>
                                    </Text>
                                    {/* {icon} */}
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>

        </View>
    )
    //{state.routes.map((route, index) => {})}
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#191919',

    },
    textStyle: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginTop: 70,
        marginBottom: 15,
        fontSize: 30
    },
    text: {
        color: '#FFFFFF',
        backgroundColor: '#511845',
        marginTop: 11,
        padding: 5,
        fontSize: 24,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },

    textInput: {
        backgroundColor: '#fff',
        width: 250,
        marginBottom: 18,
        color: '#222',
        fontSize: 15,
        borderRadius: 7,
        padding: 10
    },

    scroll: {
        flex: 1,
        marginTop: 30
    },



    submit: {
        color: '#FFFFFF',
        fontSize: 18,
        padding: 5,
        alignSelf: 'center',

    },

    button: {
        backgroundColor: '#956897',
        borderColor: '#956897',
        borderRadius: 10,
        borderWidth: 1,
    }


})
