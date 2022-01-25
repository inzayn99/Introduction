// importy libraries to create components //
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, } from "react-native";
// import CustomComponent from "./Src/Screens/CustomComponent";
// import FirstChallenge from './Src/Screens/FirstChallenge';
import FlatListDemo from './Src/Screens/FlatListDemo';



// Create a Component that returning some jsX/ simple function //
const App = () => {
  return (
    // <View style={ styles.container }>
    //   <Text style={styles.TextStyle}>App</Text>
    //   <StatusBar style='auto' />
    //   <CustomComponent />
    //   <FirstChallenge/>

    //   <FlatListDemo />

    //   </View>
    <View>
      <FlatListDemo />
    </View>
  );
};

// Create a Style to Style the Component //
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'left',
    justifyContent: 'center',
  },

  TextStyle: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    color: "black",
  },
});


// Export the File, so that We can use it elesewhere in our app //
export default App;