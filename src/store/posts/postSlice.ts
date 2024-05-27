import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../index";
import axios from "axios";
import { api } from "../../config";

export type postItemType = {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  author: string;
  date?: string;
};

interface postState {
  value: postItemType[];
  oneValue:postItemType ;
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: postState = {
  value: [],
  oneValue:{
    id: "",
    title: "",
    description: "",
    author: ""
  },
  status: "idle",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts(state, response) {
      state.value = response.payload;
      state.status = "succeeded";
    },
    getOnePost(state, response) {
      state.oneValue = response.payload
    },
    incrementPost(state, response) {
      state.value = [...state.value, response.payload];
    },
    removePost(state, response) {
      state.value = state.value.filter(
        (postItem) => postItem.id !== response.payload.id
      );
    },
    createPostsFailed(state) {
      state.status = "failed";
    },
  },
});

export const { getPosts, createPostsFailed, incrementPost, removePost,getOnePost } =
  postsSlice.actions;

export const postsData = (state: RootState) => state.posts.value;

export const onePostData = (state: RootState) => state.posts.oneValue;


export default postsSlice.reducer;

export const createPostAsync =
  (data: { textboxValue: string; textareaValue: string }): AppThunk =>
  async (dispatch) => {
    try {
      const response = await axios(api.posts, {
        method: "POST",
        data: {
          title: data.textboxValue,
          description: data.textareaValue,
        },
      });
      dispatch(incrementPost(response.data));
    } catch (error) {
      console.log({ error });
    }
  };

export const deletePostAsync =
  (data: { id: string }): AppThunk =>
  async (dispatch) => {
    try {
      const response = await axios(api.posts + `/${data.id}`, {
        method: "DELETE",
      });
      dispatch(removePost(response.data));
    } catch (error) {
      console.log({ error });
    }
  };

  export const getOnePostAsync =
  (data: { id: string }): AppThunk =>
  async (dispatch) => {
    try {
      const response = await axios(api.posts + `/${data.id}`, {
        method: "GET",
      });
      dispatch(getOnePost(response.data));
    } catch (error) {
      console.log({ error });
    }
  };
