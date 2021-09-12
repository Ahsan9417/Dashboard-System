import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../components/_redux/mainActions";
import Alert from '@material-ui/lab/Alert';
export const AccountSettingPage = () => {
  const dispatch = useDispatch();
  const { auth, main } = useSelector(state => state);
  const [currentPassword, setCurrentPassword] = useState({ isError: false, value: "", msg: "" });
  const [newPass, setNewPass] = useState({ isError: false, value: "", msg: "" });
  const [cNewPass, setCNewPass] = useState({ isError: false, value: "", msg: "" });

  const headers = {
    'AuthorizationKey': auth.authToken,
    'Content-Type': 'application/json'
  }

  const updatePasswordHandler = () => {
    setCNewPass({ ...cNewPass, isError: false, msg: "" });
    setNewPass({ ...newPass, isError: false, msg: "" });
    let isOK = true;
    if (!currentPassword.value) {
      setCurrentPassword({ ...currentPassword, isError: true, msg: "This is required field!" });
      isOK = false;
    }

    if (!newPass.value) {
      setNewPass({ ...newPass, isError: true, msg: "This is required field!" });
      isOK = false;
    }

    if (!cNewPass.value) {
      setCNewPass({ ...cNewPass, isError: true, msg: "This is required field!" });
      isOK = false;
    }

    if (newPass.value && cNewPass.value && newPass.value !== cNewPass.value) {
      setCNewPass({ ...cNewPass, isError: true, msg: "Password not matched!" });
      setNewPass({ ...newPass, isError: true, msg: "Password not matched!" });
      isOK = false;
    }

    if (isOK) {
      let body = {
        "email-id": auth.user['email-id'],
        "old-password": currentPassword.value,
        "password": newPass.value,
        "confirm-password": cNewPass.value
       }
       
      dispatch(actions.updateUserPassword(body, headers));
    }
  }

  return (
    <div className={`card card-custom card-stretch`}>
      {/* begin::Header */}
      <div className="card-header border-0 py-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label font-weight-bolder text-dark">
            Manage login methods
          </span>
          <span className="mt-2 font-weight-light font-size-sm">
            Manage how you log in to your Tripwerkz account. You can use your email address or phone number.
          </span>
        </h3>
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className="card-body py-0">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex flex-column align-items-cente py-2 w-75">
              <p className="text-dark-75 font-weight-bold font-size-lg mb-1">
                Email & phone number
              </p>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="custom-block">
                  <div class="float-left">
                    <p className="font-weight-bold mb-0">Email address</p>
                    <p className="text-muted mt-0 mb-0">owaisraza.techlogix@gmail.com</p>
                  </div>
                  <div class="float-right">
                    <a href="#">Add as login method</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="custom-block">
                  <div class="float-left">
                    <p className="font-weight-bold mb-0">Phone number</p>
                    <p className="text-muted mt-0 mb-0">+92 312 1234567</p>
                  </div>
                  <div class="float-right">
                    <a href="#">Change</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-12">
            <div className="d-flex flex-column align-items-cente py-2 w-75">
              <p className="text-dark-75 font-weight-bold font-size-lg mb-1">
                Social media
              </p>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="custom-block">
                  <div class="float-left">
                    <p className="font-weight-bold mb-0">Facebook</p>
                    <p className="text-muted mt-0 mb-0">&nbsp;</p>
                  </div>
                  <div class="float-right">
                    <a href="#" className="btn btn-warning linkBtn">Link</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="custom-block">
                  <div class="float-left">
                    <p className="font-weight-bold mb-0">Google</p>
                    <p className="text-muted mt-0 mb-0">owaisraza.techlogix@gmail.com</p>
                  </div>
                  <div class="float-right">
                    <a href="#">Unlink</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-6 mb-3">
                <div className="custom-block">
                  <div class="float-left">
                    <p className="font-weight-bold mb-0">WeChat</p>
                    <p className="text-muted mt-0 mb-0">&nbsp;</p>
                  </div>
                  <div class="float-right">
                    <a href="#" className="btn btn-warning linkBtn">Link</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="custom-block">
                  <div class="float-left">
                    <p className="font-weight-bold mb-0">Apple</p>
                    <p className="text-muted mt-0 mb-0">&nbsp;</p>
                  </div>
                  <div class="float-right">
                    <a href="#" className="btn btn-warning linkBtn">Link</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end::Body */}

      {/* begin::Header */}
      <div className="card-header border-0 py-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label font-weight-bolder text-dark">
            Change password
          </span>
          <span className="mt-2 font-weight-light font-size-sm">
            Try changing your password regularly to make your account safer.
          </span>
        </h3>
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className="card-body py-0">
        <div className="row">
          <div className="col-md-7">
            {main.updatePasswordStat && <Alert severity={main.updatePasswordStat.status} className="mb-3">{main.updatePasswordStat.msg}</Alert>}
            {cNewPass.isError && cNewPass.msg === "Password not matched!" && <Alert severity="error" className="mb-3">{cNewPass.msg}</Alert>}
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="password" placeholder="Enter current password" className="rounded-shape"
                value={currentPassword.value}
                onChange={e => setCurrentPassword({ value: e.target.value, isError: e.target.value === "", msg: e.target.value === "" ? "This is required field!" : "" })}
                isInvalid={currentPassword.isError}
              />
            </Form.Group>
          </div>
        </div>
        <p>New Password (8-20 characters with atleast 11 number, 1 letter and 1 special symbol)</p>
        <div className="row mb-0">
          <div className="col-md-7">
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Control type="password" placeholder="Password" className="rounded-shape"
                value={newPass.value}
                onChange={e => setNewPass({ value: e.target.value, isError: e.target.value === "", msg: e.target.value === "" ? "This is required field!" : "" })}
                isInvalid={newPass.isError}
              />
            </Form.Group>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7">
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="password" placeholder="Confirm Password" className="rounded-shape"
                value={cNewPass.value}
                onChange={e => setCNewPass({ value: e.target.value, isError: e.target.value === "", msg: e.target.value === "" ? "This is required field!" : "" })}
                isInvalid={cNewPass.isError}
              />
            </Form.Group>
          </div>
        </div>
        <div className="row mb-1">
          <div className="col-md-2">
            <button className="loginBtn" onClick={updatePasswordHandler} disabled={main.updatePasswordLoader}>Save {main.updatePasswordLoader && <span className="ml-3 spinner spinner-white"></span>}</button>
          </div>
        </div>
      </div>
      {/* end::Body */}

      {/* begin::Header */}
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label font-weight-bolder text-dark">
            Notification settings
          </span>
          <span className="mt-2 font-weight-light font-size-sm">
            What notifications do you want to see?
          </span>
        </h3>
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className="card-body py-0">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex flex-column align-items-cente py-2 w-75">
              <p className="text-dark-75 font-weight-bold font-size-lg mb-1">
                Updates and promotions
              </p>
              <span className="text-muted font-weight-bold">
                Be first to know about our latest campaigns, promo codes, discounts and new featues
              </span>
            </div>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check inline type="checkbox" label="Email" />
              <Form.Check inline type="checkbox" label="SMS" className="ml-20" />
            </Form.Group>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="d-flex flex-column align-items-cente py-2 w-75">
              <p className="text-dark-75 font-weight-bold font-size-lg mb-1">
                Reminders
              </p>
              <span className="text-muted font-weight-bold">
                Get reminders about your cart, payments, review and reffering friends
              </span>
            </div>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check inline type="checkbox" label="Email" />
              <Form.Check inline type="checkbox" label="SMS" className="ml-20" />
            </Form.Group>
          </div>
        </div>

        <div className="row mb-1">
          <div className="col-md-12">
            <div className="d-flex flex-column align-items-cente py-2 w-75">
              <p className="text-dark-75 font-weight-bold font-size-lg mb-1">
                Account Notifications
              </p>
              <span className="text-muted font-weight-bold">
                For important notifications on booking summaries, vouchers and cancellations
              </span>
            </div>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check inline type="checkbox" label="Email" />
              <Form.Check inline type="checkbox" label="SMS" className="ml-20" />
            </Form.Group>
          </div>
        </div>

        <div className="row mb-1">
          <div className="col-md-2">
            <button className="loginBtn">Update</button>
          </div>
        </div>
      </div>
      {/* end::Body */}

      {/* begin::Header */}
      <div className="card-header border-0 py-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label font-weight-bolder text-dark">
            Delete account
          </span>
          <span className="mt-2 font-weight-light font-size-sm">
            If you want to delete account and any personal data on Tripwerkz
          </span>
        </h3>
      </div>
      {/* end::Header */}
    </div>
  );
};
