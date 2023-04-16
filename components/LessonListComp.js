import { useState } from 'react';
import { View, FlatList, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function LessonListComp({ navigation }) {
    const [lessonData, setLessonData] = useState([
        { id: 1, name: "First Lesson", desc: "Intro of react native simple componets and styles", compLinkName: "textStyleLesson" },
        { id: 2, name: "States and inputs Lesson", desc: "react states and how to take input from user", compLinkName: "stateLesson" },
        { id: 3, name: "List, Scrollbar and FlatList", desc: "fetching data form user api and showing in list and performing simple operation", compLinkName: "listLesson" },
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
                        </View>
                        <View style={globalStyles.lessonBtnView}>
                            <Button title={"Go"} onPress={() => navigation.navigate(item.name)} />
                        </View>
                    </View>);
                }}
                ListEmptyComponent={<View style={{ alignItems: "center" }}><Text>No Lesson added</Text></View>}
            />
        </View>
    );
}
