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
    const [users, setUsers] = useState([])

    // const [countryKey, setCountryKey] = useState(props.selectedProvince ? props.selectedProvince["country-key"] : "")
    const [userName, setUserName] = useState(props.selectedUser ? props.selectedUser["province-name"] : "")
    const [password, setPassword] = useState(props.selectedUser ? props.selectedUser["province-name"] : "")
    const [confirmPassword, setConfirmPassword] = useState(props.selectedUser ? props.selectedUser["province-name"] : "")
    const [company, setCompany] = React.useState({
        name: '',
        key: '',
    });
    const [companyBranch, setCompanyBranch] = React.useState({
        name: '',
        key: '',
    });
    const [menuRights, setMenuRights] = React.useState({
        name: '',
        key: '',
    });

    const handleChange = event => {
        console.log(event.target.selectedOptions[0]);
        setCompany({
            name: event.target.selectedOptions[0].text,
            key: event.target.selectedOptions[0].value,
        });
        setCompanyBranch({
            name: event.target.selectedOptions[0].text,
            key: event.target.selectedOptions[0].value,
        });
        setMenuRights({
            name: event.target.selectedOptions[0].text,
            key: event.target.selectedOptions[0].value,
        });

    };

    const getUsers = async () => {
        setUsers(await DataMethods['utilsService'].getAllCountries("", 1, 100))
    };


    useEffect(() => {

        console.log('user Table');
        console.log('use Effect users');
        // let a  =await DataMethods['utilsService'].getAllCountries("", 1, 100)
        // console.log(a);
        console.log(users);
        getUsers()

    }, []);

    return (
        <TableRow className={classes.tableRowRoot}>

            <CmtCard style={{ marginBottom: 30, marginRight: 10, marginTop: 10, marginLeft: 10, }} >
                <CmtCardContent className={classes.cardContentRoot}>
                    <PerfectScrollbar className={classes.scrollbarRoot}>
                        <Box sx={{ display: 'flex', margin: 10 }}>
                            <TextField style={{ marginRight: 10, width: "100%" }} id="outlined-basic" label="User Name" defaultValue="admin" variant="outlined" value={userName} onChange={(e) => setUserName(e.target.value)} />
                            <TextField style={{ marginRight: 10, width: "100%" }} id="outlined-basic" label="Password" defaultValue="admin" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <TextField style={{ marginRight: 10, width: "100%" }} id="outlined-basic" label="Confirm Password" defaultValue="admin" variant="outlined" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </Box>
                        <Box sx={{ display: 'flex', margin: 10 }}>
                            <FormControl variant="outlined" style={{ marginRight: 7 }} >
                                <InputLabel htmlFor="outlined-age-native-simple">Company</InputLabel>
                                <Select
                                    native
                                    // value={countryName.name}
                                    onChange={handleChange}
                                    label="Company"
                                    inputProps={{
                                        name: 'name',
                                        id: 'outlined-age-native-simple',
                                    }}>
                                    <option aria-label="None" value="" />
                                    {
                                        users.map((x, index) => {
                                            // selected={(props.selectedProvince && (x["country-key"] == props.selectedProvince["country-key"]))}
                                            return <option selected={(props.selectedUser && (x["country-key"] == props.selectedUser["country-key"]))} name={x["country-name"]} value={x["country-key"]}>{x["country-name"]}</option>
                                        })
                                    }

                                </Select>
                            </FormControl>
                            <FormControl variant="outlined"  style={{ marginRight: 7 }} >
                                <InputLabel htmlFor="outlined-age-native-simple">Company Branch</InputLabel>
                                <Select
                                    native
                                    // value={countryName.name}
                                    onChange={handleChange}
                                    label="Company Branch"
                                    inputProps={{
                                        name: 'name',
                                        id: 'outlined-age-native-simple',
                                    }}>
                                    <option aria-label="None" value="" />
                                    {
                                        users.map((x, index) => {
                                            // selected={(props.selectedProvince && (x["country-key"] == props.selectedProvince["country-key"]))}
                                            return <option selected={(props.selectedUser && (x["country-key"] == props.selectedUser["country-key"]))} name={x["country-name"]} value={x["country-key"]}>{x["country-name"]}</option>
                                        })
                                    }

                                </Select>
                            </FormControl>
                            <FormControl variant="outlined"  style={{ marginRight: 7 }} >
                                <InputLabel htmlFor="outlined-age-native-simple">Menu Rights</InputLabel>
                                <Select
                                    native
                                    // value={countryName.name}
                                    onChange={handleChange}
                                    label="Menu Rights"
                                    inputProps={{
                                        name: 'name',
                                        id: 'outlined-age-native-simple',
                                    }}>
                                    <option aria-label="None" value="" />
                                    {
                                        users.map((x, index) => {
                                            // selected={(props.selectedProvince && (x["country-key"] == props.selectedProvince["country-key"]))}
                                            return <option selected={(props.selectedUser && (x["country-key"] == props.selectedUser["country-key"]))} name={x["country-name"]} value={x["country-key"]}>{x["country-name"]}</option>
                                        })
                                    }

                                </Select>
                            </FormControl>
                        </Box>
                    </PerfectScrollbar>
                </CmtCardContent>
                <CmtCardFooter>
                    <Box sx={{ display: 'flex', justifyContent: "flex-end", }} >

                        <Button onClick={(e) => props[props.updateState ? "updateProvince" : "addUsers"]({ countryKey: company["key"], countryKey: companyBranch["key"],countryKey: menuRights["key"], userName, password, confirmPassword })} style={{ marginRight: 10 }} variant="contained" color="primary">
                            {props.updateState ? 'Update' : 'Save'}
                        </Button>
                        <Button onClick={(e) => props.changeAddState(e)} variant="contained" >
                            Cancel
                        </Button>
                    </Box>
                </CmtCardFooter>
            </CmtCard>

        </TableRow>
    );
};

export default AddRow;

