import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: number = 0;

const indexedUserSlice = createSlice({
  name: 'indexedUser',
  initialState,
  reducers: {
    changeUser(state, action: PayloadAction<number>) {
      return action.payload;
    },
  },
});

export const { changeUser } = indexedUserSlice.actions;

export default indexedUserSlice.reducer;
