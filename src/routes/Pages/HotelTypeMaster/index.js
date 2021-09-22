import React from 'react';
import GridContainer from '../../../@jumbo/components/GridContainer';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';
import Box from '@material-ui/core/Box';
import IntlMessages from '../../../@jumbo/utils/IntlMessages';
import Grid from '@material-ui/core/Grid';
import CountryMasterTable from 'routes/Dashboards/Crypto/CountryMasterTable';
// import MaterialTableDemo from '../../../@fake-db/mui-components/table/MaterialTableDemo';
import HotelTypeMasterTable from 'routes/Dashboards/Crypto/HotelTypeMasterTable';

const breadcrumbs = [
  { label: 'Hotel-Type-Master', link: '/hotel-type-master' },
  { label: 'Hotel Type Master ', isActive: true },
];

const HotelTypeMaster = () => {
  return (
    <PageContainer heading={<IntlMessages id="pages.hotelType" />} breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12}>
          <Box>
            <HotelTypeMasterTable />
            {/* <IntlMessages id="pages.samplePage.description" /> */}
          </Box>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default HotelTypeMaster;
