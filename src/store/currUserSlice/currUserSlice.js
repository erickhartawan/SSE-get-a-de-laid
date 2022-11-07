import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userId: "",
    userName:"",
    gender:"",
    age:0,
    interest:[],
    images:[""],
    travelInterest:[],
    dpLink: "",
    vaccineStatus: ["true","false"]

}

export const currUserSlice = createSlice({
    name: 'currUser',
    initialState,
    reducers: {
        setCurrUser: (state,action) => {
            console.log(action);
            const data = action.payload;
            state.userId = data.user_profile_unique_id;
            state.userName = data.user_profile_unique_user_name;
            // state.gender = data.user_profile_gender;
            state.gender = "male";
            state.age = data.user_profile_age;
            state.interest = data.user_profile_interests;
            state.images = data.user_profile_images;
            state.travelInterest = data.user_profile_travel_interests;
            state.dpLink = data.user_profile_dp_image;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setCurrUser } = currUserSlice.actions

export default currUserSlice.reducer