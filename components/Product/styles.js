import {Dimensions, StyleSheet} from "react-native";
import color from '../../constants/color';

const width = Dimensions.get('window').width - 20;
const styles = StyleSheet.create({
    container: {
        width: width - 20,
        borderRadius: 20,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },

    box_left: {
        width: '82%',
    },

    image: {
        height: 140,
        width: '100%',
    },

    info: {
        backgroundColor: '#FFF',
        paddingVertical: 12,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    title: {
        fontSize: 16,
        color: color.titleColor,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingHorizontal: 30,
    },

    icon: {
        backgroundColor: '#FFF',
        paddingVertical: 13,
        paddingHorizontal: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 10,
    },
});

export default styles;