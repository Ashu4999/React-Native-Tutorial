import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    helloContainer: {
        backgroundColor: "pink",
        padding: 20
    },
    loremContainer: {
        backgroundColor: "yellow",
        padding: 20
    },
    boldText: {
        fontWeight: 'bold'
    },
    container1: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: "#777",
        padding: 10,
        width: "75%",
        textAlign: "center"
    },
    item: {
        backgroundColor: "pink",
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
        // flexWrap: "wrap",
    },
    container2: {
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 30,
        gap: 10,
    },
    item: {
        backgroundColor: "pink",
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
        gap: 5
    },
    title: {
        flex: 2,
        fontSize: 17,
        paddingHorizontal: 5
    },
    status: {
        fontSize: 17,
        textAlign: "center"
    },

    //LessonListComp Css
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
        borderColor: '#000',
    },
    card: {
        borderRadius: 5,
        elevation: 5,
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    lessonDetails: {
        flex: 3
    },
    lessonBtnView: {
        flex: 1
    },
    textTitle: {
        fontFamily: "nunito-bold",
    },
    textSubtitle: {
        fontFamily: "nunito-regular",
    },
    diffcultyIcon: {
        width: 30,
        height: 30,
        borderRadius: 5,
    },

    //About
    aboutText: {
        fontFamily: "nunito-bold",
        fontSize: 17,
        textAlign: "center",
    },

    //ModalForm
    form: {
        flex: 1,
        justifyContent: "center",
        marginHorizontal: 20,
    },
    close: { width: "100%", textAlign: "right", marginBottom: 10 },
    formInputStyle: {
        borderWidth: 1,
        borderColor: "#777",
        padding: 10,
        width: "100%",
    },
    //extraa
    rowVerticalCenter: { flexDirection: "row", alignItems: "center", gap: 5 }
});

export const images = {
    difficultyIcons: {
        "easiest": require("../assets/difficulty/easiest.png"),
        "easy": require("../assets/difficulty/easy.png"),
        "normal": require("../assets/difficulty/normal.png"),
        "hard": require("../assets/difficulty/hard.png"),
    }
}