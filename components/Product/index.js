import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {AntDesign, FontAwesome} from '@expo/vector-icons';
import styles from './styles';
import color from "../../constants/color";
import {shallowEqual, useSelector} from "react-redux";

export default function ProductComponent(props) {
    const favorite = useSelector((state) => state.favorite.items, shallowEqual);

    const {onDelete, onFavorite, isBtnFavorite = false} = props;
    const {id, thumb} = props.item;

    const isFavorite = !!favorite.includes(id);
    const iconFavorite = isFavorite ? "heart" : "heart-o";

    return (
        <View style={styles.container}>
            <View style={styles.box_left}>
                <TouchableOpacity
                    onPress={props.onSelect}>
                    <Image
                        style={styles.image}
                        resizeMode={'cover'}
                        source={thumb}
                    />
                </TouchableOpacity>
                <View style={styles.info}>
                    <Text style={styles.title}>{props.item.title}</Text>
                </View>
            </View>
            <View>
                {isBtnFavorite && (
                    <TouchableOpacity style={styles.icon} onPress={() => onFavorite(id)}>
                        <FontAwesome name={iconFavorite} size={24} color={color.iconColor}/>
                    </TouchableOpacity>
                )}
                <TouchableOpacity style={styles.icon} onPress={() => onDelete(id)}>
                    <AntDesign name="delete" size={25} color={color.iconColor}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}