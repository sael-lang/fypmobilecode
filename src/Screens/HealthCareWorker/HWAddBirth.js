import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';

import React, { useState } from 'react';

export default function HWAddBirth({navigation}) {
  const [cID, setCid] = useState('');
  const [cfname, setCFname] = useState('');
  const [clname, setCLname] = useState('');
  const [femail, setFemail] = useState('');
  const [fcnic, setFCNIC] = useState('');
  const [mcnic, setMCNIC] = useState('');
  const [hosid, setHosId] = useState('');
  const [hosname, setHosName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const saveData = () =>
  {
      let formField = new FormData()
      formField.append('id',cID)
    formField.append('firstName',cfname)
    formField.append('lastName',clname)
    formField.append('Father_Email',femail)
    formField.append('Password',password)
    formField.append('Contact',phone)
    formField.append('Father_CNIC',fcnic)
    formField.append('Mother_CNIC',mcnic)
    formField.append('Hospital_ID',hosid)
    formField.append('Hospital_Name',hosname)
    formField.append('access',"parent")
    formField.append('HCW_ID','1')
            fetch("http://192.168.0.122:8000/savechild", {
            method: "POST",
            body:  formField
         })
         .then(function(response){ 
          return response.json();   
         })
         .then(function(data){ 
         console.log(data.status)
         });
         navigation.navigate('HWDashboard')
        }

  return (
    <ScrollView>
    <View style={styles.container}>
      
      <Text style={styles.heading}>Add New Birth Record</Text>
      <View style={styles.card}>
      <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Child ID"
            onChangeText={text => setCid(text)}
            value={cID}
            keyboardType="numeric"
          />
        </View>
      <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Child First Name"
            onChangeText={text => setCFname(text)}
            value={cfname}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Child Last Name"
            onChangeText={text => setCLname(text)}
            value={clname}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Father Email"
            onChangeText={text => setFemail(text)}
            value={femail}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            autoComplete='current-password'
            onChangeText={text => setPassword(text)}
            value={password}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            autoComplete='tel'
            placeholder="Phone"
            onChangeText={text => setPhone(text)}
            value={phone}
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Father CNIC"
            onChangeText={text => setFCNIC(text)}
            value={fcnic}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Mother CNIC"
            onChangeText={text => setMCNIC(text)}
            value={mcnic}
            keyboardType="numeric"
          />
        </View>
      <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Hospital Id"
            onChangeText={text => setHosId(text)}
            value={hosid}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Hospital Name"
            onChangeText={text => setHosName(text)}
            value={hosname}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => saveData()}>
          <Text style={styles.buttonText}>Add Record</Text>
        </TouchableOpacity>
      </View>
      
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  heading:{
    marginTop: '20%',
    fontSize: 30,
    fontWeight: 'bold',
    color:'white'
  },
  Text:{
    marginTop:20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0f1a1e',
  },
  card: {
    borderRadius: 10,
    backgroundColor: '#eee',
    marginTop: '20%',
    borderRadius: 40,
    // margin: '10%',
    paddingTop: '10%',
    paddingBottom: '20%',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    borderRadius: 20,
    backgroundColor: 'lightgrey',
    margin: '2.5%',
    padding: '2.5%',
    width: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    padding:5,
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#0f1a1e',
    borderRadius: 20,
    padding: 15,
    width: '60%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button2: {
    marginTop: '5%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    width: '60%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button3: {
    marginTop: '4%',
    backgroundColor: 'grey',
    borderRadius: 10,
    padding: 5,
    width: '36%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  buttonText1: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  icons: {
    backgroundColor: '#e3e3e3',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  });