import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Component_() {

    return (
        <View style={styles.comp}>
            <Text style={styles.subt}>aula de componente em react native</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    comp: {
        backgroundColor: '#0B5E70',
        padding: 12,
        borderRadius: 3,
        marginBottom: 30
    },
    subt: {
        color: '#ddd',
        fontSize: 18,
        fontWeight: 'bold',
    }
});
