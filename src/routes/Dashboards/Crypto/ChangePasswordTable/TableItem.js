import React, { useState } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import clsx from 'clsx';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Box, Button, fade } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import { DataMethods } from 'services/dataServices';
import { useDispatch, useSelector } from 'react-redux';
import { AuhMethods } from 'services/auth';
import { CurrentAuthMethod } from '@jumbo/constants/AppConstants';
import ContentLoader from '@jumbo/components/ContentLoader';

const useStyles = makeStyles(theme => ({
  backgroundDeleteColorChange: {
    margin: theme.spacing(2),
    width: 60,
    height: 30,
    borderRadius: 10,
    backgroundColor: "#9e0000",
    color: "white"

  },
  backgroundEditColorChange: {
    margin: theme.spacing(2),
    width: 60,
    height: 30,
    borderRadius: 10,
    backgroundColor: "#eb6b34",
    color: "white"
  },
  tableRowRoot: {
    marginLeft: 10
  }



}));

const TableItem = ({ row }) => {
  const classes = useStyles();
  const [changePasswordForm, setChangePasswordForm] = useState({
    userName: "admin",
    oldPassword: "",
    newPassword: "",
    reEnterPassword: ""
  })

  const [userName, setUserName] = useState("")
  const [oldPassword, setOldPassword] = useState("")
  let dispatch = useDispatch()
  const [newPassword, setNewPassword] = useState("")
  const [reEnterPassword, setReEnterPassword] = useState("")

  const handleClear = () => {
    setUserName("")
    setOldPassword("")
    setNewPassword("")
    setReEnterPassword("")
  }

  const handlerSubmit = () => {
    console.log("yes here is change password api work");
    let obj = {
      "UserName": userName,
      "OldPassword": oldPassword,
      "NewPassword": newPassword,
      "ConfirmPassword": reEnterPassword
    }
    dispatch(AuhMethods[CurrentAuthMethod].changePassword(obj))


  }

  return (
 
    <TableRow className={classes.tableRowRoot}>
      <TableCell >
        <Box sx={{ display: 'flex', margin: 10 }}>
          <TextField style={{ marginRight: 10, width: "25%" }} id="outlined-basic" label="User Name" variant="outlined" value={userName} onChange={(e) => setUserName(e.target.value)} />
          <TextField style={{ marginRight: 10, width: "25%" }} id="outlined-basic" label="Old Password" variant="outlined" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
          <TextField style={{ marginRight: 10, width: "25%" }} id="outlined-basic" label="New Password" variant="outlined" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
          <TextField style={{ marginRight: 10, width: "25%" }} id="outlined-basic" label="Re-Enter Password" variant="outlined" value={reEnterPassword} onChange={(e) => setReEnterPassword(e.target.value)} />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: "flex-end" }}>
          <Button style={{ marginRight: 10 }} variant="contained" color="primary" onClick={handlerSubmit}>
            Update
          </Button>
          <Button variant="contained" color="primary" onClick={handleClear} >
            Clear
          </Button>
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default TableItem;
