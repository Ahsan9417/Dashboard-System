// import React, { useEffect, useState } from "react";
// import { Form } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import * as actions from "../components/_redux/mainActions";
// import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/high-res.css'
// import Alert from '@material-ui/lab/Alert';
// import { Typeahead } from 'react-bootstrap-typeahead';

// export const ProfilePage = (props) => {
//   const dispatch = useDispatch();
//   const { auth, main } = useSelector(state => state);
//   const [title, setTitle] = useState({ isError: false, value: "", msg: "" });
//   const [fname, setFname] = useState({ isError: false, value: "", msg: "" });
//   const [lname, setLname] = useState({ isError: false, value: "", msg: "" });
//   const [email, setEmail] = useState({ isError: false, value: "", msg: "" });
//   const [address, setAddress] = useState({ isError: false, value: "", msg: "" });
//   const [phone, setPhone] = useState({ isError: false, value: null, msg: "", country: 'us', code: '1' });
//   const [postalCode, setPostalCode] = useState({ isError: false, value: "", msg: "" });
//   const [country, setCountry] = useState({ isError: false, value: "", msg: "" });
//   const [city, setCity] = useState({ isError: false, value: "", msg: "" });
//   const [province, setProvince] = useState({ isError: false, value: "", msg: "" });

//   const [countries, setCountries] = useState([]);
//   const [cities, setCities] = useState([]);
//   const [provinces, setProvinces] = useState([]);
//   const [isChanged, setIsChanged] = useState(false);

//   const headers = {
//     'AuthorizationKey': auth.authToken,
//     'Content-Type': 'application/json'
//   }

//   const countryChangeHandler = e => {
//     console.log('e', e);
//     setIsChanged(true);
//     let key = e.length === 0 ? [] : e[0].id;
//     let countryObj = [];
//     if (key.length !== 0) {
//       main.countries.map(data => {
//         if (key === data["country-key"]) {
//           let selected = { id: data["country-key"], name: data["country-name"] };
//           countryObj.push(selected);
//         }
//       });
//     }

//     setCity({ value: [], isError: false, msg: "" })
//     setProvince({ value: [], isError: false === 0, msg: "" })

//     setCountry({ value: countryObj, isError: key.length === 0, msg: key.length === 0 ? "This is required field!" : "" })
//     if (key.length !== 0) {
//       dispatch(actions.getCityDetails({ "country-key": key }, headers)).then(data => {
//         console.log('yes data', data);
//         let options = [];
//         data.map(city => options.push({ id: city["city-key"], name: city["city-name"] }));
//         setCities(options);
//       });
//       dispatch(actions.getProvinceDetails({ "country-key": key }, headers)).then(data => {
//         console.log('yes data 2', data);
//         let options = [];
//         data.map(province => options.push({ id: province["province-key"], name: province["province-name"] }));
//         setProvinces(options);
//       });
//     }
//   }

//   const cityChangeHandler = e => {
//     let key = e.length === 0 ? [] : e[0].id;
//     let cityObj = [];
//     if (key.length !== 0) {
//       main.cities.map(data => {
//         if (key === data["city-key"]) {
//           let selected = { id: data["city-key"], name: data["city-name"] };
//           cityObj.push(selected);
//         }
//       });
//     }

//     setCity({ value: cityObj, isError: key.length === 0, msg: key.length === 0 ? "This is required field!" : "" })
//   }

//   const provinceChangeHandler = e => {
//     let key = e.length === 0 ? [] : e[0].id;
//     let provinceObj = [];
//     if (key.length !== 0) {
//       main.provinces.map(data => {
//         if (key === data["province-key"]) {
//           let selected = { id: data["province-key"], name: data["province-name"] };
//           provinceObj.push(selected);
//         }
//       });
//     }

//     setProvince({ value: provinceObj, isError: key.length === 0, msg: key.length === 0 ? "This is required field!" : "" })
//     // setProvince({ value: key, isError: key === "", msg: key === "" ? "This is required field!" : "" })
//   }

//   const updateSettingHandler = () => {
//     // let countryMatched = false;
//     // main.countries.map(country => {
//     //   if (country['country-key'] === country.value) {
//     //     console.log("country['country-key']", country['country-key'])
//     //     countryMatched = true;
//     //   }
//     // });

