import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicicons from 'react-native-vector-icons/Ionicons'
//import Icon from 'react-native-vector-icons/Ionicons';  
import Icon from 'react-native-vector-icons/FontAwesome'
//import screens
import HomeScreen from '../screens/HomeScreen';
import MyAppointmentScreen from '../screens/MyAppointmentScreen';
import MyProfileScreen from '../screens/MyProfileScreen';
const Tab = createBottomTabNavigator();
export default function BottomTabNavigation() {
    return (
        <Tab.Navigator  screenOptions={{
            headerShown: false,
            backgroundColor:'red'
          }}
          tabBarOptions={{
            activeTintColor: 'white',
            inactiveTintColor: '#d9d9d9',
            style: {
                backgroundColor: 'black',
              },
              tabStyle: {
                backgroundColor: 'red',
              },
          }}
          >
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                   // tabBarIcon:{name:'home' ,size:25}
                    // () => <ButtonIconContainer name="home" />
                    tabBarIcon: () => {           return <Icon type="EvilIcons" name="Home" size={25}/>;         }  
                }}
                tabBarOptions={{
                    activeTintColor: 'red',
                    inactiveTintColor: '#d9d9d9',
                    style: {
                      borderTopColor: '#66666666',
                      backgroundColor: 'red',
                      elevation: 0,
                    },
                  }}
            />
            <Tab.Screen name="MyAppointment" component={MyAppointmentScreen} 
             options={{

                tabBarIcon: () => <ButtonIconContainer name="calendar-clear-outline" />
            }}
            />
            <Tab.Screen name="MyProfile" component={MyProfileScreen} 
             options={{
                tabBarIcon: () => <ButtonIconContainer name="persons" />
            }}
            />

        </Tab.Navigator>
    )
}
const ButtonIconContainer = (props) => {
    return <Ionicicons name={props.name} size={25} />
}