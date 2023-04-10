import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';

export default function StateTutComp() {
    const [userDetails, setUserDetails] = useState({ name: "ashu", age: 24 });

    function changeDetails(fieldName, value) {
        setUserDetails({ ...userDetails, [fieldName]: value });
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={globalStyles.container1}>
                <Text>{`Name: ${userDetails.name}\tAge: ${userDetails.age}`}</Text>
                <Text >Enter name </Text>
                <TextInput
                    style={globalStyles.inputStyle}
                    placeholder='e.g John Doe'
                    onChangeText={(value) => changeDetails("name", value)}
                />
                <Text >Enter age </Text>
                <TextInput
                    style={globalStyles.inputStyle}
                    keyboardType='numeric'
                    placeholder='e.g 35'
                    onChangeText={(value) => changeDetails("age", value)}
                />
            </View>
        </TouchableWithoutFeedback>
    );
};
