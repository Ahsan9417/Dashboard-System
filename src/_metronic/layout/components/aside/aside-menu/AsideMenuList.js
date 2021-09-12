/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import {useLocation} from "react-router";
import {NavLink}  from "react-router-dom";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl, checkIsActive} from "../../../../_helpers";

export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
        ? ` ${!hasSubmenu && "menu-item-active"} menu-item-open `
        : "";
  };

  return (
      <>
        {/* begin::Menu Nav */}
        <ul className={`menu-nav ${layoutProps.ulClasses}`}>
          {/*begin::1 Level*/}
          <li
              className={`menu-item ${getMenuItemActive("/profile", false)}`}
              aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/profile">
            {/* <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")}/>
            </span> */}
              <span className="menu-text">My Profile</span>
            </NavLink>
          </li>
          {/*end::1 Level*/}

          {/*begin::1 Level*/}
          <li
              className={`menu-item ${getMenuItemActive("/account-setting", false)}`}
              aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/account-setting">
            {/* <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")}/>
            </span> */}
              <span className="menu-text">Login & Account Settings</span>
            </NavLink>
          </li>
          {/*end::1 Level*/}

          {/*begin::1 Level*/}
          <li
              className={`menu-item ${getMenuItemActive("/under-development", false)}`}
              aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/under-development">
            {/* <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")}/>
            </span> */}
              <span className="menu-text">Refer-my-friend!</span>
            </NavLink>
          </li>
          {/*end::1 Level*/}
          {/*begin::1 Level*/}
          <li
              className={`menu-item ${getMenuItemActive("/under-development", false)}`}
              aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/under-development">
            {/* <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")}/>
            </span> */}
              <span className="menu-text">My WerkzCredits</span>
            </NavLink>
          </li>
          {/*end::1 Level*/}
          {/*begin::1 Level*/}
          <li
              className={`menu-item ${getMenuItemActive("/under-development", false)}`}
              aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/under-development">
            {/* <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")}/>
            </span> */}
              <span className="menu-text">My Vouchers & Promo Codes</span>
            </NavLink>
          </li>
          {/*end::1 Level*/}
          {/*begin::1 Level*/}
          <li
              className={`menu-item ${getMenuItemActive("/under-development", false)}`}
              aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/under-development">
            {/* <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")}/>
            </span> */}
              <span className="menu-text">Buy Tripwerkz Gift Vouchers</span>
            </NavLink>
          </li>
          {/*end::1 Level*/}
          {/*begin::1 Level*/}
          <li
              className={`menu-item ${getMenuItemActive("/under-development", false)}`}
              aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/under-development">
            {/* <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")}/>
            </span> */}
              <span className="menu-text">My Booking & Purchases</span>
            </NavLink>
          </li>
          {/*end::1 Level*/}
          {/*begin::1 Level*/}
          <li
              className={`menu-item ${getMenuItemActive("/under-development", false)}`}
              aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/under-development">
            {/* <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")}/>
            </span> */}
              <span className="menu-text">My Reviews</span>
            </NavLink>
          </li>
          {/*end::1 Level*/}
          {/*begin::1 Level*/}
          <li
              className={`menu-item ${getMenuItemActive("/under-development", false)}`}
              aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/under-development">
            {/* <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")}/>
            </span> */}
              <span className="menu-text">Manage Payment Methods</span>
            </NavLink>
          </li>
          {/*end::1 Level*/}
          {/*begin::1 Level*/}
          <li
              className={`menu-item ${getMenuItemActive("/under-development", false)}`}
              aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/under-development">
            {/* <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")}/>
            </span> */}
              <span className="menu-text">Manage Booking Info</span>
            </NavLink>
          </li>
          {/*end::1 Level*/}
          {/*begin::1 Level*/}
          <li
              className={`menu-item ${getMenuItemActive("/under-development", false)}`}
              aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/under-development">
            {/* <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")}/>
            </span> */}
              <span className="menu-text">Wishlist</span>
            </NavLink>
          </li>
          {/*end::1 Level*/}

        </ul>

        {/* end::Menu Nav */}
      </>
  );
}
