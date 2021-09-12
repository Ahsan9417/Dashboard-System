import React, { Suspense, lazy, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./components/_redux/mainActions";
import { Redirect, Switch } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { ProfilePage } from "./pages/ProfilePage";
import { AccountSettingPage } from "./pages/AccountSettingPage";
import { DevelopmentPage } from "./pages/DevelopmentPage";


export default function BasePage() {
  const dispatch = useDispatch();
  const { auth } = useSelector(state => state);
  const headers = {
    'AuthorizationKey': auth.authToken,
    'Content-Type': 'application/json'
  }
  useEffect(() => {
    if (auth.user) {
      dispatch(actions.getCountryDetails(
        {
          "display-length": 999999,
          "display-start": 1,
          "sort-column": 0,
          "sort-direction": "ASC",
          "search-text": ""
        },
        headers
      ));
      dispatch(actions.getUserDetails(auth.user["email-id"], headers));
      dispatch(actions.getCityDetails({ "country-key": auth.user["country-key"] }, headers));
      dispatch(actions.getProvinceDetails({ "country-key": auth.user["country-key"] }, headers));
    }
  }, [dispatch]);

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {/* {
          <Redirect exact from="/" to="/profile" />
        }
        <ContentRoute path="/profile" component={ProfilePage} />
        <ContentRoute path="/account-setting" component={AccountSettingPage} />
        <ContentRoute path="/under-development" component={DevelopmentPage} /> */}
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}
