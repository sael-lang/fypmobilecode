import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import React, { useState } from 'react';

export default function HWAddVaccine({navigation}) {
  const [id, setid] = useState('');
  const [firstName, setfn] = useState('');
  const [lastName, setln] = useState('');
  const [Father_CNIC, setfc] = useState('');
  const [Mother_CNIC, setmc] = useState('');
  const [Vaccine_ID, setvi] = useState('');
  const [Vaccine_Name, setvn] = useState('');
  const [Vaccine_Type, setvt] = useState('');
  const [Vaccine_Description, setvd] = useState('');
  const saveData = async() =>
  {
      let formField = new FormData()
      formField.append('id',id)
    formField.append('firstName',firstName)
    formField.append('lastName',lastName)
    formField.append('Father_CNIC',Father_CNIC)
    formField.append('Mother_CNIC',Mother_CNIC)
    formField.append('Vaccine_ID',Vaccine_ID)
    formField.append('Vaccine_Name',Vaccine_Name)
    formField.append('Vaccine_Type',Vaccine_Type)
    formField.append('Vaccine_Description',Vaccine_Description)
    formField.append('HCW_ID','1')
            fetch("http://192.168.0.122:8000/savevacr", {
            method: "POST",
            body:  formField
         })
         navigation.navigate("HWDashboard")
        }

  return (
    <ScrollView>
    <View style={styles.container}>
      
      <Text style={styles.heading}>Add New Vaccine Record</Text>
      <View style={styles.card}>
      <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Vaccine id"
            onChangeText={text => setid(text)}
            value={id}
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            onChangeText={text => setfn(text)}
            value={firstName}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="last Name"
            onChangeText={text => setln(text)}
            value={lastName}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Father CNIC"
            onChangeText={text => setfc(text)}
            value={Father_CNIC}
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            autoComplete='tel'
            placeholder="Mother CNIC"
            onChangeText={text => setmc(text)}
            value={Mother_CNIC}
            keyboardType="phone-pad"
          />
        </View>
      <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Vaccine ID"
            onChangeText={text => setvi(text)}
            value={Vaccine_ID}
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Vaccine Name"
            onChangeText={text => setvn(text)}
            value={Vaccine_Name}
          />
        </View>
        <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
            placeholder="Vaccine Type"
            onChangeText={text => setvt(text)}
            value={Vaccine_Type}
          />
        </View>
        <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
            placeholder="Vaccine Description"
            onChangeText={text => setvd(text)}
            value={Vaccine_Description}
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