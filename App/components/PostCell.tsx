import React, { ReactElement } from 'react'
import { PostData } from '../redux/App/actions'
import { View, Image, Text, TouchableOpacity } from 'react-native'
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
    onUserPress: () => void
}

export default function PostCell({ post, onPress, onUserPress }: Props): ReactElement {
    const user = post.user_id[0]
    return (
        <TouchableOpacity activeOpacity={0.75} style={styles.cell} onPress={onPress}>
            <UserHeader user={user} date={post.createdAt} onPress={onUserPress}/>
            <View style={styles.body}>
                <Text ellipsizeMode='tail' numberOfLines={3} style={styles.textBody}>{post.description}</Text>
                <Image style={styles.mainImage} source={{uri:post.image}}/>
                <View style={styles.infoView}>
                    <InfoView icon={images.heart} text={post.likes.toString()} style={styles.info}/>
                    <InfoView icon={images.message_circle} text={post.comments.toString()} style={styles.info}/>
                </View>
            </View>
            <Divider style={styles.divider}/>
        </TouchableOpacity>
    )
}

const styles = EStyleSheet.create({
    cell: {
        flex: 1,
        height: '360rem',
        marginVertical: '15rem',

    },
    body:{
        flex:1,
        marginLeft:'53rem',
        
    },
    divider:{
        width:'100%',
        marginTop: '30rem'
    },
    infoView:{
        height:'28rem',
        marginTop: '14rem',
        flexDirection:'row'
    },
    mainImage:{
        flex:2,
        borderRadius:'5rem',
        marginTop: '20rem',
        resizeMode: 'cover',
        width:undefined,
        height:undefined
    },
    textBody:{
        flex:1,
        color:'#000000',
        fontFamily: fonts.sf_pro_display_light,
        fontSize: '16rem',
    },
    info: {
        height: '100%',
        marginRight: '15rem'
    },
})
