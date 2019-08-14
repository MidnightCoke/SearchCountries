import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';

export const searchInputStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        width: 300,

        borderWidth: 1,
        borderColor: colors.gray,
        borderRadius: 4,

        overflow: 'hidden',
    },
    input: {
        flex:1,
        paddingHorizontal:12,
        paddingVertical: 5,
        
    },
    button: {
        flex: 1,
        width: 40,

        justifyContent:'center',
        alignItems: 'center',

        backgroundColor:colors.accent,


    }
});