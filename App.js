import React from 'react';
import store from './store';
import {Provider} from 'react-redux';
import {Ionicons} from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackScreen from "./navigation/HomeNavigator";
import ViewedStackScreen from "./navigation/ViewedNavigator";
import FavoriteStackScreen from "./navigation/FavoriteNavigator";
import color from "./constants/color";

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    switch (route.name) {
                        case 'Home':
                            iconName = focused ? 'ios-home' : 'ios-home-outline';
                            break;
                        case 'Viewed':
                            iconName = focused ? 'md-timer' : 'md-timer-outline';
                            break;
                        case 'Favorite':
                            iconName = focused ? 'ios-list' : 'ios-list-outline';
                            break;
                    }
                    return <Ionicons name={iconName} size={size} color={color}/>;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#FFF',
                inactiveTintColor: '#FFF',
                labelStyle: {
                    fontSize: 13,
                },
                style: {
                    backgroundColor: color.primaryColor,
                    height: 65,
                    paddingBottom: 10,
                },
            }}
            initialRouteName="Home"
        >
            <Tab.Screen name="Home" component={HomeStackScreen} options={{title: "Trang chủ"}}/>
            <Tab.Screen name="Viewed" component={ViewedStackScreen} options={{title: "Đã xem"}}/>
            <Tab.Screen name="Favorite" component={FavoriteStackScreen} options={{title: "Yêu thích"}}/>
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <MyTabs/>
            </NavigationContainer>
        </Provider>
    );
}
