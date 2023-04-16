import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StateTutComp, ListScrollComp, LessonListComp, TextStyleIntro } from "../components";

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Lesson List">
                <Drawer.Screen name="Lesson List" component={LessonListComp} />
                <Drawer.Screen name="First Lesson" component={TextStyleIntro} />
                <Drawer.Screen name="States and inputs Lesson" component={StateTutComp} />
                <Drawer.Screen name="List, Scrollbar and FlatList" component={ListScrollComp} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}