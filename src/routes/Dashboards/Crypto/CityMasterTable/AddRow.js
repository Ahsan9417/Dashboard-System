import React, { useState } from 'react';
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



const useStyles = makeStyles(theme => ({
    backgroundDeleteColorChange: {
        margin: theme.spacing(2),
        width: 60,
        height: 30,
        borderRadius: 10,
        backgroundColor: "#9e0000",
        color: "white"

    },
    backgroundEditColorChange: {
        margin: theme.spacing(2),
        width: 60,
        height: 30,
        borderRadius: 10,
        backgroundColor: "#eb6b34",
        color: "white"
    },
    tableRowRoot: {
        marginLeft: 10
    },
}));

const AddRow = (props) => {

    console.log(props);
    const classes = useStyles();
    const [cityName, setCityName] = useState(props.selectedCity ? props.selectedCity["city-name"] : "")
    const [countryCode, setCountryCode] = useState(props.selectedCity ? props.selectedCity["country-code"] : "")
    const [provinceCode, setProvinceCode] = useState(props.selectedCity ? props.selectedCity["province-code"] : "")

    return (
        <TableRow className={classes.tableRowRoot}>

            <CmtCard style={{ marginBottom: 30, marginRight: 10, marginTop: 10, marginLeft: 10, }} >
                <CmtCardContent className={classes.cardContentRoot}>
                    <PerfectScrollbar className={classes.scrollbarRoot}>
                        <Box sx={{ display: 'flex', margin: 10 }}>
                            <TextField  style={{ marginRight: 10 }} id="outlined-basic" label="City Name" variant="outlined" value={cityName} onChange={(e) => setCityName(e.target.value)} />
                            <TextField style={{ marginRight: 10 }} id="outlined-basic" label="Contry" defaultValue="" variant="outlined" value={countryCode} onChange={(e) => setCountryCode(e.target.value)} />
                            <TextField style={{ marginRight: 10 }} id="outlined-basic" label="Province" defaultValue="" variant="outlined" value={provinceCode} onChange={(e) => setProvinceCode(e.target.value)} />
                        </Box>
                    </PerfectScrollbar>
                </CmtCardContent>
                <CmtCardFooter>
                    <Box sx={{ display: 'flex', justifyContent: "flex-end", }} >

                        <Button onClick={(e) => props[props.updateState ? "updateCity" : "addCity"]({ cityName,countryCode , provinceCode  })} style={{ marginRight: 10 }} variant="contained" color="primary">
                            {props.updateState ? 'Update' : 'Save'}
                        </Button>
                        <Button onClick={() => props.changeAddState()} variant="contained" >
                            Cancel
                        </Button>
                    </Box>
                </CmtCardFooter>
            </CmtCard>

        </TableRow>
    );
};

export default AddRow;
