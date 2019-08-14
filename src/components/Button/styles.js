import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';

export const fabButtonStyles = StyleSheet.create({
    container: {
        width: 56,
        height: 56,

        backgroundColor: colors.accent,
        ...Platform.select({
            ios: {
                shadowColor: 'black',

            },
            android: {
                borderRadius: 28,
                overflow: 'hidden',
                elevation: 10,
            }
        }),

    },

    toucable: {
        flex:1,
        alignSelf: 'stretch',
    },
    touchableContent: {
        flex: 1,
        alignSelf: 'stretch',

        justifyContent: 'center',
        alignItems: 'center',
    },


});