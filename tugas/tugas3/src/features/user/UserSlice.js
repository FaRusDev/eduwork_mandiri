import { createAsyncThunk,createSlice, current } from "@reduxjs/toolkit";
import AxiosHelper from "../AxiosHelper";

export const getAllUsers = createAsyncThunk(
    'user/getAllUsers',
    async () => {
        const resp = await AxiosHelper.get('/users')
        return resp.data
    }
)

// export const searchUser = createAsyncThunk(
//     'user/searchUser',
//     async (name) => {
//         const resp = await AxiosHelper.get(`/users/search?q=${name}`)
//         return resp.data
//     }
// )

export const getUserById = createAsyncThunk(
    'user/getUserById',
    async (id,{dispatch}) => {
        const resp = await AxiosHelper.get(`/users/${id}`)
        return resp.data
    }
)

export const addUser = createAsyncThunk(
    'user/addUser',
    async (data, {dispatch}) => {
        const resp = await AxiosHelper.post('/users/',data)
        const finalPayload = resp.data
        //do dispatch here
        return finalPayload


    }
)


export const updateUser = createAsyncThunk(
    'user/updateUser',
    async(id) => {
        console.log('dari update', id,)
        const resp = await AxiosHelper.put(`/users/${id}`)
        const finalPayload = resp.data
        
        //do dispatch here
        return finalPayload
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
    singleUser:{},
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
    //         state.users = action.payload
    //     },
    //     [getUserById.fulfilled]:(state,action)=>{
    //         state.singleUser = action.payload
    //         console.log(state.singleUser)
    //         console.log(state.users)
    //     }
        
    // }

    extraReducers:(builder)=>{
        builder.addCase(getAllUsers.pending, (state)=>{
            state.loading = true
        }).addCase(getAllUsers.fulfilled, (state,action)=>{
            state.loading = false
            state.users = action.payload
            console.log(state.users)
        }).addCase(addUser.pending, (state,action) => {
            state.loading = true
        }).addCase(addUser.fulfilled, (state,action)=>{
            state.users.push(action.payload)
            state.loading = false
        }).addCase(getUserById.pending, (state,action)=> {
            state.loading=true
        }).addCase(getUserById.fulfilled, (state,action)=>{
            state.loading = false
            state.singleUser = action.payload
            console.log(action.payload)
            
        }).addCase(updateUser.pending, (state,action)=>{
            state.loading = true
        }).addCase(updateUser.fulfilled, (state,action)=>{
            // const index = state.users.findIndex(u => u.id === action.payload.id)
            
            // console.log('ini states',state.users)
            // console.log('ini payload', action.payload)
            // console.log('ini index', index)

            // console.log('ini dari users indec', state.users[index])
            // state.users[index] = action.payload
            state.loading = false
            console.log('re', action.payload.id)
            const index = state.users.findIndex(u => {
                console.log(u)
                return u.users.id === action.payload.id
            })
            console.log(index)
            state.singleUser = action.payload
        
        })
    }
})

const {reducer} = UserSlice
export default reducer
