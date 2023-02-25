import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';

import React, { useState } from 'react';

export default function MedicalSupReg({navigation}) {

  const [fname, setfName]= useState('');
  const [lname, setlName]= useState('');
  const [CNIC, setCNIC] = useState('');
  const [email, setEmail]= useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [id, setId] = useState('');
  const [hname, sethName]= useState('');

  return (
    <View style={styles.container}>
      <ScrollView>
      <ImageBackground source={require('./assets/funky-lines.png')} style={{ width: '100%', height: '100%' }}>
      <View style={styles.card}>
      <Text style={styles.heading}>Medical Superintendent Registration</Text>
      <Text style={styles.headingdesc}>Register a new Medical Superintendent</Text>
      <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            autoComplete='name'
            placeholder="First Name"
            onChangeText={text => setfName(text)}
            value={fname}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            autoComplete='name'
            placeholder="Last Name"
            onChangeText={text => setlName(text)}
            value={lname}
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
            autoComplete='email'
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            value={email}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Hospital Id"
            onChangeText={text => setId(text)}
            value={id}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Hospital Name"
            onChangeText={text => sethName(text)}
            value={hname}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={showPassword ? true : false}
          />
        </View>
        <TouchableOpacity style={styles.button3} onPress={() => setShowPassword(!showPassword)}>
        <Text style={styles.buttonText}>{showPassword ? 'Show Password' : 'Hide Password'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('AdminDashboard')}>
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