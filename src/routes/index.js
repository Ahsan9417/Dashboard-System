import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import CountryMaster from './Pages/CountryMaster/index.js';
import ProvinceMaster from './Pages/ProvinceMaster';
import CityMaster from './Pages/CityMaster';
import Error404 from './Pages/404';
import Login from './Auth/Login';
import Register from './Auth/Register';
import ForgotPasswordPage from './Auth/ForgotPassword';
import HotelTypeMaster from './Pages/HotelTypeMaster/index.js';
import Users from './Pages/Users';
import ChangePassowrd from './Pages/ChangePassword/index.js';
import UserPrivilege from './Pages/UserPrivilege/index.js';

const RestrictedRoute = ({ component: Component, ...rest }) => {
  const { authUser } = useSelector(({ auth }) => auth);
  return (
    <Route
      {...rest}
      render={props =>
        authUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

const Routes = () => {
  const { authUser } = useSelector(({ auth }) => auth);
  const location = useLocation();

  if (location.pathname === '' || location.pathname === '/') {
    return <Redirect to={'/signin'} />;
  } else if (
    authUser &&
    (location.pathname === '/signin' || location.pathname === '/signup' || location.pathname === '/forgot-password')
  ) {
    return <Redirect to={'/country-master'} />;
  }

  return (
    <React.Fragment>
      <Switch>
        <RestrictedRoute path="/country-master" component={CountryMaster} />
        <RestrictedRoute path="/province-master" component={ProvinceMaster} />
        <RestrictedRoute path="/city-master" component={CityMaster} />
        <RestrictedRoute path="/hotel-type-master" component={HotelTypeMaster} />
        <RestrictedRoute path="/users" component={Users} />
        <RestrictedRoute path="/change-password" component={ChangePassowrd} />
        <RestrictedRoute path="/user-privilege" component={UserPrivilege} />
        <Route path="/signup" component={Register} />
        <Route path="/forgot-password" component={ForgotPasswordPage} />
        <Route path="/signin" component={Login} />
        <Route component={Error404} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
