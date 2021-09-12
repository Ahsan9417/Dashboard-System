// import React, { useEffect, useState } from "react";
// import { connect } from "react-redux";
// import { Link, useHistory, useLocation } from "react-router-dom";
// import { injectIntl } from "react-intl";
// import * as auth from "../_redux/authRedux";
// import { updatePassword, createPassword } from "../_redux/authCrud";
// // Custom Imports
// import { Card, Button, TextField } from '@material-ui/core';
// import Alert from '@material-ui/lab/Alert';
// import CircularProgress from '@material-ui/core/CircularProgress';
// function SetPassword() {
//   const history = useHistory();
//   const location = useLocation();
//   const [loading, setLoading] = useState(false);
//   const [email, setEmail] = useState({ isError: false, value: "", msg: "" });
//   const [password, setPassword] = useState({ isError: false, value: "", msg: "" });
//   const [cpassword, setCPassword] = useState({ isError: false, value: "", msg: "" });
//   const [customAlert, setCustomAlert] = useState({ active: false, variant: "", msg: "" });
//   const [isError, setIsError] = useState({ value: false, msg: "" });
//   const [validateLoader, setValidateLoader] = useState(true);
//   // const [promotion, setPromotion] = useState(false);

//   const enableLoading = () => {
//     setLoading(true);
//   };

//   const disableLoading = () => {
//     setLoading(false);
//   };

//   const onClickHandler = () => {
//     setCustomAlert({ ...customAlert, active: false });
//     enableLoading();
//     let isOK = true;

//     if (!password.value) {
//       setPassword({ ...password, isError: true, msg: "This is required field!" });
//       isOK = false;
//     }

//     if (!cpassword.value) {
//       setCPassword({ ...cpassword, isError: true, msg: "This is required field!" });
//       isOK = false;
//     }

//     if (password.value && cpassword.value && password.value !== cpassword.value) {
//       setCPassword({ ...cpassword, isError: true, msg: "Password not matched!" });
//       isOK = false;
//     }

//     if (isOK) {
//       updatePassword(email.value, password.value, cpassword.value)
//         .then(res => {
//           // props.register(accessToken);
//           disableLoading();
//           let data = res.data.dataException;
//           console.log('data', data)
//           if (data.err_code === 200) {
//             setCustomAlert({ active: true, variant: "success", msg: data.err_msg });
//             setEmail({ isError: false, value: "", msg: "" });
//             setPassword({ isError: false, value: "", msg: "" });
//             setCPassword({ isError: false, value: "", msg: "" });
//             setTimeout(() => history.push("/auth/login"), 3000);
//           } else {
//             setCustomAlert({ active: true, variant: "error", msg: data.err_msg })
//             // setTimeout(() => setCustomAlert({ active: false, variant: "", msg: "" }), 4000);
//             disableLoading();
//           }
//         })
//         .catch(error => {
//           console.log('set password error', error)
//           disableLoading();
//         });
//     } else {
//       disableLoading();
//       console.log('not all good', email.value, password.value, cpassword.value);
//     }
//   }

//   useEffect(() => {
//     // setTimeout(() => {
//     //   setValidateLoader(false);
//     // }, 4000);
//     let getidfromlocation = location.search;
//     getidfromlocation = getidfromlocation.replace("?id=", "");
//     if (getidfromlocation) {
//       createPassword(getidfromlocation)
//         .then(res => {
//           let data = res.data.dataException;
//           if (data.err_code === 200) {
//             setEmail({ isError: false, value: res.data.data, msg: "" });
//             setIsError({ value: false, msg: "" })
//             setValidateLoader(false);
//           } else {
//             setValidateLoader(false);
//             setIsError({ value: true, msg: data.err_msg });
//             setTimeout(() => history.push("/auth/registration"), 3000);
//           }
//         })
//         .catch(error => {
//           setValidateLoader(false);
//           console.log('set password error', error)
//         });
//     } else {
//       setValidateLoader(false);
//       setIsError({ value: true, msg: "Invalid Link!" });
//     }
//   }, []);

//   return (
//     <div className="mainHeading">
//       <div className="col-md-12 text-center">
//         <p className="mainHeadingFont">SET PASSWORD</p>
//       </div>

//       {/* <div className="col-md-4 offset-md-4 col-sm-8 offset-sm-2 col-xs-10 offset-xs-1"> */}
//       <div className="col-xl-4 offset-xl-4 col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-xs-10 offset-xs-1">
//         <Card style={{ minHeight: '350px' }}>
//           {
//             validateLoader ?
//               <CircularProgress style={{ display: 'block', margin: '175px auto' }} color="secondary" />
//               :
//               isError.value ?
//                 <>
//                   <div className="card-body">
//                     <div className="container text-center mt-25">
//                       <h2>Opps! Something went wrong...</h2>
//                       <p>{isError.msg}</p>
//                     </div>
//                   </div>
//                 </>
//                 :
//                 <>
//                   <div className="card-body">
//                     <div className="container">
//                       <h3 style={{ fontWeight: 'bold' }}>Set Password</h3>
//                       <p style={{ color: '#c2c2c2' }} className="mb-0">Logging in with an unregistered phone number <br />or social account creates a new Tripwerkz account.</p>

//                       {customAlert.active && <Alert severity={customAlert.variant} className="mb-3">{customAlert.msg}</Alert>}

//                       <TextField
//                         color="secondary"
//                         label="Email Address"
//                         id="outlined-margin-dense"
//                         margin="dense"
//                         fullWidth
//                         variant="outlined"
//                         className="roundedTextBox"
//                         value={email.value}
//                         onChange={e => setEmail({ value: e.target.value, isError: e.target.value === "", msg: e.target.value === "" ? "This is required field!" : "" })}
//                         helperText={email.msg}
//                         error={email.isError}
//                         disabled={true}
//                       />

//                       <TextField
//                         type="password"
//                         color="secondary"
//                         label="Enter Password"
//                         id="outlined-margin-dense"
//                         margin="dense"
//                         fullWidth
//                         variant="outlined"
//                         className="roundedTextBox"
//                         value={password.value}
//                         onChange={e => setPassword({ value: e.target.value, isError: e.target.value === "", msg: e.target.value === "" ? "This is required field!" : "" })}
//                         helperText={password.msg}
//                         error={password.isError}
//                       />

//                       <TextField
//                         type="password"
//                         color="secondary"
//                         label="Enter Confirm Password"
//                         id="outlined-margin-dense"
//                         margin="dense"
//                         fullWidth
//                         variant="outlined"
//                         className="roundedTextBox"
//                         value={cpassword.value}
//                         onChange={e => setCPassword({ value: e.target.value, isError: e.target.value === "", msg: e.target.value === "" ? "This is required field!" : "" })}
//                         helperText={cpassword.msg}
//                         error={cpassword.isError}
//                       />

//                       <button className="loginBtn" onClick={onClickHandler} disabled={loading}>Submit {loading && <span className="ml-3 spinner spinner-white"></span>}</button>
//                     </div>
//                   </div>
//                   <div className="card-cstm-footer">
//                     <div className="container">
//                       <p className="footer-para">Already have a Tripwerkz account?</p>
//                       <Link to="/auth/login"><Button className="footer-btn">Log In</Button></Link>
//                     </div>
//                   </div>
//                 </>
//           }
//         </Card>
//       </div>
//     </div>
//   );
// }

// export default injectIntl(connect(null, auth.actions)(SetPassword));
