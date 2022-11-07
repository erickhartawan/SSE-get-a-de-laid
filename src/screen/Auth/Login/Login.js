import React,{useEffect} from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import { MoreResources, DisplayFormikState } from "../helper";
import { useSelector, useDispatch } from 'react-redux'
import { setCurrUser } from '../../../store/currUserSlice/currUserSlice';
import { login, logout, toggle } from '../../../store/authSlice/authSlice';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login () {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    const dispatch = useDispatch()
    const navigate = useNavigate();


    useEffect(() =>{
        console.log(isLoggedIn);
    },[isLoggedIn]);

    const handleOnSubmit = (e) =>{
        e.preventDefault()
        let initialData = {
            userName: "Elon Musk",
            gender:"Male",
            age:51,
            interest:['Electric Cars', 'Space Colonies', 'Tunnels', 'AI'],
            photos:['https://i.imgur.com/aVTkclb.jpeg', 'https://i.imgur.com/7gm1pfG.jpeg','https://i.imgur.com/0f1XJOA.jpeg','https://i.imgur.com/W3GgSlH.jpeg','https://i.imgur.com/dYWukdq.png','https://i.imgur.com/PtbFyi9.jpeg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBC3g042dfnfma62D0LdTmDJp3FxCE4t5Tnw&usqp=CAU','https://i0.wp.com/realibleworldnews.com/wp-content/uploads/2021/05/elonmusk.wario_-2.jpg?fit=1196%2C720&ssl=1'],
            travelInterest:["Flinders Range", "Mount Lofty", "The University of Adelaide"]
        }
        dispatch(setCurrUser(initialData));
        // navigate("/landing");
        console.log('handle on submit is working on login page')

    //     axios.post('/login', {
    //         userEmail: ''
    //     })

    //     // dispatch(toggle());
    }

    return(
        <div className="flex flex-col">
            <div className="my-5 text-2xl self-center">You are one step away from getting laid</div>
            <div className="my-5 text-2xl self-center">Login with email address</div>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 500);
                    axios.post('http://localhost:3005/login', {
                        userEmail: values.email,
                        userPassword: values.password
                    }).then(res =>{
                        console.log(res);
                        navigate("/landing", res.data);
                    }).catch(err =>{
                        console.error("Password / Email not correct")
                    })
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email("Invalid email")
                        .required("Required")
                })}
            >
                {({ values, touched, errors, handleChange, handleSubmit, handleBlur }) => (
                    <form onSubmit={handleSubmit} className="w-100 flex flex-col bg-primary p-10 pt-3 rounded-3xl">
                        <div className="self-center pb-5 text-3xl text-white"> Login</div>
                        <div className="w-full flex flex-row mb-5">
                            <div className="flex basis-1/2 w-full p-1">Email</div>
                            <div className="flex basis-1/2 w-full">
                                <input
                                    className="p-1 rounded-lg"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    border={touched.email && errors.email && "1px solid red"}
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                />
                            </div>

                            {touched.email && errors.email && (
                                <p style={{ color: "red" }}>{errors.email}</p>
                            )}
                        </div>
                        <div className="w-full flex flex-row mb-5">
                            <div className="flex basis-1/2 w-full p-1">Password</div>
                            <div className="flex basis-1/2 w-full">
                                <input
                                    className="p-1 rounded-lg"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    border={
                                        touched.password && errors.password && "1px solid red"
                                    }
                                    type="password"
                                    name="password"
                                    placeholder=""
                                />
                            </div>
                            {touched.password && errors.password && (
                                <p style={{ color: "red" }}>{errors.password}</p>
                            )}
                        </div>
                        <button 
                            className="self-center justify-self-center bg-white w-fit p-1 rounded-md"
                            type="submit">
                            Submit
                        </button>
                        <DisplayFormikState props={values} />

                    </form>
                )}
            </Formik>
        </div>
    );

}

export default Login;