import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ListScrollComp() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    async function getUsersData() {
        try {
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then((res) => res.json())
                .then(data => setData(data))
                .catch(err => console.log(err))
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUsersData();
    }, []);

    const removeItemPromise = function (id) {
        return new Promise((resolve, reject) => {
            setLoading(true);
            let filteredData = data.filter(item => item.id != id);
            if (filteredData)
                resolve(filteredData);
            else
                reject("something went wrong");
        });
    };

    const removeItem = (item) => {
        if (item.completed) {
            Alert.alert('Alert', 'Do you want to remove the task',
                [{ text: 'Cancel', onPress: () => console.log("operation cancelled") },
                {
                    text: 'Confirm', onPress: () => {
                        removeItemPromise(item.id)
                            .then((res) => {
                                setTimeout(() => {
                                    setLoading(false);
                                    setData(res);
                                }, 500);
                            })
                            .catch(error => console.log(error));
                    }
                }]);
        } else {
            Alert.alert('Alert', 'Do you want to make this task complete', [
                { text: 'Cancel', onPress: () => console.log("operation cancelled") },
                {
                    text: 'Confirm', onPress: () => {
                        // let tempData = data;
                        // let objectToUpdate = data.find((tempItem) => tempItem.id == item.id);
                        // objectToUpdate.completed = true;
                        // setData(tempData);
                        setLoading(true);
                        setData(prevData => prevData.map((tempItem, index, self) => {
                            if (index == self.length - 1) {
                                setTimeout(() => { setLoading(false); }, 500);
                            }
                            return tempItem.id == item.id ? { ...tempItem, completed: true } : tempItem
                        }));
                    }
                }
            ])
        }
    }

    return (
        <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "center", fontWeight: "bold" }}>List Assignment</Text>

            {loading ?
                <View style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <ActivityIndicator size="large" color="pink" />
                </View>
                :
                <View style={{ flex: 1, gap: 10 }}>
                    <Text style={{ fontSize: 15, textAlign: "center" }}>{`Data Length ${data.length}`}</Text>
                    <FlatList
                        // numColumns={2} //used to specify no of columns on each row
                        keyExtractor={(item) => item.id} //by default take key name as key ow do this.
                        data={data}
                        renderItem={({ item }) => (
                            <View style={styles.item}>
                                <Text style={styles.title}>{item.title}</Text>
                                <View style={{ flex: 1, flexDirection: "row", gap: 5, alignItems: "center" }}>
                                    <TouchableOpacity onPress={() => removeItem(item)}>
                                        <MaterialIcons name={item.completed ? "delete" : "done"} size={24} color={item.completed ? "red" : "green"} />
                                    </TouchableOpacity>
                                    <Text style={[styles.status, { color: item.completed ? "green" : "red" }]}>{item.completed ? "Complete" : "Incomplete"}</Text>
                                </View>
                            </View>
                        )}
                    />
                </View>
            }


            {/*using FlatList for generating list because scroll bydefault and efficient.*/}

            {/*<ScrollView>
          {
            data.map((item, index) =>
              <View style={styles.item} key={index}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={[styles.status, { color: item.completed ? "green" : "red" }]}>{item.completed ? "Complete" : "Incomplete"}</Text>
              </View>)
          }
        </ScrollView>*/}
        </View>
    );
};

const styles = StyleSheet.create({
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
    }
});