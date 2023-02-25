import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import React, { useState } from 'react';

export default function AdminSetting({navigation}) {
 
  return (
    
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AdminLoginScreen')}>
          <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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