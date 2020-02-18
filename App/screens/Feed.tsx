import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SafeAreaView, Button, View, FlatList, ActivityIndicator, RefreshControl } from 'react-native'
import { getAllPosts } from '../API/PostsAPI'
import { PostData, UserData } from '../redux/App/actions'
import {theme} from '../utils/theme'
import EStyleSheet from 'react-native-extended-stylesheet'
import PostCell from '../components/PostCell'
import { NavigationStackProp } from 'react-navigation-stack'
import {setCurrentPost, setCurrentUser, resetPosts} from '../redux/App/actions'
import { colors } from '../utils/colors'


interface Props {
    feed_posts: PostData[],
    navigation: NavigationStackProp,
    setCurrentPost: (post: PostData) => void,
    setCurrentUser: (user: UserData) => void,
    resetPosts: () => void
}
interface State {
    isLoading: boolean,
    isReloading: boolean,
    hasMore: boolean
}

class Feed extends Component<Props, State> {

    constructor(props: Props){
        super(props)
        this.state = {isLoading: true, isReloading:false, hasMore: true}
    }

    componentDidMount(){
        this.setState({isLoading:true})
        this.fetchNextPosts()
    }


    fetchNextPosts = () => {
        getAllPosts({max:3, offset:this.props.feed_posts.length ,onSucces:(hasMore => {
            console.log('has more==> ',hasMore);
            this.setState({isLoading:false,isReloading:false, hasMore: hasMore})
        })})
    }


    renderPostCell = (e) =>{
        const {item,index} = e
        return(
            <PostCell post={item} onPress={() => this.onItemSelect(item)} onUserPress={() => this.onUserSelected(item.user_id[0])}/>
        )
    }

    onItemSelect = (post: PostData) => {
        this.props.setCurrentPost(post)
        this.props.navigation.navigate('PostReview')
    }

    onUserSelected = (user: UserData) => {
        this.props.setCurrentUser(user)
        this.props.navigation.navigate('UserAccount')
    }

    onEndReached = () => {
        if (!this.state.isLoading && this.state.hasMore){
            this.setState({isLoading:true})
            this.fetchNextPosts()
        }
    }

    reloadAllData = async() => {
        await this.props.resetPosts()
        this.setState({isReloading:true, hasMore:true})
        this.fetchNextPosts()
    }


    render() {
        
        return (
            <SafeAreaView style={theme.mainView}>
                <FlatList
                    data={this.props.feed_posts}
                    keyExtractor={post => post.id.toString()}
                    renderItem={this.renderPostCell}
                    contentContainerStyle={styles.flatListContainer}
                    onEndReached={this.onEndReached}
                    refreshControl={
                        <RefreshControl refreshing={this.state.isReloading} onRefresh={this.reloadAllData} tintColor={colors.color1} colors={[colors.color1]}/>
                    }
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={(
                        <View style={{height: 35}}>
                            {
                                this.state.isLoading ? 
                                <ActivityIndicator color={colors.color1}/>
                                : null
                            }
                        </View>
                    )}
                />
            </SafeAreaView>
        )
    }
}

const styles = EStyleSheet.create({
    flatListContainer:{
        paddingHorizontal: '25rem'
    }

})

const mapStateToProps = (state) => ({
    feed_posts : state.AppReducer.feed_posts
})

const mapDispatchToProps = {
    setCurrentPost, setCurrentUser, resetPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
