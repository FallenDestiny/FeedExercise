import { StyleSheet} from 'react-native';
import { colors } from './colors';
export const theme = StyleSheet.create({
    fullImg:{
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
        top:0,
        width:undefined,
        height:undefined
    },  
    mainView: {
        flex: 1,
        backgroundColor: colors.color6,
    },
    activity: {
        alignContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
});