// importy libraries to create components //
import React from 'react';
import { StyleSheet, Text, View, } from "react-native";

const FirstChallenge = () => {
  return (
      <Text style={styles.FirstOne}>First Component</Text>
  );
};

// Create a Style to Style the Component //
const styles = StyleSheet.create({
    FirstOne: {
        display:"flex",
        justifyContent:"center",
        alignContent:"center",
        color: "white",
  },
});


// Export the File, so that We can use it elesewhere in our app //
export default FirstChallenge;