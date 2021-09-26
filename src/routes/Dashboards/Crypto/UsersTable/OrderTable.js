import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
import Box from '@material-ui/core/Box';

const OrderTable = ({ tableData,state }) => {
  return (
    <Box className="Cmt-table-responsive">
      <Table>
        <TableHead>
          <TableHeading state={state} />
        </TableHead>
        <TableBody>
            <TableItem  />
        </TableBody>
      </Table>
    </Box>
  );
};

export default OrderTable;
