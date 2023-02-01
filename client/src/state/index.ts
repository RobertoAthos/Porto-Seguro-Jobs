import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
    email: string;
    password: string;
  }
  
  interface AuthState {
    user: User | null;
    token: string | null;
  }
  
  const initialState: AuthState = {
    user: null,
    token: null,
  };
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        setRegister: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
          },
          setLogin: (state, action: PayloadAction<{ user: User; token: string }>) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
          },
          setLogout: (state) => {
            state.user = null;
            state.token = null;
          },
    }
})

export const {setLogin, setLogout, setRegister} = authSlice.actions
export default authSlice.reducer