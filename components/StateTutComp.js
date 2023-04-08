import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function StateTutComp() {
    const [userDetails, setUserDetails] = useState({ name: "ashu", age: 24 });

    function changeDetails(fieldName, value) {
        setUserDetails({ ...userDetails, [fieldName]: value });
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Text>{`Name: ${userDetails.name}\tAge: ${userDetails.age}`}</Text>
                <Text >Enter name </Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder='e.g John Doe'
                    onChangeText={(value) => changeDetails("name", value)}
                />
                <Text >Enter age </Text>
                <TextInput
                    style={styles.inputStyle}
                    keyboardType='numeric'
                    placeholder='e.g 35'
                    onChangeText={(value) => changeDetails("age", value)}
                />
            </View>
        </TouchableWithoutFeedback>
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
    inputStyle: {
        borderWidth: 1,
        borderColor: "#777",
        padding: 10,
        width: "75%",
        textAlign: "center"
    },
    item: {
        backgroundColor: "pink",
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
        // flexWrap: "wrap",
    },
});