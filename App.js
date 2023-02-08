import React from "react";
import { formik } from "formik";
// TODO: import useFormik from formik library

function App() {
  const formik = useFormik({
    initialValues:{
      email: "",
      password: "",

    },
    onSubmit: (values) => {
      alert("Login Sucessful");
    },
    validate: (values) => {
      let errors = {}
      if (!values.email) errors.email = "field required"
      if (!values.password) errors.password = "field required"    
      return errors;
    }
  })
  // TODO: add a const called formik assigned to useFormik()
        // TODO: Email field: 
        // TODO: Password field:
        // TODO: Submit button

        // TODO:  If the username or password inputs are empty, display the message "Field required" under the text input. If the username is not in an email format, display the message "Username should be an email" under the text input. If the username and password pass the above validations, then display the message "Login Successful" in an alert box.
       // The email input field should have the ID emailField The email error message should be within a div element that has the ID emailErrorThe password input field should have the ID pswField The password error message should be within a div element that has an ID pswErrorThe submit button should have an ID submitBtn

  return (<div>
    <form onSubmit={formik.handleSubmit}>
      <div>Email:</div>
      <input
        id="emailField"
        type="text"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? (
        <div id="emailError" style={{ color: "red" }}>
          {formik.errors.email}
        </div>
      ) : null}
      <div>Password:</div>
      <input
        id="pswField"
        type="text"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <br />
      {formik.errors.password ? (
        <div id="pswError" style={{ color: "red" }}>
          {formik.errors.password}
        </div>
      ) : null}
      <button id="submitBtn" type="submit">
        Submit
      </button>
    </form>
  </div>
);
}

export default App;