//     // if (!countryMatched) {
//     //   setCountry({ isError: true, value: "", msg: "This is required field!"});
//     //   setCity({ isError: true, value: "", msg: "This is required field!"});
//     //   setProvince({ isError: true, value: "", msg: "This is required field!"});
//     // }


//     let isOK = true;
//     if (!title.value) {
//       setTitle({ ...title, isError: true, msg: "This is required field!" });
//       isOK = false;
//     }

//     if (!fname.value) {
//       setFname({ ...fname, isError: true, msg: "This is required field!" });
//       isOK = false;
//     }

//     if (!lname.value) {
//       setLname({ ...lname, isError: true, msg: "This is required field!" });
//       isOK = false;
//     }

//     if (!address.value) {
//       setAddress({ ...address, isError: true, msg: "This is required field!" });
//       isOK = false;
//     }

//     if (!postalCode.value) {
//       setPostalCode({ ...postalCode, isError: true, msg: "This is required field!" });
//       isOK = false;
//     }

//     if (!phone.value || phone.value === phone.code) {
//       setPhone({ ...phone, isError: true, msg: "This is required field!" });
//       isOK = false;
//     }

//     if (country.value.length === 0) {
//       setCountry({ ...country, isError: true, msg: "This is required field!" });
//       isOK = false;
//     }

//     if (city.value.length === 0) {
//       setCity({ ...city, isError: true, msg: "This is required field!" });
//       isOK = false;
//     }

//     if (province.value.length === 0) {
//       setProvince({ ...province, isError: true, msg: "This is required field!" });
//       isOK = false;
//     }

//     if (isOK) {
//       let body = {
//         "title": title.value,
//         "first-name": fname.value,
//         "last-name": lname.value,
//         "email-id": email.value,
//         "contact-no": phone.value,
//         "address": address.value,
//         "city-key": city.value[0].id,
//         "postal-code": postalCode.value,
//         "province-key": province.value[0].id,
//         "country-key": country.value[0].id
//       }
//       dispatch(actions.updateUserDetails(body, headers));
//     }
//   }

//   useEffect(() => {
//     console.log('use effect', main)
//     if (auth.user && !isChanged) {
//       dispatch(actions.getUserDetails(auth.user["email-id"], headers)).then(user => {
//         if (user && main.countries) {
//           let countryObj = [];
//           if (user["country-key"] !== null) {
//             main.countries.map(data => {
//               if (user["country-key"] === data["country-key"]) {
//                 let selected = { id: data["country-key"], name: data["country-name"] };
//                 countryObj.push(selected);
//               }
//             });
//           }

//           let cityObj = [];
//           if (main.cities) {
//             if (user["city-key"] !== null) {
//               main.cities.map(data => {
//                 if (user["city-key"] === data["city-key"]) {
//                   let selected = { id: data["city-key"], name: data["city-name"] };
//                   cityObj.push(selected);
//                 }
//               });
//             }
//           }

//           console.log({ cityObj })

//           let provinceObj = [];
//           if (main.provinces) {
//             if (user["province-key"] !== null) {
//               main.provinces.map(data => {
//                 if (user["province-key"] === data["province-key"]) {
//                   let selected = { id: data["province-key"], name: data["province-name"] };
//                   provinceObj.push(selected);
//                 }
//               });
//             }
//           }
//           setTitle({ isError: false, value: user.title, msg: "" });
//           setFname({ isError: false, value: user["first-name"], msg: "" });
//           setLname({ isError: false, value: user["last-name"], msg: "" });
//           setEmail({ isError: false, value: user["email-id"], msg: "" });
//           setAddress({ isError: false, value: user["address"] === null ? "" : user["address"], msg: "" });
//           setPhone({ isError: false, value: user["contact-no"] && user["contact-no"] !== null && user["contact-no"] !== "" ? user["contact-no"] : null, msg: "", country: 'us', code: '1' });
//           setPostalCode({ isError: false, value: user["postal-code"] === null ? "" : user["postal-code"], msg: "" });
//           setCountry({ isError: false, value: countryObj, msg: "" });
//           setCity({ isError: false, value: cityObj, msg: "" });
//           setProvince({ isError: false, value: provinceObj, msg: "" });
//         }
//       });
//       if (main.countries) {
//         let options = [];
//         main.countries.map(country => options.push({ id: country["country-key"], name: country["country-name"] }));
//         setCountries(options);
//       }

//       if (main.cities) {
//         let options = [];
//         main.cities.map(city => options.push({ id: city["city-key"], name: city["city-name"] }));
//         setCities(options);
//       }

//       if (main.provinces) {
//         let options = [];
//         main.provinces.map(province => options.push({ id: province["province-key"], name: province["province-name"] }));
//         setProvinces(options);
//       }
//     }
//   }, [dispatch, main.countries, main.cities, main.provinces]);

//   return (
//     <div className={`card card-custom card-stretch`}>
//       {/* begin::Header */}
//       <div className="card-header border-0 py-5">
//         <h3 className="card-title align-items-start flex-column">
//           <span className="card-label font-weight-bolder text-dark">
//             Account Information
//           </span>
//           <span className="mt-2 font-weight-light font-size-sm">
//             This information is used to autofill your details to make it easier for you to make your bookings. Your details are stored securely and will not be shared publicly.
//           </span>
//         </h3>
//       </div>
//       {/* end::Header */}

//       {/* begin::Body */}
//       <div className="card-body py-0">
//         {main.updateSettingStat && <Alert severity={main.updateSettingStat.status} className="mb-3">{main.updateSettingStat.msg}</Alert>}
//         <div className="row mb-1">
//           <div className="col-md-2">
//             <Form.Group controlId="formGridState">
//               <Form.Label>Title</Form.Label>
//               <Form.Control
//                 as="select"
//                 className="rounded-shape"
//                 value={title.value}
//                 onChange={e => setTitle({ value: e.target.value, isError: e.target.value === "", msg: e.target.value === "" ? "This is required field!" : "" })}
//                 isInvalid={title.isError}
//               // isValid={!title.isError}
//               >
//                 <option value="">Choose...</option>
//                 <option value="mr">MR.</option>
//                 <option value="ms">MS.</option>
//               </Form.Control>
//             </Form.Group>
//           </div>
//           <div className="col-md-5">
//             <Form.Group controlId="formBasicEmail">
//               <Form.Label>First Name (as on travel document)</Form.Label>
//               <Form.Control type="text" className="rounded-shape" value={fname.value}
//                 onChange={e => setFname({ value: e.target.value, isError: e.target.value === "", msg: e.target.value === "" ? "This is required field!" : "" })}
//                 isInvalid={fname.isError}
//               />
//             </Form.Group>
//           </div>
//           <div className="col-md-5">
//             <Form.Group controlId="formBasicEmail">
//               <Form.Label>Last Name (as on travel document)</Form.Label>
//               <Form.Control type="text" className="rounded-shape" value={lname.value}
//                 onChange={e => setLname({ value: e.target.value, isError: e.target.value === "", msg: e.target.value === "" ? "This is required field!" : "" })}
//                 isInvalid={lname.isError}
//               />
//             </Form.Group>
//           </div>
//         </div>

//         <div className="row mb-1">
//           <div className="col-md-5">
//             <Form.Group controlId="formBasicEmail">
//               <Form.Label>Email (for booking confirmation)</Form.Label>
//               <Form.Control type="email" className="rounded-shape" value={email.value} disabled />
//             </Form.Group>
//           </div>

//           <div className="col-md-5">
//             <Form.Group controlId="formBasicEmail">
//               <Form.Label>Address</Form.Label>
//               <Form.Control type="text" className="rounded-shape" value={address.value}
//                 onChange={e => setAddress({ value: e.target.value, isError: e.target.value === "", msg: e.target.value === "" ? "This is required field!" : "" })}
//                 isInvalid={address.isError}
//               />
//             </Form.Group>
//           </div>
//         </div>

//         <div className="row mb-1">
//           <div className="col-md-5">
//             <Form.Group controlId="formBasicEmail">
//               <Form.Label>Phone number (in case of emergency)</Form.Label>
//               {/* <Form.Control type="text" className="rounded-shape" /> */}
//               <PhoneInput
//                 enableSearch={true}
//                 inputClass={`countryField1 ${phone.isError ? "error-field1" : ""}`}
//                 buttonClass={phone.isError ? "error-field1" : ""}
//                 searchStyle={{ width: '93%' }}
//                 value={phone.value}
//                 onChange={(data, country) => setPhone({ isError: data === "", msg: data === "" ? "This is required field!" : "", value: data, country: country.countryCode, code: country.dialCode })}
//                 country={phone.country}
//                 error={true}
//                 disableSearchIcon={true}
//               />
//             </Form.Group>
//             {/* {phone.isError && <span className="phoneErrorLabel">{phone.msg}</span>} */}
//           </div>
//           <div className="col-md-5">
//             <Form.Group controlId="formBasicEmail">
//               <Form.Label>Postal Code</Form.Label>
//               <Form.Control type="text" className="rounded-shape" value={postalCode.value}
//                 onChange={e => setPostalCode({ value: e.target.value, isError: e.target.value === "", msg: e.target.value === "" ? "This is required field!" : "" })}
//                 isInvalid={postalCode.isError}
//               />
//             </Form.Group>
//           </div>
//         </div>

//         <div className="row mb-1">
//           <div className="col-md-4">
//             <Form.Group controlId="formBasicEmail">
//               <Form.Label>Country/region of travel document</Form.Label>
//               <Typeahead
//                 className="rounded-shape"
//                 id="basic-typeahead-single"
//                 labelKey="name"
//                 onChange={countryChangeHandler}
//                 isInvalid={country.isError}
//                 options={countries}
//                 placeholder="Choose a country..."
//                 selected={country.value}
//               />
//               {/* <Form.Control as="select" className="rounded-shape" onChange={countryChangeHandler} value={country.value} isInvalid={country.isError}>
//                 <option value="">Choose...</option>
//                 {
//                   main.countries &&
//                   main.countries.map(country => <option value={country["country-key"]} key={country["country-key"]}>{country["country-name"]}</option>)
//                 }
//               </Form.Control> */}
//             </Form.Group>
//           </div>

//           <div className="col-md-4">
//             <Form.Group controlId="formBasicEmail">
//               <Form.Label>Province(state) of travel document</Form.Label>
//               <Typeahead
//                 className="rounded-shape"
//                 id="basic-typeahead-single"
//                 labelKey="name"
//                 onChange={provinceChangeHandler}
//                 isInvalid={province.isError}
//                 options={provinces}
//                 placeholder="Choose a province..."
//                 selected={province.value}
//               />
//               {/* <Form.Control as="select" className="rounded-shape" value={province.value}
//                 onChange={e => setProvince({ value: e.target.value, isError: e.target.value === "", msg: e.target.value === "" ? "This is required field!" : "" })}
//                 isInvalid={province.isError}
//               >
//                 <option value="">Choose...</option>
//                 {
//                   main.provinces &&
//                   main.provinces.map(province => <option value={province["province-key"]} key={province["province-key"]}>{province["province-name"]}</option>)
//                 }
//               </Form.Control> */}
//             </Form.Group>
//           </div>

//           <div className="col-md-4">
//             <Form.Group controlId="formBasicEmail">
//               <Form.Label>City of travel document</Form.Label>
//               <Typeahead
//                 className="rounded-shape"
//                 id="basic-typeahead-single"
//                 labelKey="name"
//                 onChange={cityChangeHandler}
//                 isInvalid={city.isError}
//                 options={cities}
//                 placeholder="Choose a city..."
//                 selected={city.value}
//               />
//               {/* <Form.Control as="select" className="rounded-shape" value={city.value}
//                 onChange={e => setCity({ value: e.target.value, isError: e.target.value === "", msg: e.target.value === "" ? "This is required field!" : "" })}
//                 isInvalid={city.isError}
//               >
//                 <option value="">Choose...</option>
//                 {
//                   main.cities &&
//                   main.cities.map(city => <option value={city["city-key"]} key={city["city-key"]}>{city["city-name"]}</option>)
//                 }
//               </Form.Control> */}
//             </Form.Group>
//           </div>
//         </div>

//         <div className="row mb-5">
//           <div className="col-md-2">
//             <button className="loginBtn" onClick={updateSettingHandler} disabled={main.updateSettingLoader}>Save {main.updateSettingLoader && <span className="ml-3 spinner spinner-white"></span>}</button>
//           </div>
//         </div>
//       </div>
//       {/* end::Body */}
//     </div>
//   );
// };
