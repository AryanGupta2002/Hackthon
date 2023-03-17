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
  const [home, setHome] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (GotoCompanypage) {
    return <Navigate to="/comporstrtup" />;
  }
  if (home) {
    return <Navigate to="/home" />;
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

  const onSignInSubmit = async (e) => {
    e.preventDefault();
    console.log(password, email);
    // if(Object.keys(validate(formValues)).length === 0){
    //   console.log("first")
    if (password && email) {
      const res = await axios.post(`http://127.0.0.1:4000/login`, {
        email: email,
        password: password,
      });
      console.log(res.data.user);
      if (res.data.success == false) {
        window.alert("Wrong Credentials");
      } else {
        console.log(res.data.user);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setHome(true);
      }
    } else {
      window.alert("Fill Fields Carefully");
    }
    // }
  };

  return (
    // <div className="w-[100vw] h-[100vh] bg-neutral-600">
    //   <div id="loginpage"  className=" w-[50vw] h-[70vh] m-[auto]  " >
    //     <Form id="loginform">
    //       <div id="sign-in-button"></div>
    //       <Form.Field>
    //         <input
    //           type="text"
    //           placeholder="E-mail"
    //           name="email"
    //           value={email}
    //           onChange={(e)=>setEmail(e.target.value)}
    //         ></input>
    //         <span id="check">{formerror.email}</span>
    //       </Form.Field>
    //       <Form.Field>
    //         <input
    //           type="password"
    //           placeholder="Password"
    //           name="password"
    //           value={password}
    //           onChange={(e)=>setPassword(e.target.value)}
    //         ></input>
    //         <span id="check">{formerror.password}</span>
    //       </Form.Field>
    //       <Button id="subbutton" onClick={onSignInSubmit}>
    //         Login
    //       </Button>
    //     </Form>
    //     <p id="alreadyuser">
    //       Not a user?
    //       <span
    //         id="loginclick"
    //         onClick={() => {
    //           setGotoCompanypage(true);
    //         }}
    //       >
    //         Click here to signup.
    //       </span>
    //     </p>
    //   </div>
    // </div>

    <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="w-full max-w-md space-y-8">
        <div>
          <img
            class="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form class="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div class="-space-y-px rounded-md shadow-sm">
            <div>
              <label for="email-address" class="sr-only">
                Email address
              </label>
              <Form.Field>
                <input
                  type="text"
                  placeholder="E-mail"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  placeholder:pl-2"
                />
              </Form.Field>
            </div>
            <div>
              <label for="password" class="sr-only">
                Password
              </label>
              <Form.Field>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  class="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:pl-2"
                  placeholder="Password"
                />
              </Form.Field>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="text-sm">
              <a
                href="#"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
              <span id="alreadyuser" className="ml-24">
                Not a user? 
                <span className="pl-[2px] cursor-pointer text-slate-400 hover:underline "
                  id="loginclick"
                  onClick={() => {
                    setGotoCompanypage(true);
                  }}
                >
                  Click here !
                </span>
              </span>
            </div>
          </div>

          <div>
            <button
              onClick={onSignInSubmit}
              class="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
