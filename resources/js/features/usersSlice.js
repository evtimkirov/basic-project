
import {createSlice} from "@reduxjs/toolkit";
import {fetchUsersData} from "../api/getUsersAPI.js";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {
        addUser: (state, action) => {
            state.items.push(action.payload);  // добавя нов потребител в списъка
        },
        removeUser: (state, action) => {
            const userId = action.payload;
            state.items = state.items.filter(user => user.id !== userId);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchUsersData.pending,
                (state) => {
                    state.loading = true;
                    state.error = null;
                })
            .addCase(
                fetchUsersData.fulfilled,
                (state, action) => {
                    state.loading = false;
                    state.items = action.payload;
                })
            .addCase(
                fetchUsersData.rejected,
                (state, action) => {
                    state.loading = false;
                    state.error = action.error.message;
                });
    },
});

export const { addUser, removeUser } = usersSlice.actions;

export default usersSlice.reducer;
