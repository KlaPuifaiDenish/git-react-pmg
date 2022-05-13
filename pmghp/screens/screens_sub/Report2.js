import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  FlatList,
  StyleSheet,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {ThemeProvider, Button, Input, Image} from 'react-native-elements';
import {openDatabase} from 'react-native-sqlite-storage';

const db = openDatabase({
  name: 'rn_sqlite',
});


export default function Report1({navigation}) {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT count(*) as amount , dx  FROM pmgapp group by dx ORDER BY id `,
        [],
        (sqlTxn, res) => {
          console.log('pmgapp retrieved successfully');
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({
                dx: item.dx,
                amount: item.amount
              });
            }

            setCategories(results);
          }
        },
        error => {
          console.log('error on getting categories ' + error.message);
        },
      );
    });
  };
  const renderCategory = ({item}) => {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 12,
            paddingHorizontal: 10,
            borderBottomWidth: 1,
            borderColor: '#ddd',
          }}>
          <Text style={{marginRight: 9}}>{item.dx}  =  </Text>
          <Text>
            {item.amount}
          </Text>
        </View>
      </View>
    );
  };

  useEffect(async () => {
    await getCategories();
  }, []);
  return (
    <ThemeProvider>
      <ScrollView style={styles.container}>
        <FlatList
          data={categories}
          renderItem={renderCategory}
          key={cat => cat.id}
        />
      </ScrollView>
    </ThemeProvider>
  );
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
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
