import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HWVaccine from './HWVaccine';
import HWSetting from './HWSetting';
import HWBirth from './HWBirth';

const Tab = createBottomTabNavigator();

export default function HWDashboard() {
  return (
    <Tab.Navigator
      initialRouteName="HWBirth"
      screenOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="HWBirth"
        component={HWBirth}
        options={{headerShown: false,
          tabBarLabel: 'Birth',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-details" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="HWVaccine"
        component={HWVaccine}
        options={{headerShown: false,
          tabBarLabel: 'Vaccine',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-supervisor" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="HWSetting"
        component={HWSetting}
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