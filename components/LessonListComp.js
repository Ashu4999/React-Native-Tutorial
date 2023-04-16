import { useState } from 'react';
import { View, FlatList, Text, Button, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';

export default function LessonListComp({ navigation }) {
    const [lessonData, setLessonData] = useState([
        { id: 1, name: "First Lesson", difficulty: "easiest", desc: "Intro of react native simple componets and styles", compLinkName: "First Lesson" },
        { id: 2, name: "States and inputs Lesson", difficulty: "easiest", desc: "react states and how to take input from user", compLinkName: "States and inputs Lesson" },
        { id: 3, name: "List, Scrollbar and FlatList", difficulty: "easy", desc: "fetching data form user api and showing in list and performing simple operation", compLinkName: "List, Scrollbar and FlatList" },
        { id: 4, name: "Drawer and Stack navigation", difficulty: "normal", desc: "combination of drawer and stack navigation to navigatate throughout applicaion", compLinkName: () => { navigation.openDrawer() } },
    ]);

    return (
        <View style={globalStyles.lessonListContainer}>
            <FlatList
                keyExtractor={item => item.id}
                data={lessonData}
                renderItem={({ item }) => {
                    return (<View style={[globalStyles.lessonItemContainer, globalStyles.lessonItemContainer]}>
                        <View style={globalStyles.lessonDetails}>
                            <Text style={globalStyles.textTitle}>{item.name}</Text>
                            <Text style={globalStyles.textSubtitle}>{item.desc}</Text>
                            <View style={globalStyles.rowVerticalCenter}><Text style={globalStyles.textSubtitle}>{"Diffuculty :"}</Text><Image style={globalStyles.diffcultyIcon} source={images.difficultyIcons[item.difficulty]} /></View>
                        </View>
                        <View style={globalStyles.lessonBtnView}>
                            <Button title={"Go"} onPress={() => typeof item.compLinkName == "function" ? item.compLinkName() : navigation.navigate(item.compLinkName)} />
                        </View>
                    </View>);
                }}
                ListEmptyComponent={<View style={{ alignItems: "center" }}><Text>No Lesson added</Text></View>}
            />
        </View>
    );
}
