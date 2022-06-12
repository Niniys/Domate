import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, ToastAndroid, TouchableOpacity, StyleSheet, FlatList, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function Anotacao() {

    const [anotacao, setAnot] = useState("")
    const [lista, setLista] = useState([])

    useEffect(() => {
        listar();
    }, [])

    const anotar = () => {
        let dados = {
            anot: anotacao
        }

        fetch('http://192.168.0.109:3000/nota', {
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

    const listar = () => {
        fetch('http://192.168.0.109:3000/nota', {
            method: 'GET'
        })
        .then(res => { return res.json(); })
        .then(data => {
            setLista(data);

        })
        .catch((error) => {
            console.error(error);
        });

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
                <TouchableOpacity onPress={() => anotar()} style={[styles.button]}>
                    <Text style={styles.buttontext}>Adicionar anotação</Text>
                </TouchableOpacity>
                <View>
                    {
                        lista.map((item, index) => {
                            return(

                                <View key={index}>
                                    <Text style={styles.text}>{item.anot}</Text>
                                </View>
                            )
                        })
                    }
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
        marginBottom: 25,
        fontSize: 30
    },
    text: {
        color: '#FFFFFF',
        marginBottom: 25,
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

    Scrow: {
        height: '100px',
        width: '200px'
    }
})

// class Anot extends Component {
//     state = {
//         data: ''
//     }
//     listar = () => {
//         fetch('http://192.168.0.109:3000/nota', {
//             method: 'GET'
//         })
//         .then((response) => response.json())
//         .then((responseJson) => {
//             console.log(responseJson);
//             this.setState({
//                 data: responseJson
//             })
            
//         })
//         .catch((error) => {
//             console.error(error);
//         });
//         Anotacao();
//     }
//     render() {
//         return (
//             <View>
//                 <Text>
//                     {this.state.data.Object}
//                 </Text>
//             </View>
//         )
//     }
// }
// const App = () => {
//     return (
//         <Anot />
//     )
// }
// export default App