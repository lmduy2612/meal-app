import React from 'react';
import {Alert, View, StyleSheet} from 'react-native';
import {PRODUCTS} from '../data/data';
import FlatProduct from "../components/FlatProduct";
import {useSelector, shallowEqual, useDispatch} from "react-redux";
import {removeProductFavorite} from "../store/slices/favorite";

export default function FavoriteScreen(props) {
    const dispatch = useDispatch();
    const favorite = useSelector((state) => state.favorite.items, shallowEqual);
    const products = favorite.map(itemId => PRODUCTS.find(item => item.id === itemId));

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
                    onPress: () => dispatch(removeProductFavorite({id: id}))
                },
            ]
        );
    }

    return (
        <View style={styles.container}>
            <FlatProduct products={products} navigation={props.navigation}
                         onDelete={onDelete}
            />
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