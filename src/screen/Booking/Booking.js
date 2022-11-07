import React,{useEffect} from 'react';
import { Formik, Field } from "formik";
import * as Yup from "yup";
// import { MoreResources, DisplayFormikState } from "../helper";
import axios from 'axios';
import {useNavigate } from 'react-router';

function Booking() {
    let navigate = useNavigate();

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        navigate("/payment")

    }
    return (
        <div className="flex flex-col">
            <div className="my-5 text-2xl self-center">Now pick location for your date</div>
            <Formik
                initialValues={{ 
                    tripName:"",
                    date:"",
                    time:"",
                    numOfPeople:2,
                    

                }}
                onSubmit = {(values, { setSubmitting }) => {
                    // setTimeout(() => {
                    //     alert(JSON.stringify(values, null, 2));
                // }, 500);
                    // setSubmitting(false);
                    // console.log('inside handle');
                    // axios.post("http://127.0.0.1/signup", values).then(res => {
                    //     console.log(res);
                    // }).catch(err => {
                    //     console.error(err);
                    // })
                    navigate("/payment")
                }}
                validationSchema={Yup.object().shape({

                })}
            >
                {({ values, touched, errors, handleChange, handleSubmit, handleBlur }) => (
                    <form onSubmit={handleOnSubmit} className="w-100 flex flex-col bg-primary p-10 pt-3 rounded-3xl">
                        <div className="self-center pb-5 text-3xl text-white">Choose a trip from dropdown below or a date</div>
                        {/* choose trips */}
                        <div className="w-full flex flex-row mb-5">
                            <div className="flex basis-1/2 w-full p-1">Choose a location</div>
                            <div className="flex basis-1/2 w-full">
                                <Field as="select" name="tripName">
                                    <option value="Barossa Valley Wine Night $69pp">Barossa Valley Wine Night $69pp</option>
                                    <option value="Glenelg Water day package $59pp">Glenelg Water day package $59pp</option>
                                    <option value="Flinders Range 3-days tour $299pp">Flinders Range 3-days tour $299pp</option>
                                    <option value="Dinner at Chianti $99pp">Dinner at Chianti $99pp</option>
                                    <option value="Dinner at Press* Food and Wine $109pp">Dinner at Press* Food and Wine $109pp</option>
                                    <option value="Dinner at George $99pp">Dinner at George $99pp</option>
                                </Field>
                            </div>
                        </div>
                    {/* choose dates */}
                        <div className="w-full flex flex-row mb-5">
                            <div className="flex basis-1/2 w-full p-1">Pick a date</div>
                            <div className="flex basis-1/2 w-full">
                                <input
                                    className="p-1 rounded-lg w-full"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.date}
                                    type="text"
                                    name="date"
                                    placeholder="DD/MM/YYYY"
                                />
                            </div>
                        </div>

                        <div className="w-full flex flex-row mb-5">
                            <div className="flex basis-1/2 w-full p-1">Enter a time</div>
                            <div className="flex basis-1/2 w-full">
                                <input
                                    className="p-1 rounded-lg w-full"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.time}
                                    type="text"
                                    name="time"
                                    placeholder="7PM / 8PM"
                                />
                            </div>
                        </div>

                        <div className="w-full flex flex-row mb-5">
                            <div className="flex basis-1/2 w-full p-1">Number of patrons</div>
                            <div className="flex basis-1/2 w-full">
                                <input
                                    className="p-1 rounded-lg w-full"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.numOfPeople}
                                    type="text"
                                    name="numOfPeople"
                                    placeholder="2"
                                />
                            </div>
                        </div>

                        

                        
                        <button 
                            className="self-center justify-self-center bg-white w-fit p-1 rounded-md"
                            type="submit">
                            Submit
                        </button>
                        <div className="flex w-full justify-center p-4">
                            <div className='bg-green-900 text-white flex flex-col justify-center items-center mt-10 max-w-sm p-4 rounded-xl'>
                                <div>COVID-19 Information</div>
                                <ul className='flex flex-col justify-center items-center'>
                                    <li className="text-center">Please follow local health guidlines</li>
                                    <li className="text-center">Please maintain distance if appropriate</li>
                                    <li className="text-center">If you are not well, please refrain from meeting people</li>
                                    <li className="text-center">Please stay respectful in the community</li>

                                </ul>
                            </div>

                        </div>
                        {/* <DisplayFormikState props={values} /> */}

                    </form>
                )}
            </Formik>
        </div>

    );
}

export default Booking