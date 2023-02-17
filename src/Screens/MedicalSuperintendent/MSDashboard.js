import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useState } from 'react';
import { StyleSheet, Button, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import MSOperatingStaff from './MSOperatingStaff';
import MSOperatingStaffReg from './MSOperatingStaffReg';
import OSVaccine from '../OperatingStaff/OSVaccine';
import MSSetting from './MSSetting';

 const Tab = createBottomTabNavigator();

export default function MSDashboard() {
  return (
    <Tab.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="MSOperatingStaff"
        component={MSOperatingStaff}
        options={{headerShown: false,
          tabBarLabel: 'Operating Staff',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-details" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MSOperatingStaffReg"
        component={MSOperatingStaffReg}
        options={{headerShown: false,
          tabBarLabel: 'Register',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-supervisor" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="OSVaccine"
        component={OSVaccine}
        options={{headerShown: false,
          tabBarLabel: 'Vaccine Details',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MSSetting"
        component={MSSetting}
        options={{headerShown: false,
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
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
    // <Tab.Navigator
    //   initialRouteName="AdminLoginScreen"
    //   screenOptions={{
    //     activeTintColor: '#e91e63',
    //   }}
    // >
    //   <Tab.Screen
    //     name="Details"
    //     component={Details}
    //     options={{headerShown: false,
    //       tabBarLabel: 'Details',
    //       tabBarIcon: ({ color, size }) => (
    //         <MaterialCommunityIcons name="account-details" color={color} size={size} />
    //       ),
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Feedback"
    //     component={Feedback}
    //     options={{headerShown: false,
    //       tabBarLabel: 'Feedback',
    //       tabBarIcon: ({ color, size }) => (
    //         <MaterialCommunityIcons name="account-supervisor" color={color} size={size} />
    //       ),
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Setting"
    //     component={Setting}
    //     options={{headerShown: false,
    //       tabBarLabel: 'Setting',
    //       tabBarIcon: ({ color, size }) => (
    //         <MaterialCommunityIcons name="cog-outline" color={color} size={size} />
    //       ),
    //     }}
    //   />
    // </Tab.Navigator>