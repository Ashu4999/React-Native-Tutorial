import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { About } from "../components";
import NewLessonStack from './newLessonStack';
import { ImageBackground } from 'react-native';

const Drawer = createDrawerNavigator();

let screenOptionsObj = {
    headerStyle: {
        backgroundColor: "transparent"
    },
    headerBackground: () => (<ImageBackground source={require('../assets/header-background.png')} style={{ width: "100%", height: "100%" }} />)
};

export default function NewLessonDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Assignment" screenOptions={screenOptionsObj}>
                <Drawer.Screen name="Assignments" component={NewLessonStack} />
                <Drawer.Screen name="About" component={About} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}