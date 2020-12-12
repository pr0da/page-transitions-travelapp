import { combineReducers, createSelector } from '@reduxjs/toolkit';
import usersSlice from './usersSlice';
import indexedUserSlice from './indexedUserSlice';

const rootReducer = combineReducers({
  users: usersSlice,
  indexedUser: indexedUserSlice,
});

export { rootReducer };

export type RootState = ReturnType<typeof rootReducer>;

export const getIndexedUser = createSelector(
  (state: RootState) => state.users,
  (state: RootState) => state.indexedUser,
  (users, indexedUser) => users[indexedUser]
);

export const getIndexedUserFirstName = createSelector(
  getIndexedUser,
  (user) => {
    var lastIndex = user.name.lastIndexOf(' ');
    return user.name.substring(0, lastIndex);
  }
);
