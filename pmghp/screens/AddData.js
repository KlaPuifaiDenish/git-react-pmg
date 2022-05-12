import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  FlatList,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {ThemeProvider, Button, Input, Image} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {openDatabase} from 'react-native-sqlite-storage';



const db = openDatabase({
  name: 'rn_sqlite',
});

const AddData = ({navigation}) => {
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [province, setProvince] = useState('');
  const [dx, setDx] = useState('');

  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS pmgapp (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(200), mobile VARCHAR(11), province VARCHAR(150), dx VARCHAR(150) )`,
        [],
        (sqlTxn, res) => {
          console.log('table created successfully');
        },
        error => {
          console.log('error on creating table ' + error.message);
        },
      );
    });
  };

  const addCategory = () => {
    if (!name) {
      alert('Enter category');
      return false;
    }

    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO pmgapp (name,mobile,province,dx) VALUES (?,?,?,?)`,
        [name, mobile, province, dx],

        (sqlTxn, res) => {
          console.log(`successfully`);
          getCategories();
          setCategory('');
          setName('');
          setMobile('');
          setProvince('');
          setDx('');
        },
        error => {
          console.log('error on adding  ' + error.message);
        },
      );
    });
  };

  const getCategories = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM pmgapp ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          console.log('pmgapp retrieved successfully');
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({
                id: item.id,
                name: item.name,
                mobile: item.mobile,
                province: item.province,
                dx: item.dx,
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
          <Text style={{marginRight: 9}}>{item.id}</Text>
          <Text>
            {item.name} {item.mobile}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 12,
            paddingHorizontal: 10,
            borderBottomWidth: 1,
            borderColor: '#ddd',
            marginLeft: 15,
          }}>
          <Text>
            {item.mobile} {item.province} {item.dx}
          </Text>
        </View>
      </View>
    );
  };

  useEffect(async () => {
    await createTables();
    await getCategories();
  }, []);

  return (
    <ThemeProvider>
      <ScrollView style={styles.container}>
        {/*  {
          <TextInput
            placeholder="Enter category"
            value={category}
            onChangeText={setCategory}
            style={{marginHorizontal: 8}}
          />
        } */}

        <Input
          leftIcon={<Icon name="user-o" size={20} color="#F2A753" />}
          placeholder={'   Name'}
          containerStyle={{marginTop: 20}}
          value={name}
          onChangeText={setName}
        />
        <Input
          leftIcon={<Icon name="mobile" size={30} color="#F2A753" />}
          placeholder={'   Mobile'}
          value={mobile}
          onChangeText={setMobile}
        />
        <Input
          leftIcon={<Icon name="file" size={20} color="#F2A753" />}
          placeholder={'   Province'}
          value={province}
          onChangeText={setProvince}
        />
        <Input
          leftIcon={<Icon name="file" size={20} color="#F2A753" />}
          placeholder={'   Disease'}
          value={dx}
          onChangeText={setDx}
        />

        <Button
          icon={<Icon name="plus" size={15} color="white" />}
          title=" Add Data"
          buttonStyle={{backgroundColor: 'green'}}
          onPress={addCategory}
        />

        <Button
          icon={<Icon name="file" size={15} color="white" />}
          title="    Report"
          containerStyle={{marginTop: 5}}
          buttonStyle={{backgroundColor: '#F2A753'}}
          onPress={() => navigation.navigate("Reports")}
        />

        {/*     <FlatList
          data={categories}
          renderItem={renderCategory}
          key={cat => cat.id}
        /> */}
      </ScrollView>
    </ThemeProvider>
  );
};

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
export default AddData;
