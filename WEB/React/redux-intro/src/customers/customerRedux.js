import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    fullName:'',
    nationalID:'',
    createdAt:''
}


const customerSlice=createSlice({
    name:'customer',
    initialState,
    reducers: {
        createCustomer(state,action){
            state.fullName=action.payload.fullName
            state.nationalID=action.payload.nationalId
            state.createdAt=action.payload.createAt
        },

        updateName(state, action){
           state.fullName=action.payload
        }
    }
})

export default customerSlice.reducer
export const {createCustomer, updateName}=customerSlice.actions




