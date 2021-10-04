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
import CheckedBoxTree from './CheckedBoxTree';
import { useDispatch, useSelector } from 'react-redux';


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
    console.log(props);
    const classes = useStyles();
    let menuList = useSelector(({ userRole }) => userRole.menusList)

    const [menuName, setMenuName] = useState(props.selectedUserPrivilege && props.selectedUserPrivilege["menu-rights-name"] ? props.selectedUserPrivilege["menu-rights-name"] : "")
    const [userPrivilegesList, setUserPrivilegesList] = useState([])

    const [userPrivilege, setUserPrivilege] = React.useState({
        name: '',
        key: '',
    });
    const handleChange = event => {
        console.log(event.target.selectedOptions[0]);
        setUserPrivilege({
            name: event.target.selectedOptions[0].text,
            key: event.target.selectedOptions[0].value,
        });

    };
    let dispatch = useDispatch();
    const getUserMenus = () => {
        dispatch(DataMethods['userRoleService'].getAllMenus())
    };

    useEffect(() => {

        console.log('user privilege Add row');
        getUserMenus()
    }, []);


    return (

        <TableRow className={classes.tableRowRoot}>

            <CmtCard style={{ marginBottom: 30, marginRight: 10, marginTop: 10, marginLeft: 10, }} >
                <CmtCardContent className={classes.cardContentRoot}>
                    <PerfectScrollbar className={classes.scrollbarRoot}>
                        <Box sx={{ display: 'flex', margin: 10 }}>
                            <Box >
                                <TextField style={{ marginRight: 10, width: "100%" }} id="outlined-basic" label="Menu Name" variant="outlined" value={menuName} onChange={(e) => setMenuName(e.target.value)} />
                            </Box>
                            {/* <Box >

                                <FormControl variant="outlined" style={{ width: "100%", marginRight: 20 }} >
                                    <InputLabel htmlFor="outlined-age-native-simple">Menu Rights</InputLabel>
                                    <Select
                                        native
                                        value={userPrivilege.name}
                                        onChange={handleChange}
                                        label="Menu Rights Name"
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
                            </Box> */}
                            <Box >
                                {menuList.length ? <CheckedBoxTree menuList={menuList} /> : ""}
                            </Box>
                        </Box>
                    </PerfectScrollbar>
                </CmtCardContent>
                <CmtCardFooter>
                    <Box sx={{ display: 'flex', justifyContent: "flex-end", }} >

                        <Button onClick={(e) => props[props.updateState ? "updateUserPrivilege" : "addUserPrivilege"]({ countryKey: userPrivilege["key"] })} style={{ marginRight: 10 }} variant="contained" color="primary">
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


const RecursivePrevileges = ({ items }) => {
    const hasChildren = items && items.length

    return (
        <>
            {hasChildren && items.map((item) => (
                <RecursivePrevileges key={item.name} {...item} />
            ))}
        </>
    )
}

export default AddRow;
