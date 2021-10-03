import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import Common from './Common';
import Auth from './Auth';
import Country from './Country'
import CityRedux from './City';
import Province from './Province';
import Hotel from './Hotel';
import Users from './Users';

export default history =>
  combineReducers({
    router: connectRouter(history),
    common: Common,
    auth: Auth,
    country: Country,
    city: CityRedux,
    province : Province,
    hotel : Hotel,
    user: Users
  });
