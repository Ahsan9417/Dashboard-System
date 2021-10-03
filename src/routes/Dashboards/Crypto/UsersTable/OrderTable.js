import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
import Box from '@material-ui/core/Box';

const OrderTable = ({ tableData, state, changeEditStateTrue, changeUpdateStatusToTrue, hideColumns = [] }) => {
  return (
    <Box className="Cmt-table-responsive">
      <Table>
        <TableHead>
          <TableHeading hideColumns={hideColumns} columnNames={Object.keys(tableData[0])} state={state} />
        </TableHead>
        <TableBody>
          {tableData.map((row, index) => {
            return <TableItem key={index} hideColumns={hideColumns} changeUpdateStatusToTrue={changeUpdateStatusToTrue} row={row} key={index} state={state} changeEditStateTrue={changeEditStateTrue} />
          })}
        </TableBody>
      </Table>
    </Box>
  );
};

export default OrderTable;
