import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { MoreResources, DisplayFormikState } from "../helper";
import { Link } from "react-router-dom";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
const recaptchaRef = React.createRef();
const siteKey = "6LfB2MUiAAAAANDPR5wPJIIcxD_Vw-JbVjFYdrV4";

export const CombinedForm = () => {
    const [step1, setStep1] = useState(true);
    const [step2, setStep2] = useState(false);
    const [step3, setStep3] = useState(false);

    const handleOnSubmitUserDetails = (e, data) => {
        e.preventDefault();
        data.vaccineStatus = "true,true";
        console.log("insude handle submit user detts");
        axios
            .post("http://127.0.0.1:3005/signup", data)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const backButtonStepTwo = () => {
        setStep1(true);
        setStep2(false);
        setStep3(false);
    };

    const onSubmitStepOne = () => {
        setStep1(false);
        setStep2(true);
        setStep3(false);
    };

    const onSubmitStepTwo = () => {
        setStep1(false);
        setStep2(false);
        setStep3(true);
    };

    return (
        <div className="flex flex-col">
            <div className="my-5 text-2xl self-center">
                {/* You are one step away from getting laid */}
            </div>
            <div className="my-5 text-2xl self-center">
                {/* sign up with email address */}
            </div>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    confirmPassword: "",
                    doc_num: "",
                    dob: "",
                    num_doses: 0,
                    ihi: "",
                    last_dose: "",
                    firstName: "",
                    lastName: "",
                    age: "",
                    phoneNumber: "",
                    gender: "",
                    language: "englishh",
                    vaccineStatus: "true,true", //temp
                    dpLink: "",
                    bio: "",
                    interest: "",
                    images: "",
                    userEmail: "hartawanerick@gmail.com", //temp
                    userPassword: "qwertyuiop[]", // temp
                    country: "australia", // temp
                    travelInterests: "adelaide,valley,glenelg",
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email("Invalid email")
                        .required("Required"),
                    password: Yup.string()
                        .min(6, "Too Short!")
                        .notRequired("Required"),
                    confirmPassword: Yup.string().oneOf(
                        [Yup.ref("password"), null],
                        "password doesn't match"
                    ),
                    doc_num: Yup.string()
                        .required("Required")
                        .matches("^[0-9]{12}$", "Only 12 digits allowed"),
                    dob: Yup.string().required("Required"),
                    ihi: Yup.string()
                        .required("Required")
                        .matches("^[0-9]{12}$", "Only 12 digits allowed"),
                    num_doses: Yup.number().required("Required"),
                    last_dose: Yup.string().required("Required"),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values);
                    setSubmitting(false);
                    axios
                        .post("http://127.0.0.1/signup", values)
                        .then((res) => {
                            console.log(res);
                        })
                        .catch((err) => {
                            console.error(err);
                        });
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 500);
                }}
            >
                {({
                    values,
                    touched,
                    errors,
                    handleChange,
                    handleSubmit,
                    handleBlur,
                }) => (
                    <form
                        onSubmit={handleSubmit}
                        className="w-100 flex flex-col bg-primary p-10 pt-3 rounded-3xl"
                    >
                        {step1 == true && (
                            <div className="flex flex-col ">
                                <div className="self-center pb-5 text-3xl text-white">
                                    {" "}
                                    Sign up
                                </div>
                                <div className="w-full flex flex-row mb-5">
                                    <div className="flex basis-1/2 w-full p-1">
                                        Email
                                    </div>
                                    <div className="flex basis-1/2 w-full">
                                        <input
                                            className="p-1 rounded-lg"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            border={
                                                touched.email &&
                                                errors.email &&
                                                "1px solid red"
                                            }
                                            type="text"
                                            name="email"
                                            placeholder="Email"
                                        />
                                    </div>

                                    {touched.email && errors.email && (
                                        <p style={{ color: "red" }}>
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
                                <div className="w-full flex flex-row mb-5">
                                    <div className="flex basis-1/2 w-full p-1">
                                        Password
                                    </div>
                                    <div className="flex basis-1/2 w-full">
                                        <input
                                            className="p-1 rounded-lg"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                            border={
                                                touched.password &&
                                                errors.password &&
                                                "1px solid red"
                                            }
                                            type="password"
                                            name="password"
                                            placeholder=""
                                        />
                                    </div>
                                    {touched.password && errors.password && (
                                        <p style={{ color: "red" }}>
                                            {errors.password}
                                        </p>
                                    )}
                                </div>
                                <div className="w-full flex flex-row mb-5">
                                    <div className="flex basis-1/2 w-full p-1">
                                        Confirm Password
                                    </div>
                                    <div className="flex basis-1/2 w-full">
                                        <input
                                            className="p-1 rounded-lg"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.confirmPassword}
                                            border={
                                                touched.confirmPassword &&
                                                errors.confirmPassword &&
                                                "1px solid red"
                                            }
                                            type="password"
                                            name="confirmPassword"
                                            placeholder=""
                                        />
                                    </div>
                                    {touched.password && errors.password && (
                                        <p style={{ color: "red" }}>
                                            {errors.password}
                                        </p>
                                    )}
                                </div>
                                <div className="w-full flex flex-row mb-5">
                                    <div className="flex basis-1/2 w-full p-1">
                                        Captcha
                                    </div>
                                    <div className="flex basis-1/2 w-full">
                                        <ReCAPTCHA
                                            ref={recaptchaRef}
                                            sitekey={siteKey}
                                            // onChange={onChange}
                                        />
                                    </div>
                                    {touched.password && errors.password && (
                                        <p style={{ color: "red" }}>
                                            {errors.password}
                                        </p>
                                    )}
                                </div>
                                {/* <Link to="/user-register"> */}
                                <button
                                    className="self-center justify-content-center bg-white w-fit p-1 rounded-md"
                                    onClick={onSubmitStepOne}
                                >
                                    Create an Account
                                </button>
                                {/* </Link> */}
                            </div>
                        )}

                        {step2 == true && (
                            <div className="flex flex-col">
                                <div className="self-center pb-5 text-3xl text-white">
                                    Tell us a bit about yourself
                                </div>
                                <div className="w-full flex flex-row mb-5">
                                    <div className="flex basis-1/2 w-full p-1">
                                        First name
                                    </div>
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
                                    <div className="flex basis-1/2 w-full p-1">
                                        Last name
                                    </div>
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
                                    <div className="flex basis-1/2 w-full p-1">
                                        Link to your video introduction
                                    </div>
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
                                    <div className="flex basis-1/2 w-full p-1">
                                        Do you want to tell us a little about
                                        yourself?
                                    </div>
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
                                    <div className="flex basis-1/2 w-full p-1">
                                        Pick your interest
                                    </div>
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
                                    <div className="flex basis-1/2 w-full p-1">
                                        Age
                                    </div>
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
                                    <div className="flex basis-1/2 w-full p-1">
                                        Phone Number
                                    </div>
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
                                    <div className="flex basis-1/2 w-full p-1">
                                        Gender
                                    </div>
                                    <div className="flex basis-1/2 w-full">
                                        <input
                                            className="p-1 rounded-lg"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.gender}
                                            border={
                                                touched.email &&
                                                errors.email &&
                                                "1px solid red"
                                            }
                                            type="text"
                                            name="gender"
                                            placeholder="Type in your gender"
                                        />
                                    </div>
                                </div>

                                <div className="w-full flex flex-row mb-5">
                                    <div className="flex basis-1/2 w-full p-1">
                                        Provide link to your images
                                    </div>
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
                                <div className="flex flex-row justify-between w-full">
                                    <button
                                        className="self-center justify-content-center bg-white w-fit p-1 rounded-md"
                                        onClick={backButtonStepTwo}
                                    >
                                        Back
                                    </button>

                                    <button
                                        className="self-center justify-self-center bg-white w-fit p-1 rounded-md"
                                        type="button"
                                        onClick={onSubmitStepTwo}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        )}

                        {step3 == true && (
                            <div className="flex flex-col">
                                <div className="self-center pb-5 text-3xl text-white">
                                    {" "}
                                    Details
                                </div>
                                <div className="w-full flex flex-row mb-5">
                                    <div className="flex basis-1/2 w-full p-1">
                                        document number
                                    </div>
                                    <div className="flex basis-1/2 w-full">
                                        <input
                                            className="p-1 rounded-lg"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.doc_num}
                                            border={
                                                touched.doc_num &&
                                                errors.doc_num &&
                                                "1px solid red"
                                            }
                                            type="text"
                                            name="doc_num"
                                            placeholder="Enter document number"
                                        />
                                    </div>

                                    {touched.doc_num && errors.doc_num && (
                                        <p style={{ color: "red" }}>
                                            {errors.doc_num}
                                        </p>
                                    )}
                                </div>
                                <div className="w-full flex flex-row mb-5">
                                    <div className="flex basis-1/2 w-full p-1">
                                        Individual Healthcare Identifier
                                    </div>
                                    <div className="flex basis-1/2 w-full">
                                        <input
                                            className="p-1 rounded-lg"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.ihi}
                                            border={
                                                touched.ihi &&
                                                errors.ihi &&
                                                "1px solid red"
                                            }
                                            type="text"
                                            name="ihi"
                                            placeholder="Enter IHI number"
                                        />
                                    </div>

                                    {touched.ihi && errors.ihi && (
                                        <p style={{ color: "red" }}>
                                            {errors.ihi}
                                        </p>
                                    )}
                                </div>
                                <div className="w-full flex flex-row mb-5">
                                    <div className="flex basis-1/2 w-full p-1">
                                        Date of birth
                                    </div>
                                    <div className="flex basis-1/2 w-full">
                                        <input
                                            className="p-1 rounded-lg"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.dob}
                                            border={
                                                touched.password &&
                                                errors.password &&
                                                "1px solid red"
                                            }
                                            type="date"
                                            name="dob"
                                            placeholder="Enter Date"
                                        />
                                    </div>
                                </div>
                                <div className="w-full flex flex-row mb-5">
                                    <div className="flex basis-1/2 w-full p-1">
                                        Number of doses taken
                                    </div>
                                    <div className="flex basis-1/2 w-full">
                                        <select name="num_doses" id="dose">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="w-full flex flex-row mb-5">
                                    <div className="flex basis-1/2 w-full p-1">
                                        Last Dose taken
                                    </div>
                                    <div className="flex basis-1/2 w-full">
                                        <input
                                            className="p-1 rounded-lg"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.last_dose}
                                            border={
                                                touched.last_dose &&
                                                errors.last_dose &&
                                                "1px solid red"
                                            }
                                            type="date"
                                            name="last_dose"
                                            placeholder=""
                                        />
                                    </div>
                                </div>

                                {/* <div className="flex flex-col"> */}
                                <div className="flex flex-row justify-between w-full">
                                    <button
                                        className="self-center justify-content-center bg-white w-fit p-1 rounded-md"
                                        onClick={onSubmitStepOne}
                                    >
                                        Back
                                    </button>

                                    <button
                                        className="self-center justify-self-center bg-white w-fit p-1 rounded-md"
                                        type="submit"
                                    >
                                        Validate
                                    </button>
                                </div>
                            </div>

                            // </div>
                        )}

                        {/* <DisplayFormikState props={values} /> */}
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default CombinedForm;
