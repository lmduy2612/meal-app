import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {Ionicons, FontAwesome} from '@expo/vector-icons';
import styles from './styles';
import color from '../../constants/color';
import {shallowEqual, useSelector} from "react-redux";

export default function ProductComponent(props) {
    const favorites = useSelector((state) => state.favorite.items, shallowEqual);

    const {onFavorite} = props;
    const {id, title, view, favorite, thumb} = props.item;

    const isFavorite = !!favorites.includes(id);
    const iconFavorite = isFavorite ? "heart" : "heart-o";
    const totalFavorite = isFavorite ? favorite + 1 : favorite;

    return (
        <TouchableOpacity
            onPress={props.onSelect}>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    resizeMode={'cover'}
                    source={thumb}
                />
                <View style={styles.info}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.description}>
                        <TouchableOpacity onPress={() => onFavorite(id)}>
                            <View style={styles.box_icon}>
                                <FontAwesome name={iconFavorite} size={25} color={color.iconColor}/>
                                <Text style={styles.text_icon}>{totalFavorite}</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.box_icon}>
                            <Ionicons name="eye" size={27} color={color.iconColor}/>
                            <Text style={styles.text_icon}>{view}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}