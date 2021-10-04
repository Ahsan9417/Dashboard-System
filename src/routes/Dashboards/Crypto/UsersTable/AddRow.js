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
import MultiSelect from "./MultiSelect"

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
    const [branches, setBranchesDropDown] = useState([])
    const [menus, setMenusDropDown] = useState([])

    const [userName, setUserName] = useState(props.selectedUser ? props.selectedUser["user-name"] : "")
    const [password, setPassword] = useState(props.selectedUser ? props.selectedUser["password"] : "")
    const [confirmPassword, setConfirmPassword] = useState(props.selectedUser ? props.selectedUser["confirm-password"] : "")

    const [company, setCompany] = React.useState("");
    const [companyBranch, setCompanyBranch] = React.useState({
        name: '',
        key: '',
    });
    const [menuRights, setMenuRights] = React.useState({
        name: '',
        key: '',
    });

    const handleChange = event => {
        console.log(event.target.name)
        console.log(event.target.selectedOptions[0].text);
        console.log(event.target.selectedOptions[0].value);
        switch (event.target.name.toLowerCase()) {
            case 'menu':

                setMenuRights({
                    name: event.target.selectedOptions[0].text,
                    key: event.target.selectedOptions[0].value,
                });
                break;
            case 'branch':
                setCompanyBranch({
                    name: event.target.selectedOptions[0].text,
                    key: event.target.selectedOptions[0].value,
                });
                setCompany(branches.filter(x => (x["company-branch-key"] == event.target.selectedOptions[0].value))[0]["company-key"]);
                break;

            default:
                break;
        }



    };

    const getBranches = async () => {
        let data = await DataMethods['utilsService'].getBranchList("", 1, 100)
        setBranchesDropDown(data && data["company-branch-infos"] ? data["company-branch-infos"] : [])
        setMenusDropDown(data && data["web-menu-rights-masters"] ? data["web-menu-rights-masters"] : [])
    };

    useEffect(() => {
        getBranches()
    }, []);

    return (
        <TableRow className={classes.tableRowRoot}>
            <CmtCard style={{ marginBottom: 30, marginRight: 10, marginTop: 10, marginLeft: 10, }} >
                <CmtCardContent className={classes.cardContentRoot}>
                    <PerfectScrollbar className={classes.scrollbarRoot}>
                        <Box sx={{ display: 'flex', margin: 10 }}>
                            <TextField style={{ marginRight: 10, width: "100%" }} id="outlined-basic" label="User Name" variant="outlined" value={userName} onChange={(e) => setUserName(e.target.value)} />
                            <TextField style={{ marginRight: 10, width: "100%" }} id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <TextField style={{ marginRight: 10, width: "100%" }} id="outlined-basic" label="Confirm Password" variant="outlined" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </Box>
                        <Box sx={{ display: 'flex', margin: 10 }}>
                            <MultiSelect style={{ width: "100%" }} />

                            {/* <FormControl variant="outlined" style={{ marginRight: 7 }} >
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
                            </FormControl> */}
                            <FormControl variant="outlined" style={{ marginRight: 7, width: "100%" }} >
                                <InputLabel htmlFor="outlined-age-native-simple">Company Branch</InputLabel>
                                <Select
                                    native
                                    // value={countryName.name}
                                    onChange={handleChange}
                                    label="Company Branch"
                                    inputProps={{
                                        name: 'Branch',
                                        id: 'outlined-age-native-simple',
                                    }}>
                                    <option aria-label="None" value="" />
                                    {
                                        branches.map((x, index) => {
                                            return <option selected={(props.selectedUser && props.selectedUser["user-branches"]?.length && (x["company-branch-key"] == props.selectedUser["user-branches"][0]["company-branch-key"]))} name={x["country-name"]} value={x["company-branch-key"]}>{x["company-branch-name"]}</option>
                                        })
                                    }

                                </Select>
                            </FormControl>
                            <FormControl variant="outlined" style={{ marginRight: 7, width: "100%" }} >
                                <InputLabel htmlFor="outlined-age-native-simple">Menu Rights</InputLabel>
                                <Select
                                    native

                                    // value={countryName.name}
                                    onChange={handleChange}
                                    label="Menu Rights"
                                    inputProps={{
                                        name: 'Menu',
                                        id: 'outlined-age-native-simple',
                                    }}>
                                    <option aria-label="None" value="" />
                                    {
                                        menus.map((x, index) => {
                                            // selected={(props.selectedProvince && (x["country-key"] == props.selectedProvince["country-key"]))}
                                            return <option selected={(props.selectedUser && (x["menu-rights-mas-key"] == props.selectedUser))} name={x["menu-rights-mas-name"]} value={x["menu-rights-mas-key"]}>{x["menu-rights-mas-name"]}</option>
                                        })
                                    }

                                </Select>
                            </FormControl>
                        </Box>
                    </PerfectScrollbar>
                </CmtCardContent>
                <CmtCardFooter>
                    <Box sx={{ display: 'flex', justifyContent: "flex-end", }} >

                        <Button onClick={(e) => props[props.updateState ? "updateUser" : "addUser"]({ userName, password, confirmPassword, "branchList": [{ "company-key": company, "company-branch-key": companyBranch["key"], "menu-rights-mas-key": menuRights["key"] }] })} style={{ marginRight: 10 }} variant="contained" color="primary">
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

