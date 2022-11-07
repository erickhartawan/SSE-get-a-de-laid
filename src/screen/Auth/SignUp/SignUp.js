import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { MoreResources, DisplayFormikState } from "../helper";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
const recaptchaRef = React.createRef();
const siteKey = "6LfB2MUiAAAAANDPR5wPJIIcxD_Vw-JbVjFYdrV4";
export const SignUp = () => {
    
    console.log("MyForm has been called");
    return (
        <div className="flex flex-col">
            <div className="my-5 text-2xl self-center">
                You are one step away from getting laid
            </div>
            <div className="my-5 text-2xl self-center">
                sign up with email address
            </div>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 500);
                }}
                validationSchema = {Yup.object().shape({
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
                })}
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
                                <p style={{ color: "red" }}>{errors.email}</p>
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
                        <Link to="/user-register">
                            <button
                                className="self-center justify-self-center bg-white w-fit p-1 rounded-md"
                                type="submit"
                            >
                                Create an Account
                            </button>
                        </Link>
                        {/* <DisplayFormikState props={values} /> */}
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default SignUp;
