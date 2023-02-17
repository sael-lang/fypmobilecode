import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';

import React, { useState } from 'react';

export default function OSAddBirth({navigation}) {

  const [cfname, setCFname] = useState('');
  const [clname, setCLname] = useState('');
  const [femail, setFemail] = useState('');
  const [fcnic, setFCNIC] = useState('');
  const [mcnic, setMCNIC] = useState('');
  const [hosid, setHosId] = useState('');
  const [hosname, setHosName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  return (
    <View style={styles.container}>
      
      <ImageBackground source={require('../Admin/assets/funky-lines.png')} style={{ width: '100%', height: '100%' }}>
      <ScrollView>
      <View style={styles.card}>
      <Text style={styles.heading}>Add New Birth Records</Text>
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
            secureTextEntry={showPassword ? true : false}
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
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Mother CNIC"
            onChangeText={text => setMCNIC(text)}
            value={mcnic}
          />
        </View>
      <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Hospital Id"
            onChangeText={text => setHosId(text)}
            value={hosid}
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
        <TouchableOpacity style={styles.button2} >
          <Text style={styles.buttonText}>Add Records</Text>
        </TouchableOpacity>

      </View>
      </ScrollView>
      </ImageBackground>
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
    buttonText: {
      fontSize: 16,
      color: '#fff',
      textAlign: 'center',
    },
  });