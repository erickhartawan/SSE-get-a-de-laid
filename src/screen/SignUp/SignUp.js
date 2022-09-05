import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { MoreResources, DisplayFormikState } from "./helper";


export const SignUp = () => {
  console.log("MyForm has been called");
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Invalid email")
            .required("Required"),
          password: Yup.string()
            .min(6, "Too Short!")
            .notRequired("Required")
        })}
      >
        {({ values, touched, errors, handleChange, handleSubmit, handleBlur }) => (
          <form onSubmit={handleSubmit}>
          <div>
            <label>
              Email *
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                border={touched.email && errors.email && "1px solid red"}
                type="text"
                name="email"
                placeholder="Email"
              />
            </label>
            {touched.email && errors.email && (
              <p style={{ color: "red" }}>{errors.email}</p>
            )}
          </div>
          <div>
            <label>
              Password *
              <input
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
            </label>
            {touched.password && errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
          </div>
          <button type="submit">Submit</button>
          <DisplayFormikState props={values} />

        </form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp