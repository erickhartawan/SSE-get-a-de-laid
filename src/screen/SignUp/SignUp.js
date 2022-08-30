import { Formik } from "formik";
import * as Yup from "yup";
import { MoreResources, DisplayFormikState } from "./helper";

const SignUp = () =>{
    <Formik
      initialValues={{ email: "", password: "123123" }}
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
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props;
        return (
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
                  placeholder="Password"
                />
              </label>
              {touched.password && errors.password && (
                <p style={{ color: "red" }}>{errors.password}</p>
              )}
            </div>
            <button type="submit">Submit</button>

            <DisplayFormikState {...props} />
          </form>
        );
      }}
    </Formik>
}

export default SignUp