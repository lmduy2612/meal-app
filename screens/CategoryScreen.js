import React from 'react';
import {View, StyleSheet} from 'react-native';
import {PRODUCTS} from '../data/data';
import FlatProductCategory from '../components/FlatProductCategory';

export default function Category(props) {
    const {categoryId} = props.route.params;
    const products = PRODUCTS.filter(item => item.categoryId === categoryId);

    return (
        <View style={styles.container}>
            <FlatProductCategory products={products} navigation={props.navigation}/>
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