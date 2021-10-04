import React from 'react';
import CheckboxTree from "react-checkbox-tree";
import { useState } from "react";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import RemoveIcon from "@material-ui/icons/Remove";




export default function CheckedBoxTree(props) {

  let nodes = [];
  let menuName = {}
  // let checked = []
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);


  const parseMenu = (menuArray) => {

    return menuArray.map(menu => {
      if (menu.children.length) menu.children = parseMenu(menu.children)

      if (menuName[menu.menuName]) menu.menuName = menu.menuName + '-' + Math.random(1000)
      menuName[menu.menuName] = menu
      menu.value = menu.menuName.split(" ").join("-")
      menu.label = menu.menuName.split(" ").join("-")
      menu.checked = false
      menu.disabled = false
      // checked.push({ [`${menu.menuName}`]: false })
      return menu
    })
  }
  nodes = parseMenu(props.menuList);

  console.log(nodes[0]);
  //  Icons That use in Check box tree
  const icons = {
    check: <CheckCircleIcon />,
    uncheck: <CheckBoxOutlineBlankIcon />,
    halfCheck: <CheckCircleIcon />,
    expandClose: <RemoveIcon />,
    expandOpen: <RemoveIcon />,
    leaf: <InsertDriveFileIcon />,

  };



  const handleChange = (checked) => {
    console.log('change', checked);
  }
  const handleClick = (e) => {
    console.log('click', e);
  }

  console.log(checked)
  return (
    <>
      {nodes.length ? <CheckboxTree

        nodes={nodes}
        // showNodeIcon={false}
        expandOnClick={true}
        showExpandAll={true}
        checked={checked}
        nativeCheckboxes={true}
        // onCheck={checked =>setChecked(checked)}
        onCheck={checked => setChecked(checked)}
        expanded={expanded}
        onExpand={expanded => setExpanded(expanded)}
        checkModel={"all"}
        icons={icons}
        // iconsClass="fa5"
      /> : ""}
    </>
  );
}
