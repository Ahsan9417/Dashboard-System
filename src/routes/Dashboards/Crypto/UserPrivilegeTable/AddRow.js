import React, { useEffect, useState } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import clsx from 'clsx';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Box, Button, fade } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import CmtCardFooter from '@coremat/CmtCard/CmtCardFooter';
import PerfectScrollbar from 'react-perfect-scrollbar';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { DataMethods } from 'services/dataServices';
import CheckedBoxTree from './CheckedBoxTree';
import { useDispatch, useSelector } from 'react-redux';

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

const AddRow = props => {
  //CheckBox tree params
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);
  let menuHash = {};
  let nodes = [];

  console.log(props.selectedUserPrivilege);

  const classes = useStyles();
  let menuList = useSelector(({ userRole }) => userRole.menusList);
  const [menuName, setMenuName] = useState(
    props.selectedUserPrivilege && props.selectedUserPrivilege['menu-rights-name']
      ? props.selectedUserPrivilege['menu-rights-name']
      : '',
  );
  const [userPrivilegesList, setUserPrivilegesList] = useState([]);
  let dispatch = useDispatch();

  const [userPrivilege, setUserPrivilege] = React.useState({
    name: '',
    key: '',
  });
  const handleChange = event => {
    console.log(event.target.selectedOptions[0]);
    setUserPrivilege({
      name: event.target.selectedOptions[0].text,
      key: event.target.selectedOptions[0].value,
    });
  };

  const getSelectedMenu = checked => {
    setUserPrivilegesList(
      checked.map(menu => {
        return { 'menu-key': menuHash[menu]['menuKey'] };
      }),
    );
  };

  const parseMenu = menuArray => {
    return menuArray.map(menu => {
      if (menuHash[menu.menuKey]) menu.menuName = menu.menuKey;
      menuHash[menu.menuKey] = menu;
      let node = {
        value: menu.menuKey,
        label: menu.menuName,
      };
      if (menu.children.length) node.children = parseMenu(menu.children);
      return node;
    });
  };

  if (menuList.length) nodes = parseMenu(menuList);
  console.log(checked);
  return (
    <>
      <CmtCardContent className={classes.cardContentRoot}>
        <PerfectScrollbar className={classes.scrollbarRoot}>
          <Box sx={{ display: 'flex', margin: 10 }}>
            <Box>
              <TextField
                style={{ marginRight: 10, width: '100%' }}
                id="outlined-basic"
                label="Menu Name"
                variant="outlined"
                value={menuName}
                onChange={e => setMenuName(e.target.value)}
              />
            </Box>

            <Box>
              {nodes.length ? (
                <CheckedBoxTree
                  setChecked={setChecked}
                  getSelectedMenu={getSelectedMenu}
                  setExpanded={setExpanded}
                  nodes={nodes}
                  expanded={expanded}
                  checked={checked}
                  menuList={menuList}
                />
              ) : (
                ''
              )}
            </Box>
          </Box>
        </PerfectScrollbar>
      </CmtCardContent>
      <CmtCardFooter>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexBasis: '100%' }}>
          <Button
            onClick={e =>
              props[props.updateState ? 'updateUserPrivilege' : 'addUserPrivilege']({
                'menu-rights-name': menuName,
                'list-privilege': userPrivilegesList,
              })
            }
            style={{ marginRight: 10 }}
            variant="contained"
            color="primary">
            {props.updateState ? 'Update' : 'Save'}
          </Button>
          <Button onClick={e => props.changeAddState(e)} variant="contained">
            Cancel
          </Button>
        </Box>
      </CmtCardFooter>
    </>
  );
};

const RecursivePrevileges = ({ items }) => {
  const hasChildren = items && items.length;

  return <>{hasChildren && items.map(item => <RecursivePrevileges key={item.name} {...item} />)}</>;
};

export default AddRow;
