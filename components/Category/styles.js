import {Dimensions, StyleSheet} from "react-native";
import color from "../../constants/color";

const width = Dimensions.get('window').width - 20;
const styles = StyleSheet.create({
    category_container: {
        width: width / 2 - 10,
        padding: 5,
        marginBottom: 10,
        flex: 1,
        flexDirection: 'column',
    },

    category_image: {
        height: 120,
        width: '100%',
        marginBottom: 10,
        borderRadius: 10,
    },

    category_title: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: color.titleColor,
    }
});

export default styles

