import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {CATEGORIES} from '../data/data';

import CategoryComponent from '../components/Category';

export default function HomeScreen(props) {

    const renderGridItem = (data) => {
        return (
            <CategoryComponent
                title={data.item.title}
                thumb={data.item.thumb}
                onSelect={() => {
                    props.navigation.navigate('Category', {
                        categoryId: data.item.id,
                        categoryName: data.item.title,
                    })
                }}
            />
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={item => item.id}
                data={CATEGORIES}
                numColumns={2}
                renderItem={renderGridItem}
                columnWrapperStyle={{
                    justifyContent: 'space-between'
                }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-around',
    },
});