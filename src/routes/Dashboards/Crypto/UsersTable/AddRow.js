import React, { useEffect, useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Box, Button, fade } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import CmtCardFooter from '@coremat/CmtCard/CmtCardFooter';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { DataMethods } from 'services/dataServices';
import AddRemoveFields from './AddRemoveFields';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

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
  };
  const classes = useStyles();

  const [branchList, setbranchList] = useState(
    props.selectedUser && props.selectedUser['user-branches'] && props.selectedUser['user-branches'].length
      ? props.selectedUser['user-branches']
      : [addObject],
  );

  const [userName, setUserName] = useState(props.selectedUser ? props.selectedUser['user-name'] : '');
  const [password, setPassword] = useState(props.selectedUser ? props.selectedUser['password'] : '');
  const [confirmPassword, setConfirmPassword] = useState(props.selectedUser ? props.selectedUser['confirm-password'] : '');

  const [passwordvalue, setPasswordValue] = React.useState({
    showPassword: false,
  });

  const [passwordNew, setPasswordNew] = React.useState({
    showNewPassword: false,
  });

  const handleClickShowPassword = () => {
    setPasswordValue({
      ...passwordvalue,
      showPassword: !passwordvalue.showPassword,
    });
  };
  const handleClickShowNewPassword = () => {
    setPasswordNew({
      ...passwordNew,
      showNewPassword: !passwordNew.showNewPassword,
    });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  useEffect(() => {
  }, []);

  return (
    <>
      <CmtCardContent className={classes.cardContentRoot}>
        <PerfectScrollbar className={classes.scrollbarRoot}>
          <Box sx={{ display: 'flex', margin: 10 }}>
            <TextField
              style={{ marginRight: 10 }}
              id="outlined-basic"
              label="User Name"
              variant="outlined"
              value={userName}
              onChange={e => setUserName(e.target.value)}
            />

            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                style={{ marginRight: 10 }}
                id="outlined-adornment-password"
                type={passwordvalue.showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end">
                      {passwordvalue.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
              <OutlinedInput
                style={{ marginRight: 10 }}
                id="outlined-adornment-password"
                type={passwordNew.showNewPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowNewPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end">
                      {passwordNew.showNewPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            {/* <TextField
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
            /> */}
          </Box>
          <Box sx={{ display: 'flex', margin: 10 }}>
            <AddRemoveFields
              branchList={branchList}
              setbranchList={setbranchList}
              style={{ width: '100%' }}
              branches={props.branches}
              menus={props.menus}
              addObject={addObject}
            />
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
