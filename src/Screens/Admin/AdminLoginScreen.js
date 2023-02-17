import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, ImageBackground } from 'react-native';

const AdminLoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  const handleLoginPress = () => {
    // Perform login logic here
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/funky-lines.png')} style={{ width: '100%', height: '100%' }}>
      <View style={styles.card}>
      <Text style={styles.heading}>Admin Sign In</Text>
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
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  );
};

const styles = {
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
    marginTop: '55%',
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
  icons: {
    backgroundColor: '#e3e3e3',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
};

export default AdminLoginScreen;