import {createSlice} from '@reduxjs/toolkit'
// import { userSlice } from './features/user';


export const userSlice=createSlice({
    name:'user',
    initialState:{value:{name:'',age:0,email:""}},
    reducers:{
        login:(state,action)=>{
            state.value=action.payload
        },
        login:(state,action)=>{
            state.value={value:{name:'',age:0,email:""}}
        }
        
    }
})
export const {login,logout} = userSlice.actions;
export default userSlice.reducer;