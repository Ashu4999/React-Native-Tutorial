import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { About } from "../components";
import NewLessonStack from './newLessonStack';

const Drawer = createDrawerNavigator();

export default function NewLessonDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Assignment">
                <Drawer.Screen name="Assignment" component={NewLessonStack} />
                <Drawer.Screen name="About" component={About} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}