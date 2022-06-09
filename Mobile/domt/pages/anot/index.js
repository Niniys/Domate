import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, ToastAndroid, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style'



export default function Anotacao() {

    const [anotacao, setAnot] = useState("")

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
        .then((res) => res.json())
        .then((data) => {
            console.log(data);

        })
        .catch((error) => {
            console.error(error);
        });

    }



    return (
        <View>
            <Text>Anotações</Text>
            <View>
                <TextInput
                    style={styles.anotacao}
                    value={anotacao}
                    onChangeText={setAnot}
                    placeholder={"Escreva suas anotações"}
                />
                <TouchableOpacity onPress={() => anotar()} style={[styles.button]}>
                    <Text style={styles.buttontext}>Adicionar anotação</Text>
                </TouchableOpacity>

                <Text onLoad={() => listar()} style={[styles.nn]}/>
            </View>

        </View>
    )
}

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