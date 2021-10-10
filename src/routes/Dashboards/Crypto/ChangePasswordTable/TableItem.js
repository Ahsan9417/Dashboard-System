import React, { useState } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Box, Button, fade } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { DataMethods } from 'services/dataServices';
import { useDispatch, useSelector } from 'react-redux';
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

const TableItem = ({ row }) => {
  const classes = useStyles();
  const [changePasswordForm, setChangePasswordForm] = useState({
    userName: 'admin',
    oldPassword: '',
    newPassword: '',
    reEnterPassword: '',
  });

  const [userName, setUserName] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  let dispatch = useDispatch();
  const [newPassword, setNewPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');

  const [password, setPassword] = React.useState({
    showPassword: false,
  });

  const [passwordNew, setPasswordNew] = React.useState({
    showNewPassword: false,
  });
  const [againReEnterPassword, setAgainReEnterPassword] = React.useState({
    showReEnterPassword: false,
  });
  const handleClickShowPassword = () => {
    setPassword({
      ...password,
      showPassword: !password.showPassword,
    });
  };
  const handleClickShowNewPassword = () => {
    setPasswordNew({
      ...passwordNew,
      showNewPassword: !passwordNew.showNewPassword,
    });
  };
  const handleClickShowReEnterPassword = () => {
    setAgainReEnterPassword({
      ...againReEnterPassword,
      showReEnterPassword: !againReEnterPassword.showReEnterPassword,
    });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleClear = () => {
    setUserName('');
    setOldPassword('');
    setNewPassword('');
    setReEnterPassword('');
  };

  const handlerSubmit = () => {
    console.log('yes here is change password api work');
    let obj = {
      UserName: userName,
      OldPassword: oldPassword,
      NewPassword: newPassword,
      ConfirmPassword: reEnterPassword,
    };
    dispatch(DataMethods['userService'].changePassword(obj));
  };

  return (
    <TableRow className={classes.tableRowRoot}>
      <TableCell>
        <Box sx={{ display: 'flex', margin: 10 }}>
          <TextField
            style={{ marginRight: 10, width: '25%' }}
            id="outlined-basic"
            label="User Name"
            variant="outlined"
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
          <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              style={{ marginRight: 10 }}
              id="outlined-adornment-password"
              type={password.showPassword ? 'text' : 'password'}
              value={oldPassword}
              onChange={e => setOldPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end">
                    {password.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
            <OutlinedInput
              style={{ marginRight: 10 }}
              id="outlined-adornment-password"
              type={passwordNew.showNewPassword ? 'text' : 'password'}
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
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
          <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Re-Enter Password</InputLabel>
            <OutlinedInput
              style={{ marginRight: 10 }}
              id="outlined-adornment-password"
              type={againReEnterPassword.showReEnterPassword ? 'text' : 'password'}
              value={reEnterPassword}
              onChange={e => setReEnterPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowReEnterPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end">
                    {againReEnterPassword.showReEnterPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button style={{ marginRight: 10 }} variant="contained" color="primary" onClick={handlerSubmit}>
            Update
          </Button>
          <Button variant="contained" color="primary" onClick={handleClear}>
            Clear
          </Button>
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default TableItem;
