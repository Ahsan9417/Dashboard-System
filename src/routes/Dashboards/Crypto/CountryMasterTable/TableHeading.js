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
  console.log(props.hideColumns);
  let columnNames = props?.columnNames ? props.columnNames : [];
  const classes = useStyles();
  return (

    <>
      {columnNames.length ?
        <TableRow className={classes.tableHeading}>
          {
            columnNames.map(name => {
              return props.hideColumns.indexOf(name) === -1 ?  <TableCell className={classes.tableCellRoot}>{name.toString().replaceAll('-', ' ')}</TableCell> : undefined
            })}
          <TableCell className={classes.tableCellRoot}>Action</TableCell>
        </TableRow>
        : ""}
    </>
  );
};

export default TableHeading;
