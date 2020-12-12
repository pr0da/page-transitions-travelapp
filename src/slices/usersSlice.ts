import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  name: string;
  img: string;
  location: string;
  bio: string;
  following: number;
  followers: number;
  photos: number;
  days: number;
  trips: string[];
}

type UsersState = User[];

const initialState: UsersState = [];

const counterSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addFollower(state, action: PayloadAction<number>) {
      const user = state[action.payload];
      if (user) {
        user.followers += 1;
      }
    },
    removeFollower(state, action: PayloadAction<number>) {
      const user = state[action.payload];
      if (user) {
        user.followers -= 1;
      }
    },
  },
});

export const { addFollower, removeFollower } = counterSlice.actions;
export default counterSlice.reducer;
