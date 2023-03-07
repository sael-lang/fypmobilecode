import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, ImageBackground } from 'react-native';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [aceess, setaccess] = useState(true);
  const handleLoginPress = async() => {
    let formField = new FormData()
      formField.append('email',username)
      formField.append('password',password)
           await fetch("http://192.168.0.122:8000/signin", {
            method: "POST",
            body:  formField
         })
         .then(function(response){ 
          return response.json();   
         })
         .then(function(data){ 
          console.log(data)
          setaccess(data)
         });
  };
  if(aceess=='parent'){
    navigation.navigate('Dashboard')
    setaccess('asd')
   }
   if(aceess=='HealthCareWorker'){
    navigation.navigate('HWDashboard')
    setaccess('asd')
   }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign In</Text>
      <View style={styles.card}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={text => setUsername(text)}
            value={username}
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
        <TouchableOpacity style={styles.button3} onPress={() => setShowPassword(!showPassword)}>
        <Text style={styles.buttonText}>{showPassword ? 'Show Password' : 'Hide Password'}</Text>
      </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleLoginPress()}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <Text style={styles.Text}>OR</Text>
        <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={styles.buttonText1}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
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
    paddingTop: '20%',
    paddingBottom: '52%',
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
};

export default LoginScreen;