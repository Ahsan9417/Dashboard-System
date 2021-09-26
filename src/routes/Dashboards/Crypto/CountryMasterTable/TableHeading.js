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

const TableHeading = (props) => {
  const classes = useStyles();
  return (
    <TableRow className={classes.tableHeading}>
      {props && props.state.checked1 && <TableCell className={classes.tableCellRoot}>Country Code</TableCell>}
      {props && props.state.checked2 && <TableCell className={classes.tableCellRoot}>Country Name</TableCell>}
      {props && props.state.checked3 && <TableCell className={classes.tableCellRoot}>Created by</TableCell>}
      {props && props.state.checked4 && <TableCell className={classes.tableCellRoot}>Created on</TableCell>}
      {props && props.state.checked5 && <TableCell className={classes.tableCellRoot}>Updated by</TableCell>}
      {props && props.state.checked6 && <TableCell className={classes.tableCellRoot}>Updated on</TableCell>}
      <TableCell className={classes.tableCellRoot}>Action</TableCell>
    </TableRow>
  );
};

export default TableHeading;
