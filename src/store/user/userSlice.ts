import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '../index';

interface userState {
  id: number;
  name: string;
  isAdmin: boolean;
}

const initialState: userState = {
  id: 1,
  name: "User admin",
  isAdmin: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const userData = (state: RootState) => state.user;

export default userSlice.reducer;
