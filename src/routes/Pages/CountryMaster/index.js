import GridContainer from '../../../@jumbo/components/GridContainer';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';
import Box from '@material-ui/core/Box';
import IntlMessages from '../../../@jumbo/utils/IntlMessages';
import Grid from '@material-ui/core/Grid';
import CountryMasterTable from 'routes/Dashboards/Crypto/CountryMasterTable';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import MaterialTableDemo from '../../../@fake-db/mui-components/table/MaterialTableDemo';
import CustomizedTables from '@fake-db/mui-components/table/CustomizedTables';
import { DataMethods } from '../../../services/dataServices';
import { getAllCountries } from 'redux/actions/Country';

const breadcrumbs = [
  { label: 'Country-Master', link: '/' },
  { label: 'Country Master ', isActive: true },
];

const CountryMaster = () => {
  console.log('country master loaded');
  return (

    // <div></div>
    <PageContainer heading={<IntlMessages id="pages.samplePage" />} breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12}>
          <Box>{
           <CountryMasterTable /> 
          }
            {/* <IntlMessages id="pages.samplePage.description" /> */}
          </Box>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default CountryMaster;
