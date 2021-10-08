import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  tableCellRoot: {
    color: theme.palette.common.white,
  },
  tableHeading: {
    backgroundColor: '#eb6b34',
  },
}));

const TableHeading = () => {
  const classes = useStyles();
  return (
    <TableRow className={classes.tableHeading}>
      <TableCell className={classes.tableCellRoot}>Change Password</TableCell>
    </TableRow>
  );
};

export default TableHeading;
