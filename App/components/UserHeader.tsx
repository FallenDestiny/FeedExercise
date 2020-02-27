import React, { ReactElement } from 'react'
import { View, Image, Text, ViewStyle, TouchableOpacity, StyleSheet } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { colors } from '../utils/colors'
import fonts from '../assets/fonts'
import { UserData } from '../redux/App/actions'
var moment = require('moment');

interface Props {
    user: UserData,
    date?: Date,
    style?: ViewStyle,
    onPress: () => void,
    testID? : string
}

export default function UserHeader({ user, date, style, onPress, testID }: Props): ReactElement {
    return (
        <TouchableOpacity testID={testID} activeOpacity={0.75} style={[styles.header, style]} onPress={onPress}>
            {
                user && user.avatar ?
                    <Image style={styles.userAvatar} source={{ uri: user.avatar }} /> :
                    null
            }

            <View>
                {
                    user && user.name ?
                        <Text style={styles.userTitle}>{user.name}</Text>
                        : null
                }
                {
                    date ?
                        <Text style={[styles.userTitle, styles.createdStyle]}>{moment(date).fromNow()}</Text>
                        : null
                }

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        maxHeight: 55,
        flexDirection: 'row',
        alignItems: 'center',
    },
    userAvatar: {
        aspectRatio: 1,
        height: '100%',
        borderRadius: 27.5,
        resizeMode: 'contain',
    },
    userTitle: {
        color: colors.color1,
        fontFamily: fonts.sf_pro_display_bold,
        fontSize: 13,
        marginLeft: 15
    },
    createdStyle: {
        color: colors.color2
    },
})