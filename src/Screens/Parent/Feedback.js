import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

import React, { useState } from 'react';

export default function Feedback({navigation}) {
  const [feedback, setFeedback]= useState('');

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../Admin/assets/funky-lines.png')} style={{ width: '100%', height: '100%' }}>
      <View style={styles.card}>
      <Text style={styles.heading}>User Feedback</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Feedback (Optional)"
            onChangeText={text => setFeedback(text)}
            value={feedback}
            multiline={true}
            numberOfLines={12}
          />
        </View>
        
        <TouchableOpacity style={styles.button} onPress={''}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  heading:{
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
    Text:{
      marginTop:20,
      fontWeight: 'bold',
    },
    container: {
      flex: 1,
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
      marginTop: '27%',
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
      justifyContent: 'center',
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
    buttonText: {
      fontSize: 16,
      color: '#fff',
      textAlign: 'center',
    },
  });