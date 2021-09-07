
import { createReducer, on } from "@ngrx/store";
import { addPost, deletePost, updatePost } from "./posts.actions";
import { PostInitialState } from "./posts.state";

const _postsReducer=createReducer(
  PostInitialState,
  on(addPost,(state,action)=>{
    let post={...action.post};
    post.id=(state.posts.length+1).toString();
    return {
      ...state,
      posts:[...state.posts,post]
    }
  }),
  on(updatePost,(state,action)=>{
    const updatedPosts=state.posts.map((post)=>{
      return action.post.id===post.id ? action.post : post;
    });

    return{
      ...state,
      posts:updatedPosts
    }
  }),
  on(deletePost,(state,action)=>{
    const PostsUpdated=state.posts.filter((post)=>{
      return post.id !== action.id;
    });

    return{
      ...state,
      posts:PostsUpdated
    }
  })
);
export function postsReducer(state,action){
  return _postsReducer(state,action);
}