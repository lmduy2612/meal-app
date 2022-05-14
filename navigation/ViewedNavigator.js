import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch} from "react-redux";
import {AntDesign} from "@expo/vector-icons";
import {Alert, StyleSheet, TouchableOpacity} from "react-native";
import ProductScreen from "../screens/ProductScreen";
import ViewedScreen from "../screens/ViewedScreen";
import {removeAllProductView} from "../store/slices/viewed";
import Colors from "../constants/color";

const ViewedStack = createStackNavigator();

export default function ViewedStackScreen() {
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
                    onPress: () => dispatch(removeAllProductView())
                },
            ]
        );
    };


    return (
        <ViewedStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.primaryColor,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {}
            }}
            initialRouteName="Favorite">
            <ViewedStack.Screen name="Viewed" component={ViewedScreen}
                                options={{
                                    title: 'Món ăn đã xem',
                                    headerRight: () => <HeaderRight/>
                                }}/>
            <ViewedStack.Screen name="Product" component={ProductScreen}
                                options={({route}) => ({
                                    title: route.params.productName
                                })}/>
        </ViewedStack.Navigator>
    );
}


const styles = StyleSheet.create({
    icon: {
        marginRight: 25,
    },
});