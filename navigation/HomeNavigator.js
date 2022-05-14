import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Colors from './../constants/color';

import HomeScreen from './../screens/HomeScreen';
import CategoryScreen from './../screens/CategoryScreen';
import ProductScreen from './../screens/ProductScreen';

const HomeStack = createStackNavigator();

export default function HomeStackScreen() {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.primaryColor,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {},
            }}
            initialRouteName="Home">
            <HomeStack.Screen name="Home" component={HomeScreen}
                              options={{
                                  title: "Món ăn ngon"
                              }}/>
            <HomeStack.Screen name="Category" component={CategoryScreen}
                              options={({route}) => ({
                                  title: route.params.categoryName
                              })}/>
            <HomeStack.Screen name="Product" component={ProductScreen}
                              options={({route}) => ({
                                  title: route.params.productName
                              })}/>
        </HomeStack.Navigator>
    );
}