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
    // paddingBottom: 10,
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

const CountryMasterTable = props => {
  let countries = useSelector(({ country }) => country.countriesList);
  let filteredList = useSelector(({ country }) => country.filteredList);
  let rowCount = useSelector(({ country }) => country.totalRecords);

  console.log(countries.length);

  // [ "row-number", "country-iso","country-code","country-name","currency-code","is-active", "active-status", "last-update-by", "last-update-on"]
  let hideColumns = ['row-number', 'country-iso', 'country-key', 'currency-code', 'is-active', 'active-status'];
  // const [tableData, setTableData] = useState(props?.countries ? props.countries : []);
  const [search, setValue] = useState('');
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  // const [anchorEl, setAnchorEl] = React.useState(null);
  const [state, setState] = React.useState({
    checked1: true,
    checked2: true,
    checked3: true,
    checked4: true,
    checked5: true,
    checked6: true,
  });
  const [add, setAdd] = useState(false);
  const [update, setUpdate] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  let dispatch = useDispatch();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);

    dispatch(DataMethods['countryService'].getAllCountries(search, newPage, rowsPerPage));
  };

  const handleChangeRowsPerPage = event => {
    console.log('no. of record', event);
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);

    dispatch(DataMethods['countryService'].getAllCountries(search, 0, parseInt(event.target.value, 10)));
  };

  const changeHandlerFalse = () => {
    update ? setUpdate(false) : setAdd(false);
  };

  const changeUpdateStatusToTrue = countryToUpdate => {
    setSelectedCountry(countryToUpdate);
    setUpdate(true);
  };

  const addCountry = country => {
    changeHandlerFalse();
    dispatch(DataMethods['countryService'].AddCountry(country));
  };
  const updateCountry = country => {
    changeHandlerFalse();

    dispatch(DataMethods['countryService'].UpdateCountry(selectedCountry['country-key'], country));
    setSelectedCountry('');
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
    dispatch(DataMethods['countryService'].getAllCountries(searchText, page, rowsPerPage));
  }

  useEffect(() => {
    console.log('use Effect country');
    dispatch(DataMethods['countryService'].getAllCountries(search, page, rowsPerPage));
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
                updateCountry={updateCountry}
                addCountry={addCountry}
                selectedCountry={selectedCountry}
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
                // value={search}
                onChange={e => SearchRecordsDebounce(e.target.value)}
              />
            </Box>
          </Box>
        </CmtCardHeader>

        <CmtCardContent className={classes.cardContentRoot}>
          <PerfectScrollbar className={classes.scrollbarRoot}>
            {(!search && countries.length) || (search && filteredList.length) ? (
              <OrderTable
                updateState={update}
                changeUpdateStatusToTrue={changeUpdateStatusToTrue}
                tableData={search ? filteredList : countries}
                state={state}
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

export default CountryMasterTable;
