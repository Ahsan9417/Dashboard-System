import React, { useEffect, useState } from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtCardFooter from '@coremat/CmtCard/CmtCardFooter';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import OrderTable from './OrderTable';
import PerfectScrollbar from 'react-perfect-scrollbar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RefreshIcon from '@material-ui/icons/Refresh';
import { Box, TablePagination } from '@material-ui/core';
import CmtSearch from '@coremat/CmtSearch';
import AddRow from './AddRow';
import { DataMethods } from 'services/dataServices';
import { useDispatch, useSelector } from 'react-redux';

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
    backgroundColor: '#eb6b34',
    color: 'white',
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

const CityMasterTable = () => {
  let cities = useSelector(({ city }) => city.citiesList);
  let filteredList = useSelector(({ city }) => city.filteredList);
  let hideColumns = ['row-number', 'city-key', 'country-key', 'province-key'];

  let rowCount = useSelector(({ city }) => city.totalRecords);

  const [search, setValue] = useState('');

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [add, setAdd] = useState(false);
  const [update, setUpdate] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');
  let dispatch = useDispatch();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    dispatch(DataMethods['cityService'].getAllCities(search, newPage, rowsPerPage));
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    dispatch(DataMethods['cityService'].getAllCities(search, 0, parseInt(event.target.value, 10)));
  };

  const changeHandlerFalse = () => {
    update ? setUpdate(false) : setAdd(false);
    setSelectedCity('');

  };
  const changeUpdateStatusToTrue = city => {
    setSelectedCity(city);
    setUpdate(true);
  };

  const addCity = city => {
    changeHandlerFalse();
    dispatch(DataMethods['cityService'].AddCity(city));
  };
  const updateCity = city => {
    changeHandlerFalse();

    dispatch(DataMethods['cityService'].UpdateCity(selectedCity['city-key'], city));
    setSelectedCity('');
  };
  function debounce(func, wait) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }

  const SearchRecordsDebounce = debounce(Search, 2000);

  function Search(e) {
    setValue(e);
    LoadTable(e ? e : '');
  }

  function LoadTable(searchText = '') {
    dispatch(DataMethods['cityService'].getAllCities(searchText, page, rowsPerPage));
  }

  useEffect(() => {
    console.log('use Effect country');
    LoadTable();
  }, []);
  return (
    <>
      {add || update ? (
        <CmtCard style={{ marginBottom: 30 }}>
          <CmtCardContent className={classes.cardContentRoot}>
            <PerfectScrollbar>
              <AddRow
                updateState={update}
                updateCity={updateCity}
                addCity={addCity}
                selectedCity={selectedCity}
                changeAddState={changeHandlerFalse}
              />
            </PerfectScrollbar>
          </CmtCardContent>
        </CmtCard>
      ) : (
        ''
      )}
      <CmtCard>
        <CmtCardHeader
          className={classes.headerRoot}
          title={
            <Box display="flex" alignItems={{ md: 'center' }} flexDirection={{ xs: 'column', md: 'row' }}>
              {!add && (
                <IconButton aria-label="edit" onClick={() => setAdd(!add)} className={classes.backgroundEditColorChange}>
                  <AddIcon />
                </IconButton>
              )}
              <IconButton aria-label="edit" onClick={() => LoadTable()} className={classes.backgroundEditColorChange}>
                <RefreshIcon />
              </IconButton>
            </Box>
          }
          actionsPos="top-corner">
          <Box className={classes.searchAction}>
            <Box className={classes.searchActionBar}>
              <CmtSearch
                border={true}
                onlyIcon={false}
                iconPosition="right"
                align="right"
                placeholder="Search"
                onChange={e => SearchRecordsDebounce(e.target.value)}
              />
            </Box>
          </Box>
        </CmtCardHeader>

        <CmtCardContent className={classes.cardContentRoot}>
          <PerfectScrollbar className={classes.scrollbarRoot}>
            {(!search && cities.length) || (search && filteredList.length) ? (
              <OrderTable
                updateState={update}
                changeUpdateStatusToTrue={changeUpdateStatusToTrue}
                tableData={search ? filteredList : cities}
                hideColumns={hideColumns}
              />
            ) : (
              'Records Not Found'
            )}
          </PerfectScrollbar>
        </CmtCardContent>
        <CmtCardFooter>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rowCount}
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

export default CityMasterTable;
