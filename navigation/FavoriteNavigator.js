import React from 'react';
import {useDispatch} from "react-redux";
import {createStackNavigator} from '@react-navigation/stack';
import {AntDesign} from "@expo/vector-icons";
import {Alert, StyleSheet, TouchableOpacity} from "react-native";
import FavoriteScreen from './../screens/FavoriteScreen';
import ProductScreen from './../screens/ProductScreen';
import {removeAllProductFavorite} from "../store/slices/favorite";
import Colors from './../constants/color';

const FavoriteStack = createStackNavigator();

export default function FavoriteStackScreen() {
    const dispatch = useDispatch();

    const HeaderRight = () => (
        <TouchableOpacity style={styles.icon} onPress={() => onDeleteAll()}>
            <AntDesign name="delete" size={25} color={Colors.iconNavigate}/>
        </TouchableOpacity>
    );

    const onDeleteAll = () => {
        Alert.alert(
            "Thông báo",
            "Bạn có chắc chắn muốn xóa tất cả?",
            [
                {
                    text: "Hủy",
                    style: "cancel"
                },
                {
                    text: "Đồng ý",
                    onPress: () => dispatch(removeAllProductFavorite())
                },
            ]
        );
    };


    return (
        <FavoriteStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.primaryColor,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {}
            }}
            initialRouteName="Favorite">
            <FavoriteStack.Screen name="Favorite" component={FavoriteScreen}
                                  options={{
                                      title: "Yêu thích",
                                      headerRight: () => <HeaderRight/>
                                  }}/>
            <FavoriteStack.Screen name="Product" component={ProductScreen}
                                  options={({route}) => ({
                                      title: route.params.productName
                                  })}/>
        </FavoriteStack.Navigator>
    );
}

const styles = StyleSheet.create({
    icon: {
        marginRight: 25,
    },
});