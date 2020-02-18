import React, { ReactElement } from 'react'
import { View, Text, ViewStyle } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import fonts from '../assets/fonts'
import { colors } from '../utils/colors'

interface Props {
    title:string,
    value:string,
    style?:ViewStyle
}

export default function UserInfoView({title,value,style}: Props): ReactElement {
    return (
        <View style={[styles.holder,style]}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{value}</Text>
        </View>
    )
}

const styles = EStyleSheet.create({
    holder:{
        justifyContent:'space-between'
    },
    title:{
        fontFamily: fonts.sf_pro_display_bold,
        fontSize: '17rem',
        color: colors.color1,
        alignSelf: 'center',
    },
    description:{
        fontFamily: fonts.sf_pro_display_light,
        fontSize: '15rem',
        color: colors.color2,
        alignSelf: 'center',
    }
})