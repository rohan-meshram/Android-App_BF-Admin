import React from "react";
import { StyleSheet, View, Text } from "react-native";

const App = () => {
  return(
    <View style={styles.container}>
      <Text style={{fontFamily: 'RobotoSlab-Bold', fontSize: 20}}>Demo</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})