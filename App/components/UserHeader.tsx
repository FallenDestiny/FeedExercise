import React, { ReactElement } from 'react'
import { View, Image, Text, ViewStyle, TouchableOpacity } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { colors } from '../utils/colors'
import fonts from '../assets/fonts'
import { UserData } from '../redux/App/actions'
var moment = require('moment');

interface Props {
    user: UserData,
    date?: Date,
    style?: ViewStyle,
    onPress: () => void
}

export default function UserHeader({ user, date, style, onPress }: Props): ReactElement {
    return (
        <TouchableOpacity activeOpacity={0.75} style={[styles.header,style]} onPress={onPress}>
            <Image style={styles.userAvatar} source={{ uri: user.avatar }} />
            <View>
                <Text style={styles.userTitle}>{user.name}</Text>
                {
                    date ?
                        <Text style={[styles.userTitle, styles.createdStyle]}>{moment(date).fromNow()}</Text>
                        : null
                }

            </View>
        </TouchableOpacity>
    )
}

const styles = EStyleSheet.create({
    header: {
        flex: 1,
        maxHeight: '55rem',
        flexDirection: 'row',
        alignItems: 'center',
    },
    userAvatar: {
        aspectRatio: 1,
        height: '100%',
        borderRadius: '27.5rem',
        resizeMode: 'contain',
    },
    userTitle: {
        color: colors.color1,
        fontFamily: fonts.sf_pro_display_bold,
        fontSize: '13rem',
        marginLeft: '15rem'
    },
    createdStyle: {
        color: colors.color2
    },
})