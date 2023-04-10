import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import TextStyleIntro from "../components/TextStyleIntro";
import StateTutComp from "../components/StateTutComp";
import ListScrollComp from "../components/ListScrollComp";
import LessonkListComp from "../components/LessonkListComp";

const screens = {
    lessonListComp: { screen: LessonkListComp, navigationOptions: { title: "Lesson List" } },
    textStyleLesson: { screen: TextStyleIntro, navigationOptions: { title: "First Lesson" } },
    stateLesson: { screen: StateTutComp, navigationOptions: { title: "States and inputs Lesson" } },
    listLesson: { screen: ListScrollComp, navigationOptions: { title: "List, Scrollbar and FlatList" } },
};

const LessonStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: "yellow" },
        headerTintColor: '#000',
        headerTitleStyle: { fontWeight: 'bold' },
    }
});

export default createAppContainer(LessonStack);