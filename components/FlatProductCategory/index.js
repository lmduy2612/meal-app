import React from 'react';
import {FlatList, View} from 'react-native';
import styles from './styles';
import ProductCategoryComponent from '../../components/ProductCategory';
import {toggleFavorite} from "../../store/slices/favorite";
import {useDispatch} from "react-redux";

export default function FlatProductComponent(props) {
    const dispatch = useDispatch();

    const onFavorite = (id) => {
        dispatch(toggleFavorite({id: id}));
    }

    const renderGridItem = (data) => {
        return (
            <ProductCategoryComponent
                item={data.item}
                onFavorite={onFavorite}
                onSelect={() => {
                    props.navigation.navigate('Product', {
                        productId: data.item.id,
                        productName: data.item.title,
                    })
                }}
            />
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={item => item.id}
                data={props.products}
                numColumns={2}
                renderItem={renderGridItem}
                columnWrapperStyle={{
                    justifyContent: 'space-between'
                }}
            />
        </View>
    );
}