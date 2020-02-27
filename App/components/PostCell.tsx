import React, { Component } from 'react'
import { PostData } from '../redux/App/actions'
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { colors } from '../utils/colors'
import fonts from '../assets/fonts'
import Divider from './Divider'
import InfoView from './InfoView'
import images from '../assets/images'
import UserHeader from './UserHeader'

interface Props {
    post: PostData,
    onPress: () => void,
    onUserPress: () => void,
    testID?: string
}

export default function PostCell({ post, onPress, onUserPress, testID }: Props) {

    return (
        <TouchableOpacity testID={testID} activeOpacity={0.75} style={styles.cell} onPress={onPress}>
            {
                post && post.user_id ?
                    <UserHeader user={post.user_id[0]} date={post.createdAt} onPress={onUserPress} />
                    :
                    null
            }

            <View style={styles.body}>
                {
                    post && post.description ?
                        <Text ellipsizeMode='tail' numberOfLines={3} style={styles.textBody}>{post.description}</Text>
                        : null
                }

                {
                    post && post.image ?
                        <Image style={styles.mainImage} source={{ uri: post.image }} />
                        : null
                }

                {
                    post && post.likes && post.comments ?
                        <View style={styles.infoView}>
                            <InfoView icon={images.heart} text={post.likes.toString()} style={styles.info} />
                            <InfoView icon={images.message_circle} text={post.comments.toString()} style={styles.info} />
                        </View>
                        : null
                }
            </View>
            <Divider style={styles.divider} />
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    cell: {
        flex: 1,
        height: 360,
        marginVertical: 15,

    },
    body: {
        flex: 1,
        marginLeft: 53,

    },
    divider: {
        width: '100%',
        marginTop: 30
    },
    infoView: {
        height: 28,
        marginTop: 14,
        flexDirection: 'row'
    },
    mainImage: {
        flex: 2,
        borderRadius: 5,
        marginTop: 20,
        resizeMode: 'cover',
        width: undefined,
        height: undefined
    },
    textBody: {
        flex: 1,
        color: '#000000',
        fontFamily: fonts.sf_pro_display_light,
        fontSize: 16,
    },
    info: {
        height: '100%',
        marginRight: 15
    },
})
