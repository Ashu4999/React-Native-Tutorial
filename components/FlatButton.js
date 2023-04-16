import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function FlatButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={globalStyles.button}>
                <Text style={globalStyles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};