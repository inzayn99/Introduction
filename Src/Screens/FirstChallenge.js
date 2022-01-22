// importy libraries to create components //
import React from 'react';
import { StyleSheet, Text, View, } from "react-native";

const FirstChallenge = () => {
  return (
      <view>
      <Text style={styles.FirstOne}>First Component</Text>
      <Text style={styles.SecondOne}>Second Component</Text>
      <Text style={styles.ThirdOne}>Third Component</Text>
      </view>
  );
};

// Create a Style to Style the Component //
const styles = StyleSheet.create({
    FirstOne: {
        display:"flex",
        justifyContent:"center",
        fontSize:20,

        alignContent:"center",
        color: "white",
  },
  SecondOne: {
    display:"flex",
    fontWeight:"bold",
    fontSize:30,
    justifyContent:"center",
    alignContent:"center",
    color: "Green",
},
ThirdOne: {
    display:"flex",
    fontSize:40,
    justifyContent:"center",
    alignContent:"center",
    color: "blue",
},
});


// Export the File, so that We can use it elesewhere in our app //
export default FirstChallenge;