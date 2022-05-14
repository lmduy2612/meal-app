import React from 'react';
import {Alert, View, StyleSheet} from 'react-native';
import {PRODUCTS} from '../data/data';
import FlatProduct from "../components/FlatProduct";
import {useSelector, shallowEqual, useDispatch} from "react-redux";
import {removeProductView} from "../store/slices/viewed";
import {toggleFavorite} from "../store/slices/favorite";

export default function ViewedScreen(props) {
    const dispatch = useDispatch();
    const viewed = useSelector((state) => state.viewed.items, shallowEqual);
    const products = viewed.map(itemId => PRODUCTS.find(item => item.id === itemId));

    const onDelete = (id) => {
        Alert.alert(
            "Thông báo",
            "Bạn có chắc chắn muốn xóa?",
            [
                {
                    text: "Hủy",
                    style: "cancel"
                },
                {
                    text: "Đồng ý",
                    onPress: () => dispatch(removeProductView({id: id}))
                },
            ]
        );
    }

    const onFavorite = (id) => {
        dispatch(toggleFavorite({id: id}));
    }

    return (
        <View style={styles.container}>
            <FlatProduct products={products} navigation={props.navigation}
                         onDelete={onDelete}
                         onFavorite={onFavorite}
                         isBtnFavorite/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-around'
    },
});