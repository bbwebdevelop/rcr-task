import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

interface UserDetails {
  comments: Array<{ id: number; body: string }>;
  todos: Array<{ id: number; title: string; completed: boolean }>;
  posts: Array<{ id: number; title: string; body: string }>;
}

interface UsersState {
  list: User[];
  userDetails: UserDetails | null;
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  list: [],
  userDetails: null,
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.list = action.payload;
    },
    setUserDetails(state, action: PayloadAction<UserDetails>) {
      state.userDetails = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { setUsers, setUserDetails, setLoading, setError } =
  usersSlice.actions;

export default usersSlice.reducer;
