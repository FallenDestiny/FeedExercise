import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SafeAreaView, Image, Text, View, ScrollView, FlatList } from 'react-native'
import { theme } from '../utils/theme'
import EStyleSheet from 'react-native-extended-stylesheet'
import { UserData, PostData } from '../redux/App/actions'
import fonts from '../assets/fonts'
import { colors } from '../utils/colors'
import Divider from '../components/Divider'
import UserInfoView from '../components/UserInfoView'
import UserPost from '../components/UserPost'

interface Props {
    current_user: UserData
}
interface State {

}

class UserAccount extends Component<Props, State> {
    state = {}


    renderPost = (e) => {
        const { item } = e
        return (
            <UserPost post={item} />
        )
    }

    render() {
        const { current_user } = this.props
        console.log(current_user);
        
        return (
            <SafeAreaView style={theme.mainView}>
                <ScrollView>
                    <Image style={styles.avatarImg} source={{ uri: current_user.avatar }} />
                    <Text style={styles.username}>{current_user.name}</Text>
                    <Text style={styles.description}>{current_user.description}</Text>
                    <Divider />
                    <View style={styles.userInfoView}>
                        <UserInfoView title={'Followers'} value={current_user.followers.toString()} style={styles.userInfo} />
                        <UserInfoView title={'Followings'} value={current_user.followings.toString()} style={styles.userInfo} />
                    </View>
                    <Divider />
                    <Text style={styles.posts}>Posts</Text>
                    <FlatList
                        data={current_user.posts}
                        keyExtractor={post => post.id.toString()}
                        renderItem={this.renderPost}
                        contentContainerStyle={styles.listContainer}
                    />
                </ScrollView>

            </SafeAreaView>
        )
    }
}

const styles = EStyleSheet.create({
    avatarImg: {
        alignSelf: 'center',
        width: '60rem',
        height: '60rem',
        resizeMode: 'cover',
        borderRadius: '30rem',
        marginTop: '13rem'
    },
    username: {
        fontFamily: fonts.sf_pro_display_semibold,
        fontSize: '15rem',
        color: colors.color1,
        alignSelf: 'center',
        maxWidth: '85%',
        marginTop: ' 25rem'
    },
    description: {
        fontFamily: fonts.sf_pro_display_light,
        fontSize: '13rem',
        color: colors.color2,
        alignSelf: 'center',
        maxWidth: '75%',
        marginTop: ' 4rem',
        marginBottom: '20rem'
    },
    userInfoView: {
        height: '46rem',
        marginVertical: '10rem',
        marginHorizontal: '52rem',
        flexDirection: 'row'
    },
    userInfo: {
        flex: 1
    },
    posts: {
        fontFamily: fonts.sf_pro_display_bold,
        fontSize: '17rem',
        color: colors.color1,
        marginLeft: '28rem',
        marginTop: '41rem'
    },
    listContainer: {
        paddingHorizontal: '28rem',
        paddingVertical: '15rem'
    }
})

const mapStateToProps = (state) => ({
    current_user: state.AppReducer.current_user
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(UserAccount)
