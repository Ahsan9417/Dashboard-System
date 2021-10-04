import countryMaster from "./countryMaster.js";
import cityMaster from "./cityMaster.js"
import userService from "./User/index.js";
import provinceService from "./Province/index.js";
import userRole from "./userRole/index.js";
import utilsService from "./utils/index.js";
import hotelService from "./hotel/index.js"

export const DataMethods = {
  countryService: countryMaster,
  cityService: cityMaster,
  userService: userService,
  hotelService: hotelService,
  provinceService : provinceService,
  userRoleService : userRole,
  utilsService : utilsService,
  userService : userService,

};
