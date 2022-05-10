import  React ,{Component} from 'react';
import {StyleSheet,ScrollView,ActivityIndicator,View,Text} from 'react-native'
import firebase  from '../database/firebaseDB';
import  {ThemeProvider,Button , Inpui,Image} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

class AddData extends Component {
    constructor(){
        super();
    }
     render(){
         return(
             <View>
                <Text>Hellow Add Data</Text>
             </View>
         )
     }
     
}