import React, {useState, useContext} from "react";
import {
  View,
  Button,
  Platform,
  Text,
  Alert,
  StyleSheet,
  Pressable,
} from "react-native";

import {connect} from "react-redux";
import * as SecureStore from "expo-secure-store";
import GetLocation from "./GetLocation";
import {firebaseLogout} from "./doFireBase";

function Settings(props) {
  return (
    <View>
        <GetLocation/>
        <Pressable
        style={styles.button}
        onPress={()=>{
          firebaseLogout(props)
        }}>
        <Text style={styles.labelText}>로그아웃</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#D4ECDD",
    padding: 15,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "#112031",
    textAlign: "center",
  },
});

function getLoading(state) {
  return {
    state: state,
  };
}

export default connect(getLoading)(Settings);

// export default Settings;
