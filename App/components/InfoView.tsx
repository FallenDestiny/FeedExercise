import React, { ReactElement } from 'react'
import { ImageSourcePropType, View, StyleSheet, Image, ViewStyle, Text, TextStyle } from 'react-native'
import fonts from '../assets/fonts'

interface Props {
    icon: ImageSourcePropType,
    text: string,
    textStyle?: TextStyle,
    style: ViewStyle
}

export default function InfoView({ icon, text, style, textStyle }: Props): ReactElement {
    return (
        <View style={[styles.holder, style]}>
            <Image style={styles.image} source={icon} />
            <Text style={[styles.txt, textStyle]}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    holder: {
        flexDirection: 'row',
        alignItems:'center'
    },
    image: {
        height: '100%',
        aspectRatio: 1,
        resizeMode: 'contain',
        width: undefined
    },
    txt: {
        fontFamily: fonts.sf_pro_display_regular,
        fontSize: 15,
        color: '#999999',
        marginLeft:5
    }
})