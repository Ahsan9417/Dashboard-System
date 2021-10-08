import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Box, Button, fade } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import CmtCardFooter from '@coremat/CmtCard/CmtCardFooter';
import PerfectScrollbar from 'react-perfect-scrollbar';

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
  const classes = useStyles();
  const [countryName, setCountryName] = useState(props.selectedCountry ? props.selectedCountry['country-name'] : '');
  const [countryCode, setCountryCode] = useState(props.selectedCountry ? props.selectedCountry['country-code'] : '');
  const [countryISO, setCountryISO] = useState(props.selectedCountry ? props.selectedCountry['country-iso'] : '');
  const [currencyCode, setCurrencyCode] = useState(props.selectedCountry ? props.selectedCountry['currency-code'] : '');

  return (
    <>
      <CmtCardContent>
        <PerfectScrollbar className={classes.scrollbarRoot}>
          <Box sx={{ display: 'flex', margin: 10 }}>
            <TextField
              style={{ marginRight: 7 }}
              id="outlined-basic"
              label="Country Code"
              defaultValue="admin"
              variant="outlined"
              value={countryCode}
              S
              onChange={e => setCountryCode(e.target.value)}
            />
            <TextField
              style={{ marginRight: 7 }}
              id="outlined-basic"
              label="Country Name"
              variant="outlined"
              value={countryName}
              onChange={e => setCountryName(e.target.value)}
            />
            <TextField
              style={{ marginRight: 7 }}
              id="outlined-basic"
              label="Country ISO"
              defaultValue="admin"
              variant="outlined"
              value={countryISO}
              onChange={e => setCountryISO(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Currency Code"
              variant="outlined"
              value={currencyCode}
              onChange={e => setCurrencyCode(e.target.value)}
            />
          </Box>
        </PerfectScrollbar>
      </CmtCardContent>
      <CmtCardFooter>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexBasis: '100%' }}>
          <Button
            onClick={e =>
              props[props.updateState ? 'updateCountry' : 'addCountry']({
                countryName,
                countryCode,
                countryISO,
                currencyCode,
              })
            }
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
