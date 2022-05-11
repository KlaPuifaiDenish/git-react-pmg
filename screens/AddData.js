import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  View,
  Text,
} from "react-native";
import db from "../database/firebaseDB";

import { ThemeProvider, Button, Input, Image } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { collection, addDoc } from "firebase/firestore"; 

class AddData extends Component {
  constructor() {
    super();
   
  }
  render() {
    return (
      <ThemeProvider>
        <ScrollView style={styles.container}>
          <Image
            source={{
              uri: "https://pmghospital.in.th/wp-content/uploads/2021/03/%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B8%AD%E0%B8%82%E0%B9%88%E0%B8%B2%E0%B8%A22.jpg",
            }}
            style={{ width: 300, height: 150 }}
            containerStyle={{
              marginLeft: "auto",
              marginRight: "auto",
            }}
            PlaceholderContent={<ActivityIndicator />}
          />

          <Input
            leftIcon={<Icon name="user-o" size={20} color="#F2A753" />}
            placeholder={"   Name"}
            containerStyle={{ marginTop: 20 }}
          />
          <Input
            leftIcon={<Icon name="mobile" size={30} color="#F2A753" />}
            placeholder={"    Mobile"}
          />
          <Input
            leftIcon={<Icon name="file" size={20} color="#F2A753" />}
            placeholder={"   Province"}
          />
          <Input
            leftIcon={<Icon name="file" size={20} color="#F2A753" />}
            placeholder={"   Disease"}
          />

          <Button
            icon={<Icon name="plus" size={15} color="white" />}
            title=" Add Data"
            buttonStyle={{ backgroundColor: "green" }}
          />

          <Button
            icon={<Icon name="file" size={15} color="white" />}
            title="    Report"
            containerStyle={{ marginTop: 5 }}
            buttonStyle={{ backgroundColor: "#F2A753" }}
            onPress={() => this.props.navigation.navigate("Reports")}
          />
        </ScrollView>
      </ThemeProvider>
    );
  }
}

const theme = {
  Button: {
    raised: true,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  preloader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default AddData;
