import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userId: "",
    userName:"",
    gender:"",
    age:0,
    interest:[],
    photos:[],
    travelInterest:[],

}

export const currUserSlice = createSlice({
    name: 'currUser',
    initialState,
    reducers: {
        setCurrUser: (state,action) => {
            console.log(action);
            const data = action.payload;
            state.userId = data.userId;
            state.userName = data.userName;
            state.gender = data.gender;
            state.age = data.age;
            state.interest = data.interest;
            state.photos = data.photos;
            state.travelInterest = data.travelInterest;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setCurrUser } = currUserSlice.actions

export default currUserSlice.reducer