// importy libraries to create components //
import React from 'react';
import { StyleSheet, Text, View, } from "react-native";

const CustomComponent = () => {
  return (
      <Text style={styles.TextStyle}>CostomComponent</Text>
  );
};

// Create a Style to Style the Component //
const styles = StyleSheet.create({
    TextStyle: {
        display:"flex",
        justifyContent:"center",
        alignContent:"center",
        color: "red",
  },
});


// Export the File, so that We can use it elesewhere in our app //
export default CustomComponent;