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
import MultiSelect from './MultiSelect';
import AddRemoveFields from './AddRemoveFields';

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

  let addObject = {
    'company-key': '',
    'company-branch-key': '',
    'menu-rights-mas-key': '',
  }
  const classes = useStyles();
  const [branches, setBranchesDropDown] = useState([]);
  const [menus, setMenusDropDown] = useState([]);
  const [branchList, setbranchList] = useState((props.selectedUser && props.selectedUser["user-branches"] && props.selectedUser["user-branches"].length) ? props.selectedUser["user-branches"] : [addObject]);

  const [userName, setUserName] = useState(props.selectedUser ? props.selectedUser['user-name'] : '');
  const [password, setPassword] = useState(props.selectedUser ? props.selectedUser['password'] : '');
  const [confirmPassword, setConfirmPassword] = useState(props.selectedUser ? props.selectedUser['confirm-password'] : '');

  const getBranches = async () => {
    let data = await DataMethods['utilsService'].getBranchList('', 1, 100);
    setBranchesDropDown(data && data['company-branch-infos'] ? data['company-branch-infos'] : []);
    setMenusDropDown(data && data['web-menu-rights-masters'] ? data['web-menu-rights-masters'] : []);
  };

  useEffect(() => {
    getBranches();
  }, []);

  return (
    <>
      <CmtCardContent className={classes.cardContentRoot}>
        <PerfectScrollbar className={classes.scrollbarRoot}>
          <Box sx={{ display: 'flex', margin: 10 }}>
            <TextField
              style={{ marginRight: 10, width: '100%' }}
              id="outlined-basic"
              label="User Name"
              variant="outlined"
              value={userName}
              onChange={e => setUserName(e.target.value)}
            />
            <TextField
              style={{ marginRight: 10, width: '100%' }}
              id="outlined-basic"
              label="Password"
              variant="outlined"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <TextField
              style={{ marginRight: 10, width: '100%' }}
              id="outlined-basic"
              label="Confirm Password"
              variant="outlined"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </Box>
          <Box sx={{ display: 'flex', margin: 10 }}>
            <AddRemoveFields branchList={branchList} setbranchList={setbranchList} style={{ width: '100%' }}  branches={branches} menus={menus} />

        
          </Box>
        </PerfectScrollbar>
      </CmtCardContent>
      <CmtCardFooter>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexBasis: '100%' }}>
          <Button
            onClick={e =>
              props[props.updateState ? 'updateUser' : 'addUser']({
                userName,
                password,
                confirmPassword,
                branchList: branchList,
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

export default AddRow;
