import React from 'react'
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function About() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.aboutText}>This is my first React Native project, and it contains a basic lesson assignment, which is perfect for those who want to learn React Native. React Native is a powerful technology that enables developers to build high-quality, native mobile applications using only JavaScript and React. With its growing popularity, it's an excellent skill to add to your development toolkit. In this project, you'll learn the fundamental concepts of React Native, such as creating components, styling them, and handling user interaction. By the end of the assignment, you'll have a solid foundation to build upon for more complex projects.</Text>
        </View>
    )
}
