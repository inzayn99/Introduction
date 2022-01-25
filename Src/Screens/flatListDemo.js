import React from "react";
import { Text, View, StyleSheet, FlatList } from 'react-native';


const FlatListDemo = () => {
    const names = [
        {
            index: "1",
            name: "PHP",
        },
        {
            index: "2",
            name: "Laravel",
        },
        {
            index: "3",
            name: "ReactJS",
        },
        {
            index: "4",
            name: "HTML",
        },
        {
            index: "5",
            name: "JavaScript",
        },
        {
            index: "6",
            name: "CSS",
        },
        {
            index: "7",
            name: "Django",
        },
        {
            index: "8",
            name: "MongoDB",
        },
        {
            index: "9",
            name: "ReactNative",
        },
        {
            index: "10",
            name: "git",
        },
        {
            index: "11",
            name: "Flutter",
        },
        {
            index: "12",
            name: "Dart",
        },
        {
            index: "13",
            name: "Swift",
        },
        {
            index: "14",
            name: "golang",
        },
        {
            index: "15",
            name: "java",
        },


    ];
    return (
        <FlatList
            style={styles.listStyle}
            keyExtractor={(key) => {
                return key.index;
            }}
            // --------------Horizontally  Scrolling------------- //
            horizontal
            // inverted
            // numColumns={2}
            // --------------start Show Scrolling ---------------//
            showsHorizontalScrollIndicator={false}
            // -------------End Show Scrolling Indicator------------//

            data={names}
            renderItem={({ item }) => {
                console.log(item.name);
                return <Text style={styles.textStyle}> {item.name} </Text>

            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: "white",
        backgroundColor: "red",
        textAlign: "center",
        margin: 15,
        justifyContent: "center"


    },
    listStyle: {
        textAlign: "center",
        margin: 20,
        padding: 10,

    }


});

export default FlatListDemo;
