import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';

import React, { useState } from 'react';

export default function DirectorEPIReg({navigation}) {
  const [firstName, setfirstName]=useState("");
  const [lastName, setlastName]=useState("");
  const [Email, setEmail]=useState("");
  const [Password, setPassword]=useState("");
  const [Province, setProvince]=useState("");
  const [Contact, setContact]=useState("");
  const [CNIC, setCNIC]=useState("");
  const [showPassword, setShowPassword] = useState(true);
  const saveData = async() =>
  {
      let formField = new FormData()
      formField.append('directorEPIFirstname',firstName)
      formField.append('directorEPILastname',lastName)
      formField.append('directorEPIEmail',Email)
      formField.append('directorEPIPassword',Password)
      formField.append('directorEPIProvince',Province)
      formField.append('directorEPIphone',Contact)
      formField.append('id',CNIC)
      formField.append('access',"directorepi")
           await fetch("http://192.168.0.100:8000/savedepi", {
            method: "POST",
            body:  formField
         })
         .then(function(response){ 
          return response.json();   
         })
         .then(function(data){ 
         console.log(data)
         });
        }

  return (
    <View style={styles.container}>
      <ScrollView>
      <ImageBackground source={require('./assets/funky-lines.png')} style={{ width: '100%', height: '100%' }}>
      <View style={styles.card}>
      <Text style={styles.heading}>Director EPI Registration</Text>
      <Text style={styles.headingdesc}>Register a new Director EPI</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            autoComplete='name'
            placeholder="First Name"
            onChangeText={text => setfirstName(text)}
            value={firstName}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            autoComplete='name'
            placeholder="Last Name"
            onChangeText={text => setlastName(text)}
            value={lastName}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="CNIC"
            onChangeText={text => setCNIC(text)}
            value={CNIC}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            autoComplete='email'
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            value={Email}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            autoComplete='tel'
            placeholder="Phone"
            onChangeText={text => setContact(text)}
            value={Contact}
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Province"
            onChangeText={text => setProvince(text)}
            value={Province}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            value={Password}
            secureTextEntry={showPassword ? true : false}
          />
        </View>
        <TouchableOpacity style={styles.button3} onPress={() => setShowPassword(!showPassword)}>
        <Text style={styles.buttonText}>{showPassword ? 'Show Password' : 'Hide Password'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => saveData()}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heading:{
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign:'center'
  },
  headingdesc:{
    fontSize: 20,
    marginBottom: 30,
    textAlign:'center'
  },
    Text:{
      marginTop:20,
      fontWeight: 'bold',
      color:'black'
    },
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    logoContainer: {
      alignItems: 'center',
      marginTop: 120,
      marginBottom:10,
    },
    logo: {
      width: 120,
      height: 120,
      borderRadius:60,
      resizeMode: 'contain',
  
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    card: {
      borderRadius: 10,
      backgroundColor: '#eee',
      marginTop: '11%',
      margin: '10%',
      paddingTop: '10%',
      paddingBottom: '12%',
      width: '80%',
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
      borderRadius: 10,
      backgroundColor: '#eee',
      margin: 10,
      padding: 15,
      paddingTop: 10,
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
      textAlign: 'center',
      fontSize: 16,
    },
    button: {
      marginTop: 20,
      backgroundColor: '#0066cc',
      borderRadius: 10,
      padding: 15,
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
    button2: {
      marginTop: 20,
      backgroundColor: 'green',
      borderRadius: 10,
      padding: 15,
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
    button3: {
      marginTop: 15,
      backgroundColor: 'grey',
      borderRadius: 50,
      padding: 5,
      width: '42%',
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
  });