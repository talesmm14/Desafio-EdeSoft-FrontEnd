import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../models/user";
import { UserService } from "../../services/UserService";
import { RootState } from "../store";

export interface UserState {
  data: User[];
  loading: boolean;
}

const initialState: UserState = {
  data: [],
  loading: false
};

export const fetchUsersAsync = createAsyncThunk(
  'user/fetchUsers',
  async () => {
    const data = await UserService.getAllUsers();
    return data;
  }
);

export const addUserAsync = createAsyncThunk(
  'user/addUsers',
  async (user: User) => {
    const response = await UserService.addUser(user);
    return response;
  }
);

export const updateUserAsync = createAsyncThunk(
  'user/updateUsers',
  async (user: User) => {
    const response = await UserService.updateUser(user.id, user);
    return response;
  }
);

export const deleteUserAsync = createAsyncThunk(
  'user/deleteUsers',
  async (userId: number) => {
    const response = await UserService.deleteUser(userId);
    return response;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    //FETCH
      .addCase(fetchUsersAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchUsersAsync.rejected, (state) => {
        alert('Deu erro bino');
        state.loading = false;
      })
      //SALVAR
      .addCase(addUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(addUserAsync.fulfilled, (state, action) => {
        state.data = [ ...state.data, action.payload];
        state.loading = false;
      })
      .addCase(addUserAsync.rejected, (state) => {
        alert('Deu erro ao adicionar bino');
        state.loading = false;
      })
      //UPDATE
      .addCase(updateUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.data = [ ...state.data.map(p => {
          if(p.id == action.payload.id) return action.payload
          return p;
        }) ];
        state.loading = false;
      })
      .addCase(updateUserAsync.rejected, (state) => {
        alert('Deu erro ao atualizar bino');
        state.loading = false;
      })
      //DELETE
      .addCase(deleteUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUserAsync.fulfilled, (state, action) => {
        state.data = [ ...state.data.filter(p => {
          return p.id !== action.payload.id
        }) ];
        state.loading = false;
      })
      .addCase(deleteUserAsync.rejected, (state) => {
        alert('Deu erro ao apagar bino');
        state.loading = false;
      });
  },
});

export const selectUsers = (state: RootState) => state.user.data;
export const selectLoading = (state: RootState) => state.user.loading;
export const getUserById = (state: RootState, id: string | undefined) => state.user.data.find(d=>d.id.toString() == id);
export default userSlice.reducer;