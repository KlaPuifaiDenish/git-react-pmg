import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  View,
  Text,
} from "react-native";


import { ThemeProvider, Button, Input, Image } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default class Reports extends Component {
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

          <Button
            icon={<Icon name="file" size={15} color="white" />}
            title="    Report 1 "
            buttonStyle={{ backgroundColor: "green" }}
            containerStyle={{marginTop:65}}
          />

          <Button
            icon={<Icon name="file" size={15} color="white" />}
            title="    Report 2"
            containerStyle={{ marginTop: 5 }}
            buttonStyle={{ backgroundColor: "#F2A753" }}
            onPress={() => this.props.navigation.navigate("Reports")}
          />

            <Button
            icon={<Icon name="file" size={15} color="white" />}
            title="    Report 3 "
            buttonStyle={{ backgroundColor: "green" }}
            containerStyle={{marginTop:5}}
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
