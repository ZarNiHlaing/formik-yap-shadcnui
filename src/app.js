import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const App = () => {
  const initialValue = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object({
    email:yup 
    .string()
    .required("Email is required")
    .email("Invalid Email Format"),
    password:yup 
    .string()
    .required("password is required")
    .min(4,"length must be longer than 4")
    .max(8, "length must be shorter than 8"),
  })

  const handleSubmit = (value) => {
    console.log(value);
  };



  return (
    <div style={{ width: "30%" }}>
      <Formik 
      //  validate={values => {
      //   const errors = {};
      //   if (!values.email) {
      //     errors.email = 'Required';
      //   } else if (
      //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      //   ) {
      //     errors.email = 'Invalid email address';
      //   }
      //   if (!values.password) {
      //     errors.password = 'Required';
      //   } 
      //   return errors;
      // }}//custum
      validationSchema={validationSchema}
      validateOnChange={false}
      validateOnBlur={false}
      initialValues={initialValue} onSubmit={handleSubmit}>
        {({isSubmitting}) => (
          <>
            <Form style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <label htmlFor="email">Email Address</label>
              <Field type="email" name="email" id="email" className="border-2" />
              <ErrorMessage name="email" />
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" id="password" className="border-2" />
              <ErrorMessage name="password" />
              <button disabled={isSubmitting} className="border-2" type="submit">Submit</button>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default App;
