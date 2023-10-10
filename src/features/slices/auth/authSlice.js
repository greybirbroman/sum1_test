import { createSlice } from '@reduxjs/toolkit';
import { AUTH, CURRENT_USER, IS_LOGGED_IN } from '../../constants';

const initialState = {
  user: JSON.parse(localStorage.getItem(CURRENT_USER)) || null,
  isLoggedIn: JSON.parse(localStorage.getItem(IS_LOGGED_IN)) || false,
  successMessage: null,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: AUTH,
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.successMessage = null;
      state.errorMessage = null;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    setSuccessMessage: (state, action) => {
      state.successMessage = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.successMessage = null;
      state.errorMessage = null;
    },
  },
});

export const { setUser, setErrorMessage, setSuccessMessage, logoutUser } = authSlice.actions;


export default authSlice.reducer;
