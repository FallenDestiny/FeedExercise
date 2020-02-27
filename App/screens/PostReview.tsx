import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SafeAreaView, Image, ScrollView, View, Text } from 'react-native'
import { theme } from '../utils/theme'
import { PostData, UserData } from '../redux/App/actions'
import EStyleSheet from 'react-native-extended-stylesheet'
import UserHeader from '../components/UserHeader'
import InfoView from '../components/InfoView'
import images from '../assets/images'
import fonts from '../assets/fonts'
import {setCurrentUser} from '../redux/App/actions'
import { NavigationStackProp } from 'react-navigation-stack'

interface Props {
    current_post: PostData,
    setCurrentUser: (user:UserData) => void,
    navigation: NavigationStackProp
}


class PostReview extends Component<Props> {


    openUser = (user: UserData) => {
        this.props.setCurrentUser(user)
        this.props.navigation.navigate('UserAccount')
    }

    render() {
        console.log(this.props.current_post);

        const post = this.props.current_post
        return (
            <SafeAreaView style={theme.mainView}>
                <ScrollView>
                    <Image testID={'postImage'} style={styles.imageHeader} source={{ uri: post.image }} />
                    <UserHeader testID={'userHeader'} user={post.user_id[0]} date={post.createdAt} style={styles.headerStyle} onPress={() => this.openUser(post.user_id[0])}/>
                    <View testID={'postInfo'} style={styles.infoView}>
                        <InfoView icon={images.heart} text={post.likes.toString()} style={styles.info}/>
                        <InfoView icon={images.message_circle} text={post.comments.toString()} style={styles.info}/>
                    </View>
                    <Text testID={'postBody'} style={styles.textBody}>{post.description}</Text>
                </ScrollView>
                    
                

            </SafeAreaView>
        )
    }
}

const styles = EStyleSheet.create({
    imageHeader: {
        resizeMode: 'cover',
        width: '100%',
        height: '375rem'
    },
    headerStyle:{
        marginHorizontal:'15rem',
        marginTop:'5rem',
    },
    info: {
        height: '100%',
        marginRight: '15rem'
    },
    infoView:{
        height:'28rem',
        marginTop: '5rem',
        marginHorizontal: '15rem',
        flexDirection:'row'
    },
    textBody:{
        flex:1,
        color:'#000000',
        fontFamily: fonts.sf_pro_display_light,
        fontSize: '16rem',
        marginHorizontal: '35rem',
        marginTop: '25rem'
    },
})

const mapStateToProps = (state) => ({
    current_post: state.AppReducer.current_post
})

const mapDispatchToProps = {
    setCurrentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(PostReview)
