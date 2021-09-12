// import React, { useState } from "react";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import { injectIntl } from "react-intl";
// import * as auth from "../_redux/authRedux";
// import { register, emailExists } from "../_redux/authCrud";
// // Custom Imports
// import { Card, Button } from '@material-ui/core';
// import MyTabs from './MyTabs';
// import * as EmailValidator from 'email-validator';

// function Registration(props) {
//   const [loading, setLoading] = useState(false);
//   const [email, setEmail] = useState({ isError: false, value: "", msg: "", checking: false });
//   const [emailFocus, setEmailFocus] = useState(false);
//   const [phone, setPhone] = useState({ isError: false, value: null, msg: "", country: 'us', code: '1' });
//   const [customAlert, setCustomAlert] = useState({ active: false, variant: "", msg: "" });
//   // const [promotion, setPromotion] = useState(false);

//   const enableLoading = () => {
//     setLoading(true);
//   };

//   const disableLoading = () => {
//     setLoading(false);
//   };

//   const signupHandler = () => {
//     setCustomAlert({ ...customAlert, active: false });
//     enableLoading();
//     let isOK = true;
//     if (!email.value) {
//       setEmail({ ...email, isError: true, msg: "This is required field!" });
//       isOK = false;
//     }

//     if (!EmailValidator.validate(email.value)) {
//       setEmail({ ...email, isError: true, msg: "Invalid email" });
//       isOK = false;
//     }

//     if (!phone.value || phone.value === phone.code) {
//       setPhone({ ...phone, isError: true, msg: "This is required field!" });
//       isOK = false;
//     }

//     if (isOK) {
//       register(email.value, phone.value)
//         .then(res => {
//           disableLoading();
//           let data = res.data.dataException;
//           if (data.err_code === 200) {
//             setCustomAlert({ active: true, variant: "success", msg: data.err_msg })
//             setPhone({ isError: false, value: null, msg: "", country: 'us', code: '1' });
//             setEmail({ isError: false, value: "", msg: "", checking: false });
//           } else {
//             setCustomAlert({ active: true, variant: "error", msg: data.err_msg })
//             disableLoading();
//           }
//         })
//         .catch(error => {
//           console.log('signup error', error)
//           disableLoading();
//         });
//     } else {
//       disableLoading();
//       console.log('not all good', email.value, phone.value);
//     }
//   }

//   const onEmailChangeHandler = (e) => {
//     let value = e.target.value;
//     if (!value) {
//       setEmail({ value: value, isError: true, msg: "This is required field!" })
//     } else if (!EmailValidator.validate(value)) {
//       setEmail({ isError: false, msg: "Waiting for valid email...", value: value })
//     } else {
//       setEmail({ value: value, checking: true, msg: 'checking...' });
//       emailExists(value).then(res => {
//         setEmailFocus(true);
//         let data = res.data.dataException;
//         if (data.err_code === 200) {
//           setEmail({ value: value, isError: false, msg: data.err_msg, checking: false })
//         } else {
//           setEmail({ value: value, isError: true, msg: data.err_msg, checking: false })
//         }
//       }).catch(error => {
//         console.log('error', error)
//       });
//     }
//   }

//   return (
//     <div className="mainHeading">
//       <div className="col-md-12 text-center">
//         <p className="mainHeadingFont">SIGN UP</p>
//       </div>

//       {/* <div className="col-md-4 offset-md-4 col-sm-8 offset-sm-2 col-xs-10 offset-xs-1"> */}
//       <div className="col-xl-4 offset-xl-4 col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-xs-10 offset-xs-1">
//         <Card>
//           <div className="card-body">
//             <div className="container">
//               <h3 style={{ fontWeight: 'bold' }}>Sign Up</h3>
//               <p style={{ color: '#c2c2c2' }} className="mb-0">Logging in with an unregistered phone number <br />or social account creates a new Tripwerkz account.</p>
//               <MyTabs
//                 title="Sign Up"
//                 formState="signup"
//                 onSubmitHandler={signupHandler}
//                 loading={loading}
//                 email={email}
//                 setEmail={onEmailChangeHandler}
//                 password={phone}
//                 setPassword={setPhone}
//                 customAlert={customAlert}
//                 emailFocus={emailFocus}
//               />

//             </div>
//           </div>
//           <div className="card-cstm-footer">
//             <div className="container">
//               <p className="footer-para">Already have a Tripwerkz account?</p>
//               <Link to="/auth/login"><Button className="footer-btn">Log In</Button></Link>
//             </div>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// }

// export default injectIntl(connect(null, auth.actions)(Registration));
