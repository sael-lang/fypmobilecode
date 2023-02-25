import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';

import React, { useState } from 'react';

export default function OSAddVaccine({navigation}) {

  const [cfname, setCFname] = useState('');
  const [clname, setCLname] = useState('');
  const [fcnic, setFCNIC] = useState('');
  const [mcnic, setMCNIC] = useState('');
  const [vacid, setVacId] = useState('');
  const [vacname, setVacName] = useState('');
  const [vactype, setVacType] = useState('');
  const [vacdesc, setVacDesc] = useState('');

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
            placeholder="Vaccine Id"
            onChangeText={text => setVacId(text)}
            value={vacid}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Vaccine Name"
            onChangeText={text => setVacName(text)}
            value={vacname}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Vaccine Type"
            onChangeText={text => setVacType(text)}
            value={vactype}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Vaccine Description"
            onChangeText={text => setVacDesc(text)}
            value={vacdesc}
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