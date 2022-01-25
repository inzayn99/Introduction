import React from "react";
import { Text, View, StyleSheet, FlatList } from 'react-native';


const FlatListDemo = () => {
    const names = [
        {
            name: "Zayn",
        },
        {
            name: "Web Developer",
        },
        {
            name: "and Laravel",
        },
        {
            name: "Expert",
        },

    ];
    return (
        <FlatList
            data={names}
            renderItem={(element) => {
                console.log(element.item.name);
                return <Text style={styles.textStyle}> {element.item.name} </Text>

            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: "green",
        backgroundColor: "white",
        textAlign: "center",
        justifyContent: "center"

    }
});

export default FlatListDemo;
