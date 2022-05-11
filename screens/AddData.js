import { View, Text } from 'react-native'
import { ThemeProvider, Button, Input, Image } from "react-native-elements";
import React from 'react'
import { collection, getDocs,addDoc,doc, setDoc  } from "firebase/firestore/lite";
import {  db } from "./database/firebaseDB";
import Icon from "react-native-vector-icons/FontAwesome";

export default function AddData() {


  const storeData= async ()=>{
      const name_c ="KLA";

      await setDoc(doc(db,"cities","Random"), {
        name: name_c,
      });
  }
  return (
    <View>
       <Button
            icon={<Icon name="plus" size={15} color="white" />}
            title=" Add Data"
            buttonStyle={{ backgroundColor: "green" }}
            onPress={() => storeData()}
          />
    </View>
  )
}