import React from "react";
import { toAbsoluteUrl } from "../../../_helpers";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
export function FooterCompact({
  today,
  footerClasses,
  footerContainerClasses,
}) {
  const iconStyle = {
    color: '#287cbc',
    fontSize: '45px',
    margin: '0 12px'
  }

  const footerNavStyle = {
    listStyle: 'none',
    padding: 0,
    fontWeight: '500',
    lineHeight: '30px'
  }
  return (
    <>
      {/* begin::Footer */}
      <div
        className={`footer bg-white pt-4 flex-lg-column  ${footerClasses}`}
        id="kt_footer"
      >
        {/* begin::Container */}
        <div className="container mb-5">
          {/* <div className="row">
            <div className="col-md-4  col-sm-12 text-center">
              <div className="mb-4">
                <img
                  className="logo-default max-h-40px"
                  alt="Logo"
                  src={toAbsoluteUrl("/media/logos/logonew.png")}
                />
              </div>
              <p style={{ textAlign: "justify", fontSize: '14px', padding: '10px' }}>Tripwerkz is Asia’s leading online travel company that provides online travel booking services such as hotel reservation, airline ticket, packaged and customized tours and other miscellaneous travel management applications.</p>
              <div className="mb-5">
                <a href="https://facebook.com" target="_blank">
                  <FacebookIcon style={iconStyle} />
                </a>
                <a href="https://twitter.com" target="_blank">
                  <TwitterIcon style={iconStyle} />
                </a>
                <a href="https://instagram.com" target="_blank">
                  <InstagramIcon style={iconStyle} />
                </a>
              </div>
            </div>
            <div className="offset-md-1 col-md-7 col-sm-12">
              <div className="row">
                <div className="col-sm-4 text-center">
                  <h3 style={{ fontWeight: 'bold' }}>ABOUT US</h3>
                  <ul style={footerNavStyle}>
                    <li>Blogs</li>
                    <li>Careers</li>
                    <li>Site Map</li>
                  </ul>
                </div>
                <div className="col-sm-4 text-center">
                  <h3 style={{ fontWeight: 'bold' }}>TERMS OF USE</h3>
                  <ul style={footerNavStyle}>
                    <li>FAQ Page</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>
                  </ul>
                </div>
                <div className="col-sm-4 text-center">
                  <h3 style={{ fontWeight: 'bold' }}>FOR BUSINESS</h3>
                  <ul style={footerNavStyle}>
                    <li>Merchant/Supplier Access</li>
                    <li>Partners Access</li>
                    <li>Agent Access</li>
                    <li>Content Creator Access</li>
                    <li>Partner with Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div
          style={{ backgroundColor: '#287cbc', height: 50, }}
          // className={`${footerContainerClasses} d-flex flex-column flex-md-row align-items-center justify-content-between`}
          className={`container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between`}
        >
          {/* begin::Copyright */}
          <div className="order-2 order-md-1 text-center">
            <span className="font-weight-bold mr-2 text-white">
              Copyright &copy; {today} TripWerkz Pte Ltd all rights reserved
            </span>
            {` `}
            {/* <a
              href="http://google.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-dark-75 text-hover-primary"
            >
              Keenthemes
            </a> */}
          </div>
          {/* end::Copyright */}
          {` `}
          {/* begin::Nav */}
          {/* <div className="nav nav-dark order-1 order-md-2">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link pr-3 pl-0 text-white"
            >
              PRIVACY
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link px-3 text-white"
            >
              CAREERS
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link pl-3 pr-0 text-white"
            >
              CONTACT US
            </a>
          </div> */}
          {/* end::Nav */}
        </div>
        {/* end::Container */}
      </div>
      {/* end::Footer */}
    </>
  );
}
