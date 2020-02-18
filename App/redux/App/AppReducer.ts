import { PostData, UserData } from "./actions";
import { ADD_POSTS, SET_CURRENT_POST, SET_CURRENT_USER, RESET_ALL_POSTS } from "./types";


const initialState = {
    feed_posts: Array<PostData>(),
    current_user: <UserData>{},
    current_post: <PostData>{}
};


const AppReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case ADD_POSTS:
            let posts = <PostData[]>action.posts
            return { ...state, feed_posts: [...state.feed_posts, ...posts] }
        case RESET_ALL_POSTS:
            return { ...state, feed_posts: [] }
        case SET_CURRENT_USER:
            let user = <UserData>action.user
            return { ...state, current_user: user }
        case SET_CURRENT_POST:
            let post = <PostData>action.post
            return { ...state, current_post: post }
        default:
            return state;
    }
};

export default AppReducer;