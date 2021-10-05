import React from 'react';
import CheckboxTree from "react-checkbox-tree";
import { useState } from "react";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import RemoveIcon from "@material-ui/icons/Remove";

export default function CheckedBoxTree(props) {

  let nodes = props.nodes;

  //  Icons That use in Check box tree
  const icons = {
    check: <CheckCircleIcon />,
    uncheck: <CheckBoxOutlineBlankIcon />,
    halfCheck: <CheckCircleIcon />,
    expandClose: <RemoveIcon />,
    expandOpen: <RemoveIcon />,
    leaf: <InsertDriveFileIcon />,

  };

  return (
    <>
      {nodes.length ? <CheckboxTree
        nodes={nodes}
        expandOnClick={true}
        showExpandAll={true}
        checked={props.checked}
        onCheck={checked => { props.setChecked(checked); props.getSelectedMenu(checked)}}
        expanded={props.expanded}
        onExpand={expanded => props.setExpanded(expanded)}
        checkModel={"leaf"}
        icons={icons}
        // iconsClass="fa5"
        nativeCheckboxes={true}
        noCascade ={true}
      /> : ""}
    </>
  );
}
