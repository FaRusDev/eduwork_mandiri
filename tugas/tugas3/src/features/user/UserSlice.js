import { createAsyncThunk,createSlice, current } from "@reduxjs/toolkit";
import AxiosHelper from "../AxiosHelper";

export const getAllUsers = createAsyncThunk(
    'user/getAllUsers',
    async () => {
        const resp = await AxiosHelper.get('/users')
        return resp.data
    }
)

export const searchUser = createAsyncThunk(
    'user/searchUser',
    async (name) => {
        const resp = await AxiosHelper.get(`/users/search?q=${name}`)
        return resp.data
    }
)

export const getUserById = createAsyncThunk(
    'user/getUserById',
    async (id,{dispatch}) => {
        const resp = await AxiosHelper.get(`users/${id}`)
        const finalPayload = resp.data

        //dispatch someaAction
        return finalPayload
    }

)

export const addUser = createAsyncThunk(
    'user/addUser',
    async (data, {dispatch}) => {
        const resp = await AxiosHelper.post('/users/add',data)
        const finalPayload = resp.data
        
        //do dispatch here
        return finalPayload
    }
)


export const updateUser = createAsyncThunk(
    'user/updateUser',
    async(id, {dispatch}) => {
        const resp = await AxiosHelper.put(`/users/${id}`)
        const finalpayload = resp.data
        
        //do dispatch here
        return finalpayload
    }
)


export const deleteUser = createAsyncThunk(
    'user/deleteUser',
    async(id, {dispatch}) => {
        const resp = await AxiosHelper.delete(`/users/${id}`)
        const finalPayload = resp.data
    
        //do dispatch her
        return finalPayload
    }
)


const initialState = {
    loading : false,
    users : [],
}

export const UserSlice = createSlice({
    name : 'users',
    initialState,

    //klo pake ini ada warning klo deprecrated
    // extraReducers:{
    //     [getAllUsers.pending]:(state) => {
    //         state.loading = true
    //     },
    //     [getAllUsers.fulfilled]: (state,action) => {
    //         state.loading = false
    //         state.users = action.payload.users
    //     },
        
    // }

    extraReducers:(builder)=>{
        builder.addCase(getAllUsers.pending, (state)=>{
            state.loading = true
        }).addCase(getAllUsers.fulfilled, (state,action)=>{
            state.loading = false
            state.users = action.payload.users
        }).addCase(addUser.pending, (state,action) => {
            state.loading = true
        }).addCase(addUser.fulfilled, (state,action)=>{
            state.users.push(action.payload.users)
            state.loading = false
        })
    }
})

const {reducer} = UserSlice
export default reducer
