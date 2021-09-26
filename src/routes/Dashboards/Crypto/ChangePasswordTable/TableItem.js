import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import clsx from 'clsx';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Box, Button, fade } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';

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
  return (
    <TableRow className={classes.tableRowRoot}>
      <TableCell >
      <Box sx={{ display: 'flex', marginBottom: 10 }}>
        <TextField style={{marginRight: 10, width: "25%"}} id="outlined-basic" label="User Id" defaultValue="admin" variant="outlined" />
        <TextField style={{marginRight: 10, width: "25%"}} id="outlined-basic" label="Old Password" variant="outlined" />
        <TextField style={{marginRight: 10, width: "25%"}} id="outlined-basic" label="New Password" variant="outlined" />
        <TextField style={{marginRight: 10, width: "25%"}} id="outlined-basic" label="Re-Enter Password" variant="outlined" />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: "flex-end" }}>
        <Button style={{marginRight: 10}} variant="contained" color="primary">
          Update
        </Button>
        <Button variant="contained" color="primary">
          Clear
        </Button>
      </Box>
      </TableCell>
    </TableRow>
  );
};

export default TableItem;
