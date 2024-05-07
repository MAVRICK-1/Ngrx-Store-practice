import { createReducer, on } from "@ngrx/store"
import { User } from "../../../models/user.interface"
import { addUser, addUserFail, addUserSuccess, deleteUser, deleteUserFail, deleteUserSuccess, loadUser, loadUserFail, loadUserSuccess } from "./user.action"

export interface UserState{
    users:ReadonlyArray<User>
    loading:boolean,
    loaded:boolean,
    error:any
}
export const initialState:UserState = {
    users:[],
    loading:false,
    loaded:false,
    error:null
}

export const userReducer = createReducer(
    initialState,
    on(addUser, (state, { user }) => ({
        ...state,
        loading: false, // Assuming adding user doesn't trigger loading state
        loaded: true // Assuming adding user marks the state as loaded
    })),
    on(addUserSuccess, (state, { user }) => ({
        ...state,
        users: [...state.users, user],
        loading: false,
        loaded: true
    })),
    on(addUserFail, (state, { error }) => ({
        ...state,
        loading: false,
        loaded: false,
        error
    })),

    on(deleteUser, (state, { id }) => ({
        ...state,
        loading: true
    })),
    on(deleteUserSuccess, (state, { id }) => ({
        ...state,
        users: state.users.filter(user => user.id !== id),
        loading: false,
        loaded: true
    })),
    on(deleteUserFail, (state, { error }) => ({
        ...state,
        loading: false,
        loaded: false,
        error
    })),
    on(loadUser, state => ({
        ...state,
        loading:true
    })),
    on(loadUserSuccess, (state,{users}) =>({
            ...state,
            users,
            loading:false,
            loaded:true,
        })
    ),
    on(loadUserFail, (state,{error}) =>({
        ...state,
        loading:false,
        loaded:false,
        error
    }),
))