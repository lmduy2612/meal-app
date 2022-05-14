import React, {useEffect} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {Image, ImageBackground, SafeAreaView, ScrollView, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {PRODUCTS} from '../data/data';
import {FontAwesome, Ionicons} from "@expo/vector-icons";
import {addNewProductView} from '../store/slices/viewed';
import {toggleFavorite} from "../store/slices/favorite";
import color from "../constants/color";
import background from '../assets/background.png';

export default function ProductScreen(props) {
    const dispatch = useDispatch();

    const favorites = useSelector((state) => state.favorite.items, shallowEqual);
    const viewed = useSelector((state) => state.viewed.items, shallowEqual);

    const {productId} = props.route.params;
    const product = PRODUCTS.find(item => item.id === productId);
    const {id, view, favorite, thumb, ingedients, instructions, intro} = product;

    const isFavorite = !!favorites.includes(id);
    const isView = !!viewed.includes(id);
    const iconFavorite = isFavorite ? "heart" : "heart-o";
    const totalFavorite = isFavorite ? favorite + 1 : favorite;
    const totalView = isView ? view + 1 : view;

    const onFavorite = () => {
        dispatch(toggleFavorite({id: id}));
    }

    useEffect(() => {
        dispatch(addNewProductView({id: productId}));
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={background} style={styles.background_image}>
                <ScrollView>
                    <View style={styles.banner}>
                        <Image
                            style={styles.image}
                            resizeMode={'cover'}
                            source={thumb}
                        />
                        <TouchableOpacity onPress={onFavorite} style={[styles.icon_box, styles.icon_left]}>
                            <FontAwesome name={iconFavorite} size={27} color={color.iconColor}/>
                            <Text style={styles.text_icon}>{totalFavorite}</Text>
                        </TouchableOpacity>
                        <View style={[styles.icon_box, styles.icon_right]}>
                            <Ionicons name="eye" size={27} color={color.iconColor}/>
                            <Text style={styles.text_icon}>{totalView}</Text>
                        </View>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.intro}>{intro}</Text>
                        <View style={styles.section}>
                            <Text style={styles.label}>Nguyên liệu</Text>
                            <Text style={styles.description}>{ingedients}</Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.label}>Cách làm</Text>
                            <Text style={styles.description}>{instructions}</Text>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around'
    },

    background_image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },

    banner: {
        position: 'relative',
    },

    image: {
        height: 215,
        width: '100%',
    },

    icon_box: {
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#FFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },

    icon_left: {
        left: 0,
        borderTopRightRadius: 30,
    },

    icon_right: {
        right: 0,
        borderTopLeftRadius: 30,
    },

    text_icon: {
        fontSize: 16,
        fontWeight: '700',
        marginLeft: 5,
    },

    content: {
        padding: 25,
    },

    intro: {
        fontWeight: 'bold',
        textAlign: 'justify',
        fontSize: 14,
        color: color.textColor,
    },

    section: {
        flex: 1,
        alignItems: 'center'
    },

    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: color.titleColor,
        backgroundColor: '#FFF',
        marginTop: 20,
        paddingVertical: 10,
        textAlign: 'center',
        width: '50%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },

    description: {
        color: color.textColor,
        fontSize: 14,
        width: '100%',
        backgroundColor: '#FFF',
        paddingHorizontal: 23,
        paddingVertical: 10,
    },
});


