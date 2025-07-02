import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

const GET_USERS_API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchUsersData = createAsyncThunk(
    'users/fetchData',
    async () => {
        const users = await axios.get(GET_USERS_API_URL);

        return users.data;
    });
