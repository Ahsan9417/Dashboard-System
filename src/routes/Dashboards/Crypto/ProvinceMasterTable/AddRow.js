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
  formControl: {
    // margin: theme.spacing(2),
    // minWidth: 120,
  },
}));

const AddRow = props => {
  //console.log(props);
  const classes = useStyles();

  // const [countryKey, setCountryKey] = useState(props.selectedProvince ? props.selectedProvince["country-key"] : "")
  const [provinceName, setProvinceName] = useState(props.selectedProvince ? props.selectedProvince['province-name'] : '');
  const [countryName, setCountryName] = React.useState({
    name: '',
    key: '',
  });
  const handleChange = event => {
    //console.log(event.target.selectedOptions[0]);
    setCountryName({
      name: event.target.selectedOptions[0].text,
      key: event.target.selectedOptions[0].value,
    });
  };

  useEffect(() => {
  }, []);

  return (
    <>
      <CmtCardContent className={classes.cardContentRoot}>
        <PerfectScrollbar className={classes.scrollbarRoot}>
          <Box sx={{ display: 'flex', margin: 10 }}>
            <TextField
              style={{ marginRight: 10 }}
              id="outlined-basic"
              label="Province Name"
              defaultValue="admin"
              variant="outlined"
              value={provinceName}
              onChange={e => setProvinceName(e.target.value)}
            />
            <FormControl variant="outlined" style={{ minWidth: 200 }}>
              <InputLabel htmlFor="outlined-age-native-simple">Country Name</InputLabel>
              <Select
                native
                // value={countryName.name}
                onChange={handleChange}
                label="Country Name"
                inputProps={{
                  name: 'name',
                  id: 'outlined-age-native-simple',
                }}>
                <option aria-label="None" value="" />
                {props.countries.map((x, index) => {
                  // selected={(props.selectedProvince && (x["country-key"] == props.selectedProvince["country-key"]))}
                  return (
                    <option
                      selected={props.selectedProvince && x['country-key'] == props.selectedProvince['country-key']}
                      name={x['country-name']}
                      value={x['country-key']}>
                      {x['country-name']}
                    </option>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
        </PerfectScrollbar>
      </CmtCardContent>
      <CmtCardFooter>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexBasis: '100%' }}>
          <Button
            onClick={e =>
              props[props.updateState ? 'updateProvince' : 'addProvince']({
                countryKey: countryName['key'],
                provinceName,
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
