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
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

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
    formControl: {
        // margin: theme.spacing(2),
        // minWidth: 120,
    },
}));

const AddRow = (props) => {
    const classes = useStyles();
    const [provinceName, setProvinceName] = useState("")
    const [countryName, setCountryName] = React.useState({
        name: '',
        key: '',
    });
    const handleChange = event => {
        const name = event.target.name;
        setCountryName({
            ...countryName,
            [name]: event.target.value,
        });
    };

    
    return (

        <TableRow className={classes.tableRowRoot}>

            <CmtCard style={{ marginBottom: 30, marginRight: 10, marginTop: 10, marginLeft: 10, }} >
                <CmtCardContent className={classes.cardContentRoot}>
                    <PerfectScrollbar className={classes.scrollbarRoot}>
                        <Box sx={{ display: 'flex', margin: 10 }}>
                            <TextField style={{ marginRight: 10, width: "100%" }} id="outlined-basic" label="Province Name" defaultValue="admin" variant="outlined" value={provinceName} />
                            <FormControl variant="outlined" style={{width: "100%"}} >
                                <InputLabel htmlFor="outlined-age-native-simple">Country Name</InputLabel>
                                <Select
                                    native
                                    value={countryName.name}
                                    onChange={handleChange}
                                    label="Country Name"
                                    inputProps={{
                                        name: 'name',
                                        id: 'outlined-age-native-simple',
                                    }}>
                                    <option aria-label="None" value="" />
                                    <option value={10}>Pakistan</option>
                                    <option value={20}>India</option>
                                    <option value={30}>Singapore</option>
                                </Select>
                            </FormControl>
                        </Box>
                    </PerfectScrollbar>
                </CmtCardContent>
                <CmtCardFooter>
                    <Box sx={{ display: 'flex', justifyContent: "flex-end", }} >

                        {props && !props.updateState && <Button style={{ marginRight: 10 }} variant="contained" color="primary">
                            Save
                        </Button>}
                        {props.updateState && <Button style={{ marginRight: 10 }} variant="contained" color="primary">
                            Update
                        </Button>}
                        <Button onClick={() => props.changeAddState()} variant="contained" >
                            Clear
                        </Button>
                    </Box>
                </CmtCardFooter>
            </CmtCard>

        </TableRow>
    );
};

export default AddRow;
