import React, { useState } from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtCardFooter from '@coremat/CmtCard/CmtCardFooter';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import OrderTable from './OrderTable';
import { crypto } from '../../../../@fake-db';
import PerfectScrollbar from 'react-perfect-scrollbar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RefreshIcon from '@material-ui/icons/Refresh';
import { Box, Checkbox, fade, FormControlLabel, Menu, MenuItem, TablePagination } from '@material-ui/core';
import CmtSearch from '@coremat/CmtSearch';
import FilterListIcon from '@material-ui/icons/FilterList';
import AddRow from "./AddRow"

const useStyles = makeStyles(theme => ({

  cardContentRoot: {
    padding: '0 !important',
  },
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  titleRoot: {
    letterSpacing: 0.15,
  },
  scrollbarRoot: {
    height: 347,
  },
  backgroundEditColorChange: {
    margin: theme.spacing(2),
    width: 60,
    height: 30,
    borderRadius: 10,
    backgroundColor: "#eb6b34",
    color: "white"
  },
  headerRoot: {
    paddingBottom: 10,
    paddingTop: 10,
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      '&.Cmt-header-root': {
        flexDirection: 'column',
      },
      '& .Cmt-action-default-menu': {
        position: 'absolute',
        right: 24,
        top: 5,
      },
    },
  },

  searchAction: {
    position: 'relative',
    width: 38,
    height: 38,
  },
  searchActionBar: {
    position: 'absolute',
    right: 0,
    top: 2,
    zIndex: 1,
  },

}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Donut', 452, 25.0, 51, 4.9),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Honeycomb', 408, 3.2, 87, 6.5),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Jelly Bean', 375, 0.0, 94, 0.0),
  createData('KitKat', 518, 26.0, 65, 7.0),
  createData('Lollipop', 392, 0.2, 98, 0.0),
  createData('Marshmallow', 318, 0, 81, 2.0),
  createData('Nougat', 360, 19.0, 9, 37.0),
  createData('Oreo', 437, 18.0, 63, 4.0),
];


const UsersTable = () => {
  const [tableData, setTableData] = useState(crypto.orders);
  const [value, setValue] = useState('');
  const classes = useStyles();
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [state, setState] = React.useState({
    checked2: true,
    checked3: true,
    checked4: true,
    checked5: true,
    checked6: true,
  });

  const [add, setAdd] = useState(false)
  const [update, setUpdate] = useState(false)


  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const changeHandlerFalse = () => {
    setAdd(false)
    setUpdate(false)

  }
  const changeUpdateStatusToTrue = () => {
    setUpdate(true)
  }
  const changeHandlerTrue = () => {
    setAdd(true)
  }


  return (
    <>
      {add &&
        <CmtCard style={{ marginBottom: 30, }} >
          <CmtCardContent className={classes.cardContentRoot}>
            <PerfectScrollbar className={classes.scrollbarRoot}>
              <AddRow updateState={update} changeAddState={changeHandlerFalse} />
            </PerfectScrollbar>
          </CmtCardContent>
        </CmtCard>
      }
      <CmtCard>
        <CmtCardHeader
          className={classes.headerRoot}
          title={
            <Box display="flex" alignItems={{ md: 'center' }} flexDirection={{ xs: 'column', md: 'row' }}>
              {!add &&
                <IconButton aria-label="edit" onClick={() => setAdd(!add)} className={classes.backgroundEditColorChange} >
                  <AddIcon />
                </IconButton>
              }
              <IconButton aria-label="edit" className={classes.backgroundEditColorChange}>
                <RefreshIcon />
              </IconButton>
              {/* <Box>
                <IconButton className={classes.backgroundEditColorChange} aria-label="filter list" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                  <FilterListIcon />
                </IconButton>
                <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>

                  <MenuItem > <FormControlLabel
                    control={<Checkbox checked={state.checked2} onChange={handleChange} name="checked2" color="primary" />}
                    label="User Name"
                  /></MenuItem>
                  <MenuItem > <FormControlLabel
                    control={<Checkbox checked={state.checked3} onChange={handleChange} name="checked3" color="primary" />}
                    label="Created By"
                  /></MenuItem>
                  <MenuItem > <FormControlLabel
                    control={<Checkbox checked={state.checked4} onChange={handleChange} name="checked4" color="primary" />}
                    label="Created On"
                  /></MenuItem>
                  <MenuItem > <FormControlLabel
                    control={<Checkbox checked={state.checked5} onChange={handleChange} name="checked5" color="primary" />}
                    label="Updated By"
                  /></MenuItem>
                  <MenuItem > <FormControlLabel
                    control={<Checkbox checked={state.checked6} onChange={handleChange} name="checked6" color="primary" />}
                    label="Updated On"
                  /></MenuItem>
                </Menu>
              </Box> */}

            </Box>
          }
          actionsPos="top-corner"
        >
          <Box className={classes.searchAction}>
            <Box className={classes.searchActionBar}>
              <CmtSearch
                border={true}
                onlyIcon={false}
                iconPosition="right"
                align="right"
                placeholder="Search"
                value={value}
                onChange={e => setValue(e.target.value)} />
            </Box>
          </Box>
        </CmtCardHeader>

        <CmtCardContent className={classes.cardContentRoot}>
          <PerfectScrollbar className={classes.scrollbarRoot}>
            <OrderTable updateState={update} changeUpdateStatusToTrue={changeUpdateStatusToTrue} tableData={tableData} state={state} changeEditStateTrue={changeHandlerTrue} />
          </PerfectScrollbar>
        </CmtCardContent>
        <CmtCardFooter>
          <TablePagination

            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </CmtCardFooter>
      </CmtCard>
    </>
  );
};

export default UsersTable;
