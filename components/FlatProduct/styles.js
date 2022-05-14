import {StyleSheet} from "react-native";
import color from '../../constants/color';

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.backgroundColor,
        flex: 1,
        padding: 10,
        justifyContent: 'space-around',
    },
    text_empty: {
        fontSize: 16,
        color: color.textColor,
    }
});

export default styles;