import { View, Text } from 'react-native'
import { ThemeProvider, Button, Input, Image } from "react-native-elements";
import React ,  {useState , useEffect} from 'react'
import Icon from "react-native-vector-icons/FontAwesome";
import { openDatabase } from "react-native-sqlite-storage";


const db = openDatabase({
  name: "rn_sqlite",
});


export default function AddData() {


  const [name , setName ] = useState('');

  const createTables = () => {

  };

  return (
    <View>
       <Button
            icon={<Icon name="plus" size={15} color="white" />}
            title=" Add Data"
            buttonStyle={{ backgroundColor: "green" }}
           /*  onPress={() => storeData()} */
          />
    </View>
  )
}