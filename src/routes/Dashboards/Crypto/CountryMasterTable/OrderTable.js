import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
import Box from '@material-ui/core/Box';

const OrderTable = ({ tableData, state, changeEditStateTrue, changeUpdateStatusToTrue, setUpdateObj }) => {
  return (
    <Box className="Cmt-table-responsive">
      <Table>
        <TableHead>
          <TableHeading state={state} />
        </TableHead>
        <TableBody>
          {tableData.map((row, index) =>
            <>

              <TableItem setUpdateObj={setUpdateObj} changeUpdateStatusToTrue={changeUpdateStatusToTrue} row={row} key={index} state={state} changeEditStateTrue={changeEditStateTrue} />
            </>
          )}
        </TableBody>
      </Table>
    </Box>
  );
};

export default OrderTable;
