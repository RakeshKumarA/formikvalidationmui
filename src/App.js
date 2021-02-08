import "./styles.css";
import * as React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

// Material Core
import { Button, MenuItem } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

//Text Field
import { TextField } from "formik-material-ui";
import { DatePicker } from "formik-material-ui-pickers";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email.").required("Required"),
  password: Yup.string().required("Required").min(8, "Minimum 8 Characters"),
  fname: Yup.string().required("Required"),
  lname: Yup.string().required("Required"),
  select: Yup.string().required("Required")
});

const App = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        fname: "",
        lname: "",
        select: "",
        date: null
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ submitForm }) => (
        <Form>
          <Field
            component={TextField}
            name="fname"
            type="text"
            label="First Name"
          />
          <br />
          <Field
            component={TextField}
            name="lname"
            type="text"
            label="Last Name"
          />
          <br />
          <Field
            component={TextField}
            name="email"
            type="email"
            label="Email"
          />
          <br />
          <Field
            component={TextField}
            name="password"
            type="password"
            label="Password"
          />
          <br />
          <Field
            component={TextField}
            type="text"
            name="select"
            label="Select"
            select
            variant="standard"
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"0-20"}>Ten</MenuItem>
            <MenuItem value={"21-50"}>Twenty</MenuItem>
            <MenuItem value={"51-100"}>Thirty</MenuItem>
          </Field>
          <br />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Field component={DatePicker} name="date" label="Date" />
          </MuiPickersUtilsProvider>
          <Button variant="contained" color="primary" onClick={submitForm}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default App;
