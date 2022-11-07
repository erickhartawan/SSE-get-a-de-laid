import React,{useEffect} from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import { MoreResources, DisplayFormikState } from "../helper";
import axios from 'axios';

function UserInfo() {
    const handleOnSubmitUserDetails = (e,data) =>{
        e.preventDefault();
        data.vaccineStatus = "true,true";
        console.log("insude handle submit user detts")
        axios.post("http://127.0.0.1:3005/signup", data).then(res => {
            console.log(res);
        }).catch(err => {
            console.error(err);
        })
    }
    
    return ( 
        <div className="flex flex-col">
            <div className="my-5 text-2xl self-center">Please provide your information</div>
            <Formik
                initialValues={{ 
                    firstName: "", 
                    lastName:"",
                    age: "",
                    phoneNumber: "",
                    gender: "",
                    language:"englishh",
                    vaccineStatus:"true,true", //temp
                    dpLink:"",
                    bio:"",
                    interest:"",
                    images:"",
                    userEmail:"hartawanerick@gmail.com", //temp
                    userPassword:"qwertyuiop[]", // temp
                    country:"australia", // temp
                    travelInterests:"adelaide,valley,glenelg"
                    

                }}
                onSubmit = {(values, { setSubmitting }) => {
                    // setTimeout(() => {
                    //     alert(JSON.stringify(values, null, 2));
                // }, 500);
                    setSubmitting(false);
                    console.log('inside handle');
                    axios.post("http://127.0.0.1/signup", values).then(res => {
                        console.log(res);
                    }).catch(err => {
                        console.error(err);
                    })
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email("Invalid email")
                        .required("Required"),
                    password: Yup.string()
                        .min(6, "Too Short!")
                        .notRequired("Required"),
                })}
            >
                {({ values, touched, errors, handleChange, handleSubmit, handleBlur }) => (
                    <form onSubmit={(e) => {handleOnSubmitUserDetails(e,values)}} className="w-100 flex flex-col bg-primary p-10 pt-3 rounded-3xl">
                        <div className="self-center pb-5 text-3xl text-white">Tell us a bit about yourself</div>
                        <div className="w-full flex flex-row mb-5">
                            <div className="flex basis-1/2 w-full p-1">First name</div>
                            <div className="flex basis-1/2 w-full">
                                <input
                                    className="p-1 rounded-lg"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.firstName}
                                    type="text"
                                    name="firstName"
                                    placeholder="Email"
                                />
                            </div>
                        </div>

                        <div className="w-full flex flex-row mb-5">
                            <div className="flex basis-1/2 w-full p-1">Last name</div>
                            <div className="flex basis-1/2 w-full">
                                <input
                                    className="p-1 rounded-lg"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.lastName}
                                    type="text"
                                    name="lastName"
                                    placeholder="Email"
                                />
                            </div>
                        </div>

                        <div className="w-full flex flex-row mb-5">
                            <div className="flex basis-1/2 w-full p-1">Link to your video introduction</div>
                            <div className="flex basis-1/2 w-full">
                                <input
                                    className="p-1 rounded-lg"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.dpLink}
                                    type="text"
                                    name="dpLink"
                                    placeholder="link to your video"
                                />
                            </div>
                        </div>
                        <div className="w-full flex flex-row mb-5">
                            <div className="flex basis-1/2 w-full p-1">Do you want to tell us a little about yourself?</div>
                            <div className="flex basis-1/2 w-full">
                                <input
                                    className="p-1 rounded-lg"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.bio}
                                    type="text"
                                    name="bio"
                                    placeholder="I love cooking..."
                                />
                            </div>
                        </div>

                        <div className="w-full flex flex-row mb-5">
                            <div className="flex basis-1/2 w-full p-1">Pick your interest</div>
                            <div className="flex basis-1/2 w-full">
                                <div className="flex flex-col flex-wrap max-h-40">
                                <label className="mr-1">
                                    <input
                                            className="p-1 rounded-lg mr-"
                                            onChange={handleChange}
                                            value="outdoor"
                                            type="checkbox"
                                            name="interest"
                                        />
                                    Outdoor
                                </label>
                                <label>
                                    <input
                                            className="p-1 rounded-lg"
                                            onChange={handleChange}
                                            value="movies"
                                            type="checkbox"
                                            name="interest"
                                        />
                                    Movies
                                </label>
                                <label>
                                    <input
                                            className="p-1 rounded-lg"
                                            onChange={handleChange}
                                            value="food"
                                            type="checkbox"
                                            name="interest"
                                        />
                                    Food
                                </label>
                                <label>
                                    <input
                                            className="p-1 rounded-lg"
                                            onChange={handleChange}
                                            value="music"
                                            type="checkbox"
                                            name="interest"
                                        />
                                    Music
                                </label>
                                <label>
                                    <input
                                            className="p-1 rounded-lg"
                                            onChange={handleChange}
                                            value="cricket"
                                            type="checkbox"
                                            name="interest"
                                        />
                                    Cricket
                                </label>
                                <label>
                                    <input
                                            className="p-1 rounded-lg"
                                            onChange={handleChange}
                                            value="badminton"
                                            type="checkbox"
                                            name="interest"
                                        />
                                    Badminton
                                </label>
                                <label>
                                    <input
                                            className="p-1 rounded-lg"
                                            onChange={handleChange}
                                            value="basketball"
                                            type="checkbox"
                                            name="interest"
                                        />
                                    Basketball
                                </label>
                                </div>
                                
                            </div>
                        </div>


                        <div className="w-full flex flex-row mb-5">
                            <div className="flex basis-1/2 w-full p-1">Age</div>
                            <div className="flex basis-1/2 w-full">
                                <input
                                    className="p-1 rounded-lg"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.age}
                                    type="text"
                                    name="age"
                                    placeholder="enter your current age"
                                />
                            </div>
                        </div>

                        <div className="w-full flex flex-row mb-5">
                            <div className="flex basis-1/2 w-full p-1">Phone Number</div>
                            <div className="flex basis-1/2 w-full">
                                <input
                                    className="p-1 rounded-lg"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.phoneNumber}
                                    type="text"
                                    name="phoneNumber"
                                    placeholder="Email"
                                />
                            </div>
                        </div>

                        <div className="w-full flex flex-row mb-5">
                            <div className="flex basis-1/2 w-full p-1">Gender</div>
                            <div className="flex basis-1/2 w-full">
                                <input
                                    className="p-1 rounded-lg"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gender}
                                    border={touched.email && errors.email && "1px solid red"}
                                    type="text"
                                    name="gender"
                                    placeholder="Type in your gender"
                                />
                            </div>
                        </div>

                        <div className="w-full flex flex-row mb-5">
                            <div className="flex basis-1/2 w-full p-1">Provide link to your images</div>
                            <div className="flex basis-1/2 w-full">
                                <input
                                    className="p-1 rounded-lg"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.images}
                                    type="text"
                                    name="images"
                                    placeholder="Links to your display photo. comma seperated links"
                                />
                            </div>
                        </div>
                        
                        <button 
                            className="self-center justify-self-center bg-white w-fit p-1 rounded-md"
                            type="submit">
                            Submit
                        </button>
                        {/* <DisplayFormikState props={values} /> */}

                    </form>
                )}
            </Formik>
        </div>
     );
}

export default UserInfo;