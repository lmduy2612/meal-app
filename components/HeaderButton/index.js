import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from "./styles";

import Colors from '../../constants/color';
import Distance from '../../constants/distance';

export default function HeaderButtonComponent(props) {

    let margin = {'marginLeft': Distance.sizeMarginHorizontal};
    if(props.position === 'right') {
        margin = {'marginRight': Distance.sizeMarginHorizontal};
    }

    return (
        <View style={{...styles.container, ...margin }}>
            <Ionicons
                name={props.name} size={32} color={Colors.secondColor}
                onPress={props.onPress}
            />
        </View>
    );
}

