import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Nuevopost from '../Screens/Nuevopost';
import User from '../Screens/User';
const Tab = createBottomTabNavigator();


function HomeMenu(){
    return(
            <Tab.Navigator>
                <Tab.Screen name="Home" component={ Home } options={
                    {  headerShown: false ,  
                        tabBarIcon: () => <FontAwesome name="home" size={24} color="black" /> }
                    }/>
                <Tab.Screen name="Profile" component={ Profile } options={
                    {  headerShown: false ,  
                        tabBarIcon: () => <MaterialCommunityIcons name="face-woman-profile" size={24} color="black" /> }
                    }/>
                <Tab.Screen name="Usuarios" component={ User } options={
                    {  headerShown: false } } />
          
            </Tab.Navigator>

    )
}

export default HomeMenu