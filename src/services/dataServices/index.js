import countryMaster from "./countryMaster.js";
import cityMaster from "./cityMaster.js"
import userService from "./User/index.js";
import hotelService from "./User/index.js";
import provinceService from "./Province/index.js";
import userRole from "./userRolel/index.js";

export const DataMethods = {
  countryService: countryMaster,
  cityService: cityMaster,
  userService: userService,
  hotelService: hotelService,
  provinceService : provinceService,
  userRoleService : userRole

};
