import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import clsx from 'clsx';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { fade } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Box } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { DataMethods } from 'services/dataServices';

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
    position: 'relative',
    transition: 'all .2s',
    borderTop: `solid 1px ${theme.palette.borderColor.main}`,
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.main, 0.08),
      transform: 'translateY(-4px)',
      boxShadow: `0 3px 10px 0 ${fade(theme.palette.common.dark, 0.2)}`,
      borderTopColor: 'transparent',
      '& $tableCellRoot': {
        color: theme.palette.text.primary,
        '&:last-child': {
          color: theme.palette.error.main,
        },
        '&.success': {
          color: theme.palette.success.main,
        },
      },
    },
    '&:last-child': {
      borderBottom: `solid 1px ${theme.palette.borderColor.main}`,
    },
  },
  tableCellRoot: {
    padding: 16,
    fontSize: 14,
    letterSpacing: 0.25,
    color: theme.palette.text.secondary,
    borderBottom: '0 none',
    position: 'relative',
    '&:first-child': {
      paddingLeft: 24,
    },
    '&:last-child': {
      textAlign: 'right',
      color: theme.palette.error.main,
      paddingRight: 24,
    },
    '&.success': {
      color: theme.palette.success.main,
    },
  },
}));

const TableItem = ({ row,  changeUpdateStatusToTrue,hideColumns = []  }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  let dispatch = useDispatch()
  const handleClickOpen = () => {
    setOpen(true);
  };

  const changeStatus = (e) => {
    changeUpdateStatusToTrue(e)
  }


  const handleClose = (value) => {
    if(value)dispatch(DataMethods['countryService'].DeleteCountry(row))
    setOpen(false);
  };



  // 

  return (
    <TableRow className={classes.tableRowRoot}>

      {
        Object.keys(row).map((col, index) => {
          return hideColumns.indexOf(col) === -1 ? <TableCell className={classes.tableCellRoot} key={index} name={col}>{row[col]}</TableCell> : ""
        })
      }
      {/*  {state && state.checked1 && <TableCell className={classes.tableCellRoot} name="country-code">{row["country-code"]}</TableCell>}
       {state && state.checked2 && <TableCell className={classes.tableCellRoot} name="country-name">{row["country-name"]}</TableCell>}
       {state && state.checked3 && <TableCell className={classes.tableCellRoot}>{row.date}</TableCell>}
       {state && state.checked4 && <TableCell className={clsx(classes.tableCellRoot, 'success')}>{row.date}</TableCell>}
       {state && state.checked5 && <TableCell className={classes.tableCellRoot}>{row.date}</TableCell>}
       {state && state.checked6 && <TableCell className={classes.tableCellRoot}>{row.date}</TableCell>} */}

      <TableCell className={classes.tableCellRoot}>
        <IconButton aria-label="edit" onClick={() => changeStatus(row)} className={classes.backgroundEditColorChange}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" className={classes.backgroundDeleteColorChange} onClick={handleClickOpen}>
          <DeleteIcon />
        </IconButton>
        <Box>
          <Dialog
            open={open}
            onClose={(e)=>handleClose(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">Confirmation Alert.</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Are you sure, you are deleting a record.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={(e)=>handleClose(false)} color="primary">
                No
              </Button>
              <Button onClick={(e)=>handleClose(true)} color="primary" autoFocus>
                Yes
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </TableCell>

    </TableRow>
  );
};

export default TableItem;
