import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Box, Button, fade } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import CmtCardFooter from '@coremat/CmtCard/CmtCardFooter';
import PerfectScrollbar from 'react-perfect-scrollbar';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { DataMethods } from 'services/dataServices';
import MultiSelect from './MultiSelect';
const useStyles = makeStyles(theme => ({
  backgroundDeleteColorChange: {
    margin: theme.spacing(2),
    width: 60,
    height: 30,
    borderRadius: 10,
    backgroundColor: '#9e0000',
    color: 'white',
  },
  backgroundEditColorChange: {
    margin: theme.spacing(2),
    width: 60,
    height: 30,
    borderRadius: 10,
    backgroundColor: '#eb6b34',
    color: 'white',
  },
  tableRowRoot: {
    marginLeft: 10,
  },
}));
function AddRemoveFields(props) {

  let branches = props.branches ? props.branches : [];
  let menus = props.menus ? props.menus : [];

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...props.branchList];
    list.splice(index, 1);
    props.setbranchList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    props.setbranchList([...props.branchList, props.addObject]);
  };

  const handleDropdownChange = (event, index) => {
    const list = [...props.branchList];
    switch (event.target.name.toLowerCase()) {
      case 'menu':
        list[index]["menu-rights-mas-key"] = event.target.selectedOptions[0].value;
        break;
      case 'branch':
        list[index]["company-branch-key"] = event.target.selectedOptions[0].value;
        list[index]["company-key"] = branches.filter(x => x['company-branch-key'] == event.target.selectedOptions[0].value)[0]['company-key'];

      default:
        break;
    }
    props.setbranchList(list)
  };

  return (
    <div className="App">
      {props.branchList.map((x, i) => {
        return (
          <div className="box">

            <FormControl variant="outlined" style={{ marginRight: 7, width: '100%' }}>
              <InputLabel htmlFor="outlined-age-native-simple">Company Branch</InputLabel>
              <Select
                native
                onChange={e => handleDropdownChange(e, i)}
                label="Company Branch"
                inputProps={{
                  name: 'Branch',
                  id: 'outlined-age-native-simple',
                }}>
                <option aria-label="None" value="" />
                {branches.map((x, index) => {
                  return (
                    <option
                      selected={
                        props.selectedUser &&
                        props.selectedUser['user-branches']?.length &&
                        x['company-branch-key'] == props.selectedUser['user-branches'][0]['company-branch-key']
                      }
                      name={x['country-name']}
                      value={x['company-branch-key']}>
                      {x['company-branch-name']}
                    </option>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl variant="outlined" style={{ marginRight: 7, width: '100%' }}>
              <InputLabel htmlFor="outlined-age-native-simple">Menu Rights</InputLabel>
              <Select
                native
                onChange={e => handleDropdownChange(e, i)}
                label="Menu Rights"
                inputProps={{
                  name: 'Menu',
                  id: 'outlined-age-native-simple',
                }}>
                <option aria-label="None" value="" />
                {menus.map((x, index) => {
                  return (
                    <option
                      selected={props.selectedUser && x['menu-rights-mas-key'] == props.selectedUser}
                      name={x['menu-rights-mas-name']}
                      value={x['menu-rights-mas-key']}>
                      {x['menu-rights-mas-name']}
                    </option>
                  );
                })}
              </Select>
            </FormControl>
            <div className="btn-box">
              {props.branchList.length !== 1 && (
                <button className="mr10" onClick={() => handleRemoveClick(i)}>
                  Remove
                </button>
              )}
              {props.branchList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AddRemoveFields;
