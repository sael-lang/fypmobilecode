import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import OSVaccine from './OSVaccine';
import OSSetting from './OSSetting';
import OSBirth from './OSBirth';

const Tab = createBottomTabNavigator();

export default function OSDashboard() {
  return (
    <Tab.Navigator
      initialRouteName="OSBirth"
      screenOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="OSBirth"
        component={OSBirth}
        options={{headerShown: false,
          tabBarLabel: 'Birth',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-details" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="OSVaccine"
        component={OSVaccine}
        options={{headerShown: false,
          tabBarLabel: 'Vaccine',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-supervisor" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="OSSetting"
        component={OSSetting}
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