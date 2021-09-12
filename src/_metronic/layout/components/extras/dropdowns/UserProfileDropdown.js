/* eslint-disable no-restricted-imports */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector } from "react-redux";
import objectPath from "object-path";
import { useHtmlClassService } from "../../../_core/MetronicLayout";
import { toAbsoluteUrl } from "../../../../_helpers";
import { DropdownTopbarItemToggler } from "../../../../_partials/dropdowns";
import SVG from "react-inlinesvg";

export function UserProfileDropdown() {
  const { user } = useSelector(state => state.auth);
  const uiService = useHtmlClassService();
  const layoutProps = useMemo(() => {
    return {
      light: objectPath.get(uiService.config, "extras.user.dropdown.style") === "light",
    };
  }, [uiService]);

  return (
    <Dropdown drop="down" alignRight>
      {/*  */}
    </Dropdown>
  );
}
