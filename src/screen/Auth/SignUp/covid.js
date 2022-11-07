import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { MoreResources, DisplayFormikState } from "../helper";
export const Covid = () => {
    return (
        <div className="flex flex-col">
            <div className="my-5 text-2xl self-center">
                Enter Covid Vaccination Certificate Details
            </div>
            <Formik
                initialValues={{ doc_num: "", dob: "", num_doses: 0, ihi: "", last_dose:"" }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 500);
                }}
                validationSchema={Yup.object().shape({
                    doc_num: Yup.string().required("Required").matches("^[0-9]{12}$", "Only 12 digits allowed"),
                    dob: Yup.string().required("Required"),
                    ihi: Yup.string().required("Required").matches("^[0-9]{12}$", "Only 12 digits allowed"),
                    num_doses: Yup.number().required("Required"),
                    last_dose: Yup.string().required("Required"),
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
                            Details
                        </div>
                        <div className="w-full flex flex-row mb-5">
                            <div className="flex basis-1/2 w-full p-1">
                                Document Number
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
                                <p style={{ color: "red" }}>{errors.doc_num}</p>
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
                                <p style={{ color: "red" }}>{errors.ihi}</p>
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
                                {/* <input
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
                                /> */}
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
                            <button
                                className="self-center justify-self-center bg-white w-fit p-1 rounded-md"
                                type="submit"
                                click
                            >
                                Validate
                            </button>
                        {/* <DisplayFormikState props={values} /> */}
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default Covid;
