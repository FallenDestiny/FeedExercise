import React, { ReactElement } from 'react'
import { View, ViewStyle, StyleSheet } from 'react-native'

interface Props {
    style?: ViewStyle
}

export default function Divider({style}: Props): ReactElement {
    return (
        <View style={[styles.divider,style]}/>
    )
}

const styles = StyleSheet.create({
    divider:{
        width:'80%',
        alignSelf:'center',
        backgroundColor:'#E4E4E499',
        height:1
    }
})
