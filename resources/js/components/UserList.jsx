// src/components/UserList.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchUsersData} from "../api/getUsersAPI.js";
import {addUser, removeUser} from "../features/usersSlice.js";

const UserList = () => {
    const dispatch = useDispatch(),
        {items, error, loading} = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsersData());
    }, []);

    const handleAddUser = () => {
        dispatch(addUser({ id: 123, title: "New name" }));
    };

    const handleRemoveUser = (id) => {
        dispatch(removeUser(id));
    };

    return (
        <React.Fragment>
            <h1>React & Redux Example</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}

            <button onClick={handleAddUser}>New user</button>

            <ul>
                {
                    items.map((item) => (
                        <li key={item.id}>
                            {item.title} | <button onClick={() => handleRemoveUser(item.id)}>Remove</button>
                        </li>
                    ))
                }
            </ul>
        </React.Fragment>
    );
};

export default UserList;
