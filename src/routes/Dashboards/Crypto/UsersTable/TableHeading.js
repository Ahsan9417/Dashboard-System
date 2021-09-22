import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  tableCellRoot: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 0,
    paddingBottom: 12,
    fontSize: 12,
    letterSpacing: 0.4,
    color: theme.palette.common.white,
    borderBottom: '0 none',
    '&:first-child': {
      paddingLeft: 24,
    },
    '&:last-child': {
      textAlign: 'right',
      paddingRight: 24,
    },
  },
  tableHeading: {
    backgroundColor: "#eb6b34",
  },
}));

const TableHeading = () => {
  const classes = useStyles();
  return (
    <TableRow className={classes.tableHeading}>
      <TableCell className={classes.tableCellRoot}>User Name</TableCell>
      <TableCell className={classes.tableCellRoot}>Created by</TableCell>
      <TableCell className={classes.tableCellRoot}>Created on</TableCell>
      <TableCell className={classes.tableCellRoot}>Updated by</TableCell>
      <TableCell className={classes.tableCellRoot}>Updated on</TableCell>
      <TableCell className={classes.tableCellRoot}>Action</TableCell>
    </TableRow>
  );
};

export default TableHeading;
