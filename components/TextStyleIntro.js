import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';

export default function TextStyleIntro() {
    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.helloContainer}>
                <Text style={globalStyles.boldText}>Hello, world!</Text>
            </View>
            <View style={globalStyles.loremContainer}>
                <Text style={globalStyles.boldText}>Lorem ipsum dolor sit amet</Text>
                <Text>Lorem ipsum dolor sit amet</Text>
                <Text>Lorem ipsum dolor sit amet</Text>
                <Text>Lorem ipsum dolor sit amet</Text>
            </View>
        </View>
    );
};

