import React, { useEffect, useState } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import clsx from 'clsx';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Box, Button, fade } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import CmtCardFooter from '@coremat/CmtCard/CmtCardFooter';
import PerfectScrollbar from 'react-perfect-scrollbar';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { DataMethods } from 'services/dataServices';

const useStyles = makeStyles(theme => ({
  backgroundDeleteColorChange: {
    margin: theme.spacing(2),
    width: 60,
    height: 30,
    borderRadius: 10,
    backgroundColor: '#9e0000',
    color: 'white',
  },
  backgroundEditColorChange: {
    margin: theme.spacing(2),
    width: 60,
    height: 30,
    borderRadius: 10,
    backgroundColor: '#eb6b34',
    color: 'white',
  },
  tableRowRoot: {
    marginLeft: 10,
  },
}));

const AddRow = props => {
  console.log(props);
  const classes = useStyles();
  const [hotelName, setHotelName] = useState(props.selectedHotel ? props.selectedHotel['hotel-type-desc'] : '');

  useEffect(() => {
    console.log('hotel Table');
  }, []);

  return (
    <>
      <CmtCardContent className={classes.cardContentRoot}>
        <PerfectScrollbar className={classes.scrollbarRoot}>
          <Box sx={{ display: 'flex', margin: 10 }}>
            <TextField
              style={{ marginRight: 10 }}
              id="outlined-basic"
              label="Hotel Tyoe Name"
              variant="outlined"
              value={hotelName}
              onChange={e => setHotelName(e.target.value)}
            />
          </Box>
        </PerfectScrollbar>
      </CmtCardContent>
      <CmtCardFooter>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexBasis: '100%' }}>
          <Button
            onClick={e => props[props.updateState ? 'updateHotel' : 'addHotel']({ hotelName })}
            style={{ marginRight: 10 }}
            variant="contained"
            color="primary">
            {props.updateState ? 'Update' : 'Save'}
          </Button>
          <Button onClick={e => props.changeAddState(e)} variant="contained">
            Cancel
          </Button>
        </Box>
      </CmtCardFooter>
    </>
  );
};

export default AddRow;
