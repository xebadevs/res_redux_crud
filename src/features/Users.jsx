import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from '../FakeData';

export const userSlice = createSlice({
    name: 'users',
    initialState: {value: UsersData},
    reducers: {
        addUser: (state, action) => {
            state.value.push(action.payload)
        },
        deleteUser: (state, action) => {
            // * Payload is an object that contains all the data that we send from the component
            // * We create a new state.value that contains all the info except those who matches with the user.id
            state.value = state.value.filter((user) => user.id !== action.payload.id)
        },
        updateUsername: (state, action) => {
            state.value.map((user) => {
                if(user.id === action.payload.id){
                    user.username = action.payload.username
                }
            })
        }
    }
})

// * Se exportan para poder ser utilizados en otros componentes
export const {addUser, deleteUser, updateUsername} = userSlice.actions;
export default userSlice.reducer;