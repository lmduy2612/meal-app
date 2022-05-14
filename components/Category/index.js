import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

export default function CategoryComponent(props) {
    const {title, thumb} = props;
    return (
        <TouchableOpacity
            onPress={props.onSelect}>
            <View style={styles.category_container}>
                <Image
                    style={styles.category_image}
                    resizeMode={'cover'}
                    source={thumb}
                />
                <Text style={styles.category_title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}