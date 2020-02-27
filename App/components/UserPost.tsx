import React, { ReactElement } from 'react'
import { TouchableOpacity, View, Image, Text } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Divider from './Divider'
import { PostData } from '../redux/App/actions'
import fonts from '../assets/fonts'
import { colors } from '../utils/colors'
var moment = require('moment');

interface Props {
    post: PostData,
}

export default function UserPost({ post }: Props): ReactElement {
    return (
        <View style={styles.holder}>
            <View style={styles.mainContainer}>
                {
                    post && post.image ?
                        <Image style={styles.image} source={{ uri: post.image }} /> : null
                }

                {
                    post && post.title && post.createdAt ?
                        <View style={styles.detailsInfo}>
                            <Text style={styles.title}>{post.title}</Text>
                            <Text style={styles.created}>{moment(post.createdAt).fromNow()}</Text>
                        </View> : null
                }

            </View>
            <Divider style={styles.divider} />
        </View>
    )
}

const styles = EStyleSheet.create({
    holder: {
        flex: 1,
        width: '100%',
        height: '100rem',
        marginTop: '30rem',
    },
    mainContainer: {
        flex: 1,
        marginBottom: '16rem',
        flexDirection: 'row'
    },
    divider: {
        width: '100%'
    },
    image: {
        aspectRatio: 1,
        width: undefined,
        height: '100%',
        resizeMode: 'cover',
        borderRadius: '4rem'
    },
    detailsInfo: {
        flex: 1,
        marginLeft: '15rem',
        marginRight: '8rem'
    },
    title: {
        fontFamily: fonts.sf_pro_display_semibold,
        fontSize: '15rem',
        color: colors.color1,
    },
    created: {
        fontFamily: fonts.sf_pro_display_medium,
        fontSize: '12rem',
        color: colors.color2,
    }
})
