import React from "react";
import { Form, Button } from "semantic-ui-react";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const initialvalues = { email: "", password: "" };
  const [formValues, setformValues] = useState({ initialvalues });
  const [formerror, setformerror] = useState({});
  const [GotoCompanypage, setGotoCompanypage] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (GotoCompanypage) {
    return <Navigate to="/comporstrtup" />;
  }
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "E-mail is required.";
    }
    if (!values.password) {
      errors.password = "Password is required.";
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
  };
  const onSignInSubmit = async (e) => {
    e.preventDefault();
    // setformerror(validate(formValues));
    console.log(password,email)
    // if(Object.keys(validate(formValues)).length === 0){
    //   console.log("first")
      const res = await axios.post(`http://127.0.0.1:4000/login`,{email:email,password:password});
      console.log(res,"dsaf")
    // }
  };

  return (
    <div>
      <div id="loginpage">
        <Form id="loginform">
          <div id="sign-in-button"></div>
          <Form.Field>
            <input
              type="text"
              placeholder="E-mail"
              name="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            ></input>
            <span id="check">{formerror.email}</span>
          </Form.Field>
          <Form.Field>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            ></input>
            <span id="check">{formerror.password}</span>
          </Form.Field>
          <Button id="subbutton" onClick={onSignInSubmit}>
            Login
          </Button>
        </Form>
        <p id="alreadyuser">
          Not a user?
          <span
            id="loginclick"
            onClick={() => {
              setGotoCompanypage(true);
            }}
          >
            Click here to signup.
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
