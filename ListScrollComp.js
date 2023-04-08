import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';

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


    const removeItem = (id) => {
        setLoading(true);
        const removeItemPromise = new Promise((resolve, reject) => {
            let filteredData = data.filter(item => item.id != id);
            if (filteredData)
                resolve(filteredData);
            else
                reject("filter operation still in progress");
        })

        removeItemPromise
            .then((res) => {
                setTimeout(() => {
                    setLoading(false);
                    setData(res);
                }, 2000);
            })
            .catch(error => console.log(error));
    }

    return (
        <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "center", fontWeight: "bold", marginBottom: 10 }}>List Assignment</Text>

            {loading ?
                <View style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <ActivityIndicator size="large" color="pink" />
                </View>
                :
                <View>
                    <Text style={{ fontSize: 15, textAlign: "center" }}>{`Data Length ${data.length}`}</Text>
                    <FlatList
                        // numColumns={2} //used to specify no of columns on each row
                        keyExtractor={(item) => item.id} //by default take key name as key ow do this.
                        data={data}
                        renderItem={({ item }) => (
                            <View style={styles.item}>
                                <Text style={styles.title}>{item.title}</Text>
                                <TouchableOpacity style={{ width: "30%" }} onPress={() => removeItem(item.id)}>
                                    <Text style={[styles.status, { color: item.completed ? "green" : "red" }]}>{item.completed ? "Complete" : "Incomplete"}</Text>
                                </TouchableOpacity>
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
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    container2: {
        marginHorizontal: 10,
        marginVertical: 30
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
    title: {
        width: "65%",
        fontSize: 17,
        paddingHorizontal: 5
    },
    status: {
        fontSize: 17,
        paddingHorizontal: 5,
        textAlign: "center"
    }
});