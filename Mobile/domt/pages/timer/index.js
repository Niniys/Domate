import Timer from "../contTimer/index.js";
import styles from './style.js';

import { Text, View } from 'react-native';

export default function App() {
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Domate</Text>

            <Timer />

        </View>
    );
}

