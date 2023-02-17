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
import OSAddBirth from './src/Screens/OperatingStaff/OSAddBirth';
import OSDelBirth from './src/Screens/OperatingStaff/OSDelBirth';
import OSAddVaccine from './src/Screens/OperatingStaff/OSAddVaccine';
import OSBirthData from './src/Screens/OperatingStaff/OSBirthData';
import OSDelVaccine from './src/Screens/OperatingStaff/OSDelVaccine';
import OSVaccineData from './src/Screens/OperatingStaff/OSVaccineData';
import MSVaccineStockData from './src/Screens/MedicalSuperintendent/MSVaccineStockData';
import MSDashboard from './src/Screens/MedicalSuperintendent/MSDashboard';
import MSOperatingStaff from './src/Screens/MedicalSuperintendent/MSOperatingStaff';
import MSOperatingStaffData from './src/Screens/MedicalSuperintendent/MSOperatingStaffData';
import MSOperatingStaffReg from './src/Screens/MedicalSuperintendent/MSOperatingStaffReg';
import MSSetting from './src/Screens/MedicalSuperintendent/MSSetting';
import MSVaccineStock from './src/Screens/MedicalSuperintendent/MSVaccineStock';

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
        <Stack.Screen name="OSAddBirth" component={OSAddBirth} options={{ headerShown: false, title: 'OSAddBirth' }}/>
        <Stack.Screen name="OSDelBirth" component={OSDelBirth} options={{ headerShown: false, title: 'OSDelBirth' }}/>
        <Stack.Screen name="OSBirthData" component={OSBirthData} options={{ headerShown: false, title: 'OSBirthData' }}/>
        <Stack.Screen name="OSVaccineData" component={OSVaccineData} options={{ headerShown: false, title: 'OSVaccineData' }}/>
        <Stack.Screen name="OSAddVaccine" component={OSAddVaccine} options={{ headerShown: false, title: 'OSAddVaccine' }}/>
        <Stack.Screen name="OSDelVaccine" component={OSDelVaccine} options={{ headerShown: false, title: 'OSDelVaccine' }}/>
        <Stack.Screen name="MSVaccineStockData" component={MSVaccineStockData} options={{ headerShown: false, title: 'MSVaccineStockData' }}/>
        <Stack.Screen name="MSDashboard" component={MSDashboard} options={{ headerShown: false, title: 'MSDashboard' }}/>
        <Stack.Screen name="MSOperatingStaff" component={MSOperatingStaff} options={{ headerShown: false, title: 'MSOperatingStaff' }}/>
        <Stack.Screen name="MSOperatingStaffData" component={MSOperatingStaffData} options={{ headerShown: false, title: 'MSOperatingStaffData' }}/>
        <Stack.Screen name="MSOperatingStaffReg" component={MSOperatingStaffReg} options={{ headerShown: false, title: 'MSOperatingStaffReg' }}/>
        <Stack.Screen name="MSSetting" component={MSSetting} options={{ headerShown: false, title: 'MSSetting' }}/>
        <Stack.Screen name="MSVaccineStock" component={MSVaccineStock} options={{ headerShown: false, title: 'MSVaccineStock' }}/>
        
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