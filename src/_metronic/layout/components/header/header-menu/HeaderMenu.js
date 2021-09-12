/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";

export function HeaderMenu({ layoutProps }) {
    const location = useLocation();
    const getMenuItemActive = (url) => {
        return checkIsActive(location, url) ? "menu-item-active" : "";
    }

    return <div
        id="kt_header_menu"
        className={`header-menu header-menu-left header-menu-mobile ${layoutProps.ktMenuClasses}`}
        {...layoutProps.headerMenuAttributes}
    >
        {/*begin::Header Nav*/}
        <ul className={`menu-nav ${layoutProps.ulClasses}`}>
            {/*begin::1 Level*/}
            {/* <li className={`menu-item menu-item-rel ${getMenuItemActive('/home')}`}>
                <NavLink className="menu-link" to="/home">
                    <span className="menu-text">Home</span>
                    {layoutProps.rootArrowEnabled && (<i className="menu-arrow" />)}
                </NavLink>
            </li> */}
            <li
                className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive('/home')}`}
                data-menu-toggle={layoutProps.menuDesktopToggle}
                aria-haspopup="true"
            >
                <NavLink className="menu-link menu-toggle" to="/home">
                    <span className="menu-text">Home</span>
                    <i className="menu-arrow"></i>
                </NavLink>
            </li>
            {/*end::1 Level*/}

            {/*Classic submenu*/}
            {/*begin::1 Level*/}
            <li
                data-menu-toggle={layoutProps.menuDesktopToggle}
                aria-haspopup="true"
                className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive('/travel-guidelines')}`}>
                <NavLink className="menu-link menu-toggle" to="/travel-guidelines">
                    <span className="menu-text">Travel Guidelines</span>
                    <i className="menu-arrow"></i>
                </NavLink>
            </li>
            {/*end::1 Level*/}

            {/*Mega submenu*/}
            {/*begin::1 Level*/}

            {/*Classic submenu*/}
            <li
                className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive('/go-travel')}`}
                data-menu-toggle={layoutProps.menuDesktopToggle}
                aria-haspopup="true"
            >
                <NavLink className="menu-link menu-toggle" to="/go-travel">
                    <span className="menu-text">Go Travel</span>
                    <i className="menu-arrow"></i>
                </NavLink>
            </li>
            <li
                className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive('/tickets')}`}
                data-menu-toggle={layoutProps.menuDesktopToggle}
                aria-haspopup="true"
            >
                <NavLink className="menu-link menu-toggle" to="/tickets">
                    <span className="menu-text">Tickets</span>
                    <i className="menu-arrow"></i>
                </NavLink>
            </li>
            <li
                className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive('/book-now')}`}
                data-menu-toggle={layoutProps.menuDesktopToggle}
                aria-haspopup="true"
            >
                <NavLink className="menu-link menu-toggle" to="/book-now">
                    <span className="menu-text">Book Now</span>
                    <i className="menu-arrow"></i>
                </NavLink>
            </li>
            {/*begin::1 Level*/}
            <li
                data-menu-toggle={layoutProps.menuDesktopToggle}
                aria-haspopup="true"
                className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive('/community')}`}>
                <NavLink className="menu-link menu-toggle" to="/community">
                    <span className="menu-text">Community</span>
                    <i className="menu-arrow"></i>
                </NavLink>
            </li>
            {/*end::1 Level*/}
            {/* <li data-menu-toggle={layoutProps.menuDesktopToggle}
                aria-haspopup="true"
                className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive('/user')}`}>
                <NavLink className="menu-link menu-toggle" to="/user">
                    <span className="svg-icon svg-icon-xl" style={{backgroundColor: 'white', padding: '6px', borderRadius: '50%'}}>
                        <SVG src={toAbsoluteUrl("/media/svg/icons/General/User.svg")} />
                    </span>
                </NavLink>
            </li> */}
        </ul>
        {/*end::Header Nav*/}
    </div>;
}
