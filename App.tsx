import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './src/Screens/Start';
import Login from './src/Screens/Login';
import SignUp from './src/Screens/SignUp';
import Dashboard from './src/Screens/Parent/Dashboard';
import LoginScreen from './src/Screens/LoginScreen';
import SignUpScreen from './src/Screens/SignUpScreen';
import AdminLoginScreen from './src/Screens/Admin/AdminLoginScreen';
import Demo from './src/Screens/Demo';
import AdminDashboard from './src/Screens/Admin/AdminDashboard';
import DirectorEPIReg from './src/Screens/Admin/DirectorEPIReg';
import HospitalReg from './src/Screens/Admin/HospitalReg';
import MedicalSupReg from './src/Screens/Admin/MedicalSupReg';
import ChildData from './src/Screens/Parent/ChildData';
import DirectorEPIData from './src/Screens/Admin/DirectorEPIData';
import HospitalData from './src/Screens/Admin/HospitalData';
import MedicalSupData from './src/Screens/Admin/MedicalSupData';
import Hospital from './src/Screens/Admin/Hospital';
import DirectorEPI from './src/Screens/Admin/DirectorEPI';
import MedicalSup from './src/Screens/Admin/MedicalSup';
import OSBirth from './src/Screens/OperatingStaff/OSBirth';
import OSDashboard from './src/Screens/OperatingStaff/OSDashboard';
import OSVaccine from './src/Screens/OperatingStaff/OSVaccine';
import AddBirth from './src/Screens/OperatingStaff/AddBirth';
import DelBirth from './src/Screens/OperatingStaff/DelBirth';
import AddVaccine from './src/Screens/OperatingStaff/AddVaccine';
import BirthData from './src/Screens/OperatingStaff/BirthData';
import DelVaccine from './src/Screens/OperatingStaff/DelVaccine';
import VaccineData from './src/Screens/OperatingStaff/VaccineData';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Demo">
        <Stack.Screen name="Demo" component={Demo} options={{ headerShown: false, title: 'Demo' }} />
        <Stack.Screen name="Start" component={Start} options={{ headerShown: false, title: 'Start' }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false, title: 'Login' }}/>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false, title: 'Dashboard' }}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false, title: 'LoginScreen' }}/>
        <Stack.Screen name="AdminLoginScreen" component={AdminLoginScreen} options={{ headerShown: false, title: 'AdminLoginScreen' }}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false, title: 'SignUpScreen' }}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false, title: 'SignUp' }}/>
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} options={{ headerShown: false, title: 'AdminDashboard' }}/>
        <Stack.Screen name="HospitalReg" component={HospitalReg} options={{ headerShown: false, title: 'HospitalReg' }}/>
        <Stack.Screen name="MedicalSupReg" component={MedicalSupReg} options={{ headerShown: false, title: 'MedicalSupReg' }}/>
        <Stack.Screen name="DirectorEPIReg" component={DirectorEPIReg} options={{ headerShown: false, title: 'DirectorEPIReg' }}/>
        <Stack.Screen name="ChildData" component={ChildData} options={{ headerShown: false, title: 'ChildData' }}/>
        <Stack.Screen name="HospitalData" component={HospitalData} options={{ headerShown: false, title: 'HospitalData' }}/>
        <Stack.Screen name="MedicalSupData" component={MedicalSupData} options={{ headerShown: false, title: 'MedicalSupData' }}/>
        <Stack.Screen name="DirectorEPIData" component={DirectorEPIData} options={{ headerShown: false, title: 'DirectorEPIData' }}/>
        <Stack.Screen name="Hospital" component={Hospital} options={{ headerShown: false, title: 'Hospital' }}/>
        <Stack.Screen name="MedicalSup" component={MedicalSup} options={{ headerShown: false, title: 'MedicalSup' }}/>
        <Stack.Screen name="DirectorEPI" component={DirectorEPI} options={{ headerShown: false, title: 'DirectorEPI' }}/>
        <Stack.Screen name="OSDashboard" component={OSDashboard} options={{ headerShown: false, title: 'OSDashboard' }}/>
        <Stack.Screen name="OSBirth" component={OSBirth} options={{ headerShown: false, title: 'OSBirth' }}/>
        <Stack.Screen name="OSVaccine" component={OSVaccine} options={{ headerShown: false, title: 'OSVaccine' }}/>
        <Stack.Screen name="AddBirth" component={AddBirth} options={{ headerShown: false, title: 'AddBirth' }}/>
        <Stack.Screen name="DelBirth" component={DelBirth} options={{ headerShown: false, title: 'DelBirth' }}/>
        <Stack.Screen name="BirthData" component={BirthData} options={{ headerShown: false, title: 'BirthData' }}/>
        <Stack.Screen name="VaccineData" component={VaccineData} options={{ headerShown: false, title: 'VaccineData' }}/>
        <Stack.Screen name="AddVaccine" component={AddVaccine} options={{ headerShown: false, title: 'AddVaccine' }}/>
        <Stack.Screen name="DelVaccine" component={DelVaccine} options={{ headerShown: false, title: 'DelVaccine' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});