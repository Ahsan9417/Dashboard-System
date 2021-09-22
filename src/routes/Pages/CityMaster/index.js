import React from 'react';
import GridContainer from '../../../@jumbo/components/GridContainer';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';
import Box from '@material-ui/core/Box';
import IntlMessages from '../../../@jumbo/utils/IntlMessages';
import Grid from '@material-ui/core/Grid';
import CityMasterTable from 'routes/Dashboards/Crypto/CityMasterTable';

const breadcrumbs = [
  { label: 'city', link: '/city-master' },
  { label: 'City Master ', isActive: true },
];

const ProvinceMaster = () => {
  return (
    <PageContainer heading={<IntlMessages id="pages.cityMaster" />} breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12}>
          <Box>
            <CityMasterTable />
            {/* <IntlMessages id="pages.samplePage.description" /> */}
          </Box>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default ProvinceMaster;
