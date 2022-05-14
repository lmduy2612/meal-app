import React from 'react';
import {FlatList, View, Text} from 'react-native';
import styles from './styles';
import ProductComponent from '../../components/Product';

export default function FlatProductComponent(props) {
    const {onDelete, onFavorite, isBtnFavorite} = props;

    const renderGridItem = (data) => {
        return (
            <ProductComponent
                item={data.item}
                isBtnFavorite={isBtnFavorite}
                onDelete={onDelete}
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

    const renderEmpty = () => (
        <View>
            <Text style={styles.text_empty}>Danh sách món ăn đang rỗng!</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={item => item.id}
                data={props.products}
                renderItem={renderGridItem}
                ListEmptyComponent={renderEmpty}
            />
        </View>
    );
}