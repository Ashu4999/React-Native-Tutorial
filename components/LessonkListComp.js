import { useState } from 'react';
import { View, FlatList, Text, Button, StyleSheet } from 'react-native';

export default function LessonkListComp({ navigation }) {
    const [lessonData, setLessonData] = useState([
        { id: 1, name: "First Lesson", desc: "Intro of react native simple componets and styles", compLinkName: "textStyleLesson" },
        { id: 2, name: "States and inputs Lesson", desc: "react states and how to take input from user", compLinkName: "stateLesson" },
        { id: 3, name: "List, Scrollbar and FlatList", desc: "fetching data form user api and showing in list and performing simple operation", compLinkName: "listLesson" },
    ]);

    return (
        <View style={styles.lessonListContainer}>
            <FlatList
                keyExtractor={item => item.id}
                data={lessonData}
                renderItem={({ item }) => {
                    return (<View style={styles.lessonItemContainer}>
                        <View style={styles.lessonDetails}>
                            <Text>{item.name}</Text>
                            <Text>{item.desc}</Text>
                        </View>
                        <View style={styles.lessonBtnView}>
                            <Button title={"Go"} onPress={() => navigation.navigate(item.compLinkName)} />
                        </View>
                    </View>);
                }}
                ListEmptyComponent={<View style={{ alignItems: "center" }}><Text>No Lesson added</Text></View>}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    lessonListContainer: {
        flex: 1,
        margin: 30,
    },
    lessonItemContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginVertical: 10,
        backgroundColor: "yellow",
        padding: 10,
        borderWidth: 1,
        borderColor: '#000'
    },
    lessonDetails: {
        flex: 3
    },
    lessonBtnView: {
        flex: 1
    }
});