import {Dimensions, StyleSheet} from "react-native";
import color from '../../constants/color';

const width = Dimensions.get('window').width - 20;
const styles = StyleSheet.create({
    container: {
        width: width - 20,
        borderRadius: 20,
        marginBottom: 20,
        flexDirection: 'column',
    },

    image: {
        height: 145,
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
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

    description: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },

    box_icon: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
    },

    text_icon: {
        fontSize: 16,
        fontWeight: '700',
        marginLeft: 5,
    },

});

export default styles;