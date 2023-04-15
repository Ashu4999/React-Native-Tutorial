import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import TextStyleIntro from "../components/TextStyleIntro";
import { StateTutComp, ListScrollComp, LessonListComp } from './components'

const screens = {
    lessonListComp: { screen: LessonListComp, navigationOptions: { title: "Lesson List" } },
    textStyleLesson: { screen: TextStyleIntro, navigationOptions: { title: "First Lesson" } },
    stateLesson: { screen: StateTutComp, navigationOptions: { title: "States and inputs Lesson" } },
    listLesson: { screen: ListScrollComp, navigationOptions: { title: "List, Scrollbar and FlatList" } },
};

const LessonStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: "yellow" },
        headerTintColor: '#000',
        headerTitleStyle: { fontFamily: "nunito-bold" },
    }
});

export default createAppContainer(LessonStack);