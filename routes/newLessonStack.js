import { createStackNavigator } from '@react-navigation/stack';
import { TextStyleIntro, StateTutComp, ListScrollComp, LessonListComp } from '../components';

const Stack = createStackNavigator();

let optionsObj = { headerShown: true };
function NewLessonStack() {
    return (
        <Stack.Navigator initialRouteName="Lesson List">
            <Stack.Screen name="Lesson List" component={LessonListComp} options={optionsObj} />
            <Stack.Screen name="First Lesson" component={TextStyleIntro} options={optionsObj} />
            <Stack.Screen name="States and inputs Lesson" component={StateTutComp} options={optionsObj} />
            <Stack.Screen name="List, Scrollbar and FlatList" component={ListScrollComp} options={optionsObj} />
        </Stack.Navigator>
    );
}

export default NewLessonStack;