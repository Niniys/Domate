import React, { useState, useEffect, useFocusEffect } from 'react';
import { View, TextInput, Text, ToastAndroid, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Anotacao() {

    const [anotacao, setAnot] = useState("")
    const [lista, setLista] = useState([])

    // useEffect(() => {
    //     listar();
    // }, [])

    useEffect(
        React.useCallback(() => {
            fetch('http://10.87.207.4:3000/nota', {
                method: 'GET'
            })
            .then(res => { return res.json(); })
            .then(data => {
                setLista(data);
                data.forEach(element => {
                    const host = AsyncStorage.setItem("@notas", JSON.stringify(element));
                    console.log(host)
                });
    
            })
            .catch((error) => {
                console.error(error);
            });
        }, [])
    );


    const anota = () => {
        let dados = {
            anot: anotacao
        }

        fetch('http://10.87.207.4:3000/nota', {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(dados),
        })
            .then(resp => { return resp.json() })
            .then(async data => {
                // console.log(data)
                if (data != null || data != undefined) {
                    ToastAndroid.show('Anotação adicionada com sucesso', ToastAndroid.SHORT);
                } else {
                    ToastAndroid.show('Preencha os campos', ToastAndroid.SHORT);
                }
            })
    }




    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Anotações</Text>
            <View>
                <TextInput
                    style={styles.textInput}
                    value={anotacao}
                    onChangeText={setAnot}
                    placeholder={"Escreva suas anotações"}
                />
                <TouchableOpacity onPress={() => anota()} style={[styles.button]}>
                    <Text style={styles.buttontext}>Adicionar anotação</Text>
                </TouchableOpacity>
                <View>
                    <ScrollView style={styles.Scrow}>
                        { lista.map((item, index) =>  (

                                    <View key={index} style={{alignItems: 'center', alignSelf: 'center', justifyContent: 'center'}}>

                                        <Text style={styles.text}>{item.anot}</Text>

                                        <View style={{ flexDirection: 'row' }}>
                                            <TouchableOpacity style={styles.bot}>
                                                <Text style={styles.texto}>Concluir</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity style={styles.bot}>
                                            <Text style={styles.texto}>Urgente</Text>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                        ))}
                    </ScrollView>
                </View>
            </View>

        </View>
    )
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
        marginTop: 200,
        marginBottom: 7,
        fontSize: 30,
        fontWeight : 'bold',
    },

    button: {
        alignSelf: 'center',
        marginBottom: 10,
        backgroundColor: "#000000",
        borderRadius: 100,
        width: 230,
        height: 29
    },
    buttontext: {
        color: '#FFFFFF',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 3
    },
    texto: {
        fontWeight: 'bold',
    },
    bot : {
        marginRight: 10,
        marginBottom: 65,
        padding: 2,
        width: 70,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor : "#A52A2A",
        borderWidth: 2,
        borderRadius: 20
    },
    text: {
        color: '#FFFFFF',
        backgroundColor: '#8B0000',
        borderWidth: 2,
        borderRadius: 15,
        marginBottom: 7,
        padding: 5,
        width: 220,
        fontSize: 20,
        textAlign: 'center'

    },

    textInput: {
        backgroundColor: '#fff',
        width: 280,
        marginBottom: 18,
        color: '#222',
        fontSize: 20,
        borderRadius: 7,
        padding: 10
    },

    Scrow: {
        marginBottom: 80,
        height: 5000,
        paddingHorizontal: 20
        
    }
})
