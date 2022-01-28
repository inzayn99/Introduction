import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";


const Imagesfile = () => {
    return (

        <View style={styles.listStyle}>
            <Text style={styles.textStyle}>
                This is a image file
                <Image style={styles.ImageStyle}

                    source={require("../../assets/me.jpg")} />
            </Text>
        </View>
    );
};



const styles = StyleSheet.create({

    listStyle: {
        height: 500,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },

    textStyle: {
        fontSize: 30,
    },

    ImageStyle: {
        height: 200,
        width: 200,

    }

});

export default Imagesfile;