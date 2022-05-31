import React, {Component} from 'react';
import { ScrollView, FlatList, Text } from 'react-native';
import styles from './style.js';

let padToTwo = (number) => (number <= 9 ? `0${number}`: number);
class List extends Component {
    

    render() {
        return (
            <ScrollView style={styles.scroll}>
                <FlatList
                    data={this.props.lap}
                    renderItem={({item, index}) => <Text key={index+1} style={styles.item}>{`#${index}            `}{padToTwo(item.min)}:{padToTwo(item.sec)}:{padToTwo(item.msec)}</Text>}
                />
            </ScrollView>
        );
    }
}

export default List;


