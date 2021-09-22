import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import clsx from 'clsx';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { fade } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

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

const TableItem = ({ row }) => {
  const classes = useStyles();
  return (
    <TableRow className={classes.tableRowRoot}>
      <TableCell className={classes.tableCellRoot}>{row.currency}</TableCell>
      <TableCell className={classes.tableCellRoot}>{row.date}</TableCell>
      <TableCell className={clsx(classes.tableCellRoot, 'success')}>{row.date}</TableCell>
      <TableCell className={classes.tableCellRoot}>{row.date}</TableCell>
      <TableCell className={classes.tableCellRoot}>{row.date}</TableCell>
      <TableCell className={classes.tableCellRoot}> 
      <IconButton  aria-label="edit" className={classes.backgroundEditColorChange}>
          <EditIcon />
      </IconButton>
      <IconButton aria-label="delete" className={classes.backgroundDeleteColorChange}>
          <DeleteIcon />
      </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default TableItem;
