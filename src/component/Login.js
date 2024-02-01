import React from "react";

// import { Formik } from "formik"; // import Formik from formik
// import useLocalStorage from "../Hooks/useLocalStorage";
// import * as Yup from "yup"; // import Yup from yup
// import { useNavigate } from "react-router-dom";

// create a schema for Email and Password validation
// const schema = Yup.object().shape({
//   email: Yup.string()
//     .required("Email is a required")
//     .email("Enter Valid Email"),
//   password: Yup.string()
//     .required("Password is a required")
//     .min(8, "Password must be 8 characters long"),
// });

const Login = () => {
  //   const navigate = useNavigate();
  //   // call custom hook useLocalStorage for getting localStorage value of user
  //   const [getLocalStorage, setLocalStorage] = useLocalStorage("user");

  //   useEffect(() => {
  //     // if length of token is equal to 100 then navigate to previous page
  //     if (getLocalStorage?.token?.length === 100) {
  //       navigate(-1);
  //     }
  //   }, []);

  //   function handleNavigate(values) {
  //     let index = values?.email.indexOf('@');
  //     let name = values?.email.slice(0, index);

  //     // generate 100 character random string
  //     const genRandomStringNthChar = () => {
  //       return [...Array(100)]
  //         .map(() => Math.random().toString(36)[2])
  //         .join("");
  //     };

  //     // store userName and token in localStorage
  //     setLocalStorage({
  //       ...getLocalStorage,
  //       "userName": name,
  //       "token": genRandomStringNthChar()
  //     })
  //     // navigate to previous page
  //     navigate(-1);
  //   }

  //   // if length of token is equal to 100 then return null
  //   if (getLocalStorage?.token?.length === 100) return null;

  return (
    <>

    </>
  );
};

export default Login;
