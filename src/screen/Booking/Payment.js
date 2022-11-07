import React,{useEffect} from 'react';
import { Formik, Field } from "formik";
import * as Yup from "yup";
// import { MoreResources, DisplayFormikState } from "../helper";
import axios from 'axios';

function Payment() {
    const handleOnSubmit = (e,values) =>{
        e.preventDefault();
        setTimeout(()=>{
            alert("payment succesful");
        },1000)

    }
    return (

        <div className="flex flex-col">
            <div className="my-5 text-2xl self-center">Complete purchase</div>
            <Formik
                initialValues={{ 
                    cardno:"",
                    cvv:"",
                    nameOnCard:'',
                    expiry:""


                }}
                onSubmit = {(e,values) => {
                    console.log(values)
                    e.preventDefault();
                    setTimeout(()=>{
                        alert("payment succesful");
                    },1000)
                }}
                validationSchema={Yup.object().shape({

                })}
            >
                {({ values, touched, errors, handleChange, handleSubmit, handleBlur }) => (
                    <form onSubmit={(e) => handleOnSubmit(e,values)} className="w-100 flex flex-col bg-primary p-10 pt-3 rounded-3xl">
                        <div className="self-center pb-5 text-3xl text-white">Secure Payment</div>
                        {/* choose trips */}
                        <div className="w-full flex flex-row mb-5">
                            <div className="flex basis-1/2 w-full p-1">Input your card details</div>
                            <div className="flex basis-1/2 w-full">
                                <input 
                                    type="text" 
                                    name="cardno" 
                                    onChange={handleChange} 
                                    placeholder="XXXX XXXX XXXX XXXX" 
                                    value={values.cardno}
                                    className="p-1 rounded-lg w-full"
                                    >
                                </input>
                            </div>
                        </div>
                    {/* choose dates */}
                        <div className="w-full flex flex-row mb-5">
                            <div className="flex basis-1/2 w-full p-1">CVV</div>
                            <div className="flex basis-1/2 w-full">
                                <input
                                    className="p-1 rounded-lg w-full"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.cvv}
                                    type="text"
                                    name="cvv"
                                    placeholder="DD/MM/YYYY"
                                />
                            </div>
                        </div>

                        <div className="w-full flex flex-row mb-5">
                            <div className="flex basis-1/2 w-full p-1">Name shown on the card</div>
                            <div className="flex basis-1/2 w-full">
                                <input
                                    className="p-1 rounded-lg w-full"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.nameOnCard}
                                    type="text"
                                    name="nameOnCard"
                                    placeholder="Mr/Mrs/Ms. "
                                />
                            </div>
                        </div>

                        <div className="w-full flex flex-row mb-5">
                            <div className="flex basis-1/2 w-full p-1">Expiry date</div>
                            <div className="flex basis-1/2 w-full">
                                <input
                                    className="p-1 rounded-lg w-full"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.date}
                                    type="text"
                                    name="expiry"
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
                            <div className='bg-red-900 text-white flex flex-col justify-center items-center mt-10 max-w-sm p-4 rounded-xl'>
                                <div>Mock up payment page</div>
                                <ul className='flex flex-col justify-center items-center'>
                                    <li className="text-center">DO NOT ENTER REAL CARD DETAILS</li>

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

export default Payment