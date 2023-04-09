import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function TextStyleIntro() {
    return (
        <View style={styles.container}>
            <View style={styles.helloContainer}>
                <Text style={styles.boldText}>Hello, world!</Text>
            </View>
            <View style={styles.loremContainer}>
                <Text style={styles.boldText}>Lorem ipsum dolor sit amet</Text>
                <Text>Lorem ipsum dolor sit amet</Text>
                <Text>Lorem ipsum dolor sit amet</Text>
                <Text>Lorem ipsum dolor sit amet</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    helloContainer: {
        backgroundColor: "pink",
        padding: 20
    },
    loremContainer: {
        backgroundColor: "yellow",
        padding: 20
    },
    boldText: {
        fontWeight: 'bold'
    },
});
