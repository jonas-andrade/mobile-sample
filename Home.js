
import { Button, StyleSheet, Text, View } from 'react-native';


export default function Component_() {
    function btnFN() { console.log("button ok!") }

    return (
        <View style={styles.comp}>

            <Text style={styles.til}>Trabalho para AV1</Text>


            <Button onPress={btnFN} title="em progresso....." color="#841584" />
            <Text style={styles.subt}>@Jonas Medeirosexit</Text>

        </View>

    );
}

const styles = StyleSheet.create({

    til: {
        color: '#2f2b3a',
        fontSize: 25,
        fontWeight: 'bold',
    },
    subt: {
        color: '#959ba9',
        fontSize: 18,
        fontWeight: '100',
        marginTop: 0
    }
});
