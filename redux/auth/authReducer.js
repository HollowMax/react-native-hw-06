import { createSlice } from '@reduxjs/toolkit';

const state = {
  userId: null,
  login: null,
  email: null,
  stateChange: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: state,
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      login: payload.login,
      userId: payload.userId,
      email: payload.email,
    }),
    authStateChange: (state, { payload }) => ({
      ...state,
      stateChange: payload.stateChange,
    }),
  },
  authSignOut: () => state,
});
