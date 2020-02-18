import {  ADD_POSTS, SET_CURRENT_USER, SET_CURRENT_POST, RESET_ALL_POSTS } from "./types";

export type PostData = {
  id: number,
  createdAt: Date,
  title: string,
  image: string,
  description: string,
  user_id: UserData,
  likes: number,
  comments: number
}

export type UserData = {
  id: number,
  last_time_active: Date,
  name: string,
  avatar: string,
  followings: number,
  followers: number,
  posts: PostData[],
  description: string,
}

export const addPosts = (posts: PostData[]) => (
    {
      type: ADD_POSTS,
      posts
    }
  );

  export const resetPosts = () => (
    {
      type: RESET_ALL_POSTS,
    }
  );


export const setCurrentUser = (user: UserData) => (
  {
    type: SET_CURRENT_USER,
    user
  }
);


export const setCurrentPost = (post: PostData) => (
  {
    type: SET_CURRENT_POST,
    post
  }
);