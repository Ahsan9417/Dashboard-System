import React, { useState } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CmtSearch from '@coremat/CmtSearch';

const useStyles = makeStyles(theme => ({
  tableRowRoot: {
    marginLeft: 10
  }

}));

const TableItem = ({ row, state }) => {
  const classes = useStyles();
  const [value, setValue] = useState('');

  return (
    <TableRow className={classes.tableRowRoot} >
      <TableCell >
        {state && state.checked2 &&
          <CmtSearch
            border={true}
            onlyIcon={false}
            iconPosition="right"
            // align="right"
            placeholder="Search Cofig Name"
            value={value}
            onChange={e => setValue(e.target.value)} />
        }
      </TableCell>
      <TableCell >
        {state && state.checked3 &&
          <CmtSearch
            border={true}
            onlyIcon={false}
            iconPosition="right"
            // align="right"
            placeholder="Search Created By"
            value={value}
            onChange={e => setValue(e.target.value)} />
        }
      </TableCell>
      <TableCell >
        {state && state.checked4 &&
          <CmtSearch
            border={true}
            onlyIcon={false}
            iconPosition="right"
            // align="right"
            placeholder="Search Created On"
            value={value}
            onChange={e => setValue(e.target.value)} />
        }
      </TableCell>
      <TableCell >
        {state && state.checked5 &&
          <CmtSearch
            border={true}
            onlyIcon={false}
            iconPosition="right"
            // align="right"
            placeholder="Search Updated by"
            value={value}
            onChange={e => setValue(e.target.value)} />
        }
      </TableCell>
      <TableCell >

        {state && state.checked6 &&
          <CmtSearch
            border={true}
            onlyIcon={false}
            iconPosition="right"
            // align="right"
            placeholder="Search Updated On"
            value={value}
            onChange={e => setValue(e.target.value)} />
        }
      </TableCell>

    </TableRow>
  );
};

export default TableItem;
