// import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// // import SwipeableViews from 'react-swipeable-views';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import MailOutlineIcon from '@material-ui/icons/MailOutline';
// import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
// import { TextField, MenuItem } from '@material-ui/core';
// import Alert from '@material-ui/lab/Alert';
// import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/high-res.css'

// function TabPanel(props) {
//     const { children, value, index, ...other } = props;
//     // const classes = useStyles();
//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`full-width-tabpanel-${index}`}
//             aria-labelledby={`full-width-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box p={3}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }

// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.any.isRequired,
//     value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//     return {
//         id: `full-width-tab-${index}`,
//         'aria-controls': `full-width-tabpanel-${index}`,
//     };
// }

// const useStyles = makeStyles((theme) => ({
//     labelContainer: {
//         width: "auto",
//         padding: 0
//     },
//     iconLabelWrapper1: {
//         flexDirection: "row",
//         justifyContent: 'flex-start',
//         textTransform: 'capitalize',
//         fontSize: '15px'
//     },
//     tabStyle: {
//         boxShadow: 'none',
//         backgroundColor: '#fff',
//         borderBottom: '1px solid #ccc'
//     }
// }));

// export default function MyTabs({ title, formState, loading, onSubmitHandler, email, setEmail, password, setPassword, customAlert, emailFocus = false }) {
//     const classes = useStyles();
//     const theme = useTheme();
//     const [value, setValue] = React.useState(0);

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };

//     // const handleChangeIndex = (index) => {
//     //     setValue(index);
//     // };

//     return (
//         <div>
//             <AppBar position="static" color="default" className={classes.tabStyle}>
//                 <Tabs
//                     value={value}
//                     onChange={handleChange}
//                     indicatorColor="secondary"
//                     textColor="secondary"
//                     variant="fullWidth"
//                     aria-label="Switch Account"
//                 >
//                     <Tab
//                         label="Email Address"
//                         classes={{
//                             wrapper: classes.iconLabelWrapper1,
//                             // labelContainer: classes.labelContainer
//                         }}
//                         icon={<MailOutlineIcon className="mr-4 mb-0" />}
//                         {...a11yProps(0)}
//                     />
//                     <Tab label="Phone Number"
//                         disabled
//                         classes={{
//                             wrapper: classes.iconLabelWrapper1,
//                             // labelContainer: classes.labelContainer
//                         }}
//                         icon={<PhoneOutlinedIcon className="mr-4 mb-0" />}
//                         {...a11yProps(1)}
//                     />
//                 </Tabs>
//             </AppBar>
//             {/* <SwipeableViews
//                 axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//                 index={value}
//                 onChangeIndex={handleChangeIndex}
//                 className="swiper-cstm"
//             > */}
//             <TabPanel value={value} index={0} dir={theme.direction} className="removePadding">
//                 {customAlert.active && <Alert severity={customAlert.variant} className="mb-3">{customAlert.msg}</Alert>}
//                 {console.log('above', emailFocus)}
//                 <TextField
//                     type="email"
//                     color="secondary"
//                     label="Email Address"
//                     id="outlined-margin-dense"
//                     margin="dense"
//                     fullWidth
//                     variant="outlined"
//                     className="roundedTextBox"
//                     value={email.value}
//                     onChange={e => setEmail(e)}
//                     error={email.isError}
//                     helperText={email.msg}
//                     disabled={email.checking}
//                     autoFocus={emailFocus}
//                 />

//                 {
//                     formState === 'login' ?
//                         <TextField
//                             type="password"
//                             color="secondary"
//                             label="Enter Password"
//                             id="outlined-margin-dense"
//                             margin="dense"
//                             fullWidth
//                             variant="outlined"
//                             className="roundedTextBox"
//                             value={password.value}
//                             helperText={password.msg}
//                             error={password.isError}
//                             onChange={e => setPassword({ isError: e.target.value === "", value: e.target.value })}
//                         />
//                         :
//                         <>
//                             <PhoneInput
//                                 enableSearch={true}
//                                 inputClass={`countryField ${password.isError ? "error-field" : ""}`}
//                                 buttonClass={password.isError ? "error-field" : ""}
//                                 searchStyle={{ width: '93%' }}
//                                 value={password.value}
//                                 onChange={(phone, country) => setPassword({ isError: phone === "", msg: phone === "" ? "This is required field!" : "", value: phone, country: country.countryCode, code: country.dialCode })}
//                                 country={password.country}
//                                 defaultErrorMessage="test"
//                                 error={true}
//                                 disableSearchIcon={true}
//                             />
//                             {password.isError && <span className="phoneErrorLabel">{password.msg}</span>}

//                         </>
//                 }

//                 <button className="loginBtn" onClick={onSubmitHandler}>{title} {loading && <span className="ml-3 spinner spinner-white"></span>}</button>
//                 {
//                     formState === 'login' &&
//                     <div className="row mt-4">
//                         <div className="col-md-6 col-sm-6 col-xs-6">
//                             <p className="textStyle1">
//                                 Remember me
//                                 <input
//                                     type="checkbox"
//                                     name="remember"
//                                     className="ml-3"
//                                 />
//                             </p>
//                         </div>
//                         <div className="col-md-6 col-sm-6 col-xs-6">
//                             <Link to="/auth/forgot-password" className="textStyle1 float-right">Forgot your password?</Link>
//                         </div>
//                     </div>
//                 }
//             </TabPanel>
//             <TabPanel value={value} index={1} dir={theme.direction} className="removePadding">
//                 <div className="row mt-4">
//                     <div className="col-md-4 col-sm-12">
//                         {/* <TextField
//                             color="secondary"
//                             label="Code"
//                             id="outlined-margin-dense"
//                             margin="dense"
//                             fullWidth
//                             variant="outlined"
//                             className="roundedTextBox"
//                             select
//                         >
//                             {
//                                 mobCodes.map((option) => (
//                                     Object.keys(option).map(function (keyName) {
//                                         return (
//                                             <MenuItem key={option[keyName]} value={option[keyName]}>
//                                                 {keyName} - +{option[keyName]}
//                                             </MenuItem>
//                                         )
//                                     })
//                                 ))
//                             }
//                         </TextField> */}
//                     </div>
//                     <div className="col-md-8 col-sm-12">
//                         <TextField
//                             color="secondary"
//                             label="Phone Number"
//                             id="outlined-margin-dense"
//                             margin="dense"
//                             fullWidth
//                             variant="outlined"
//                             className="roundedTextBox"
//                         />
//                     </div>
//                 </div>
//                 <button className="sendCodeBtn">Send Verification Code</button>
//                 <button className="loginBtn">{title}</button>
//             </TabPanel>
//             {/* </SwipeableViews> */}
//             {
//                 formState === 'signup' &&
//                 <div className="row">
//                     <div className="col-md-1">
//                         <input
//                             type="checkbox"
//                             name="remember"
//                             className="mr-3 cstm-checkbox"
//                         />
//                     </div>
//                     <div className="col-md-11">
//                         <span style={{ color: '#c2c2c2' }}>
//                             Yes! I would like to receive special offers,<br />
//                             promotion and other information from Klook.<br />
//                             I understand I can unsubscribe at any time.
//                         </span>
//                     </div>
//                 </div>
//             }
//         </div>
//     );
// }
