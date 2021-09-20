import React from 'react';
import GridContainer from '../../../@jumbo/components/GridContainer';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';
import Box from '@material-ui/core/Box';
import IntlMessages from '../../../@jumbo/utils/IntlMessages';
import Grid from '@material-ui/core/Grid';
import OrderHistory from 'routes/Dashboards/Crypto/OrderHistory';

const breadcrumbs = [
  { label: 'Testing', link: '/testing' },
  { label: 'Country Testing ', isActive: true },
];

const TestingPage = () => {
  return (
    <PageContainer heading={<IntlMessages id="pages.testing" />} breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12}>
          <Box>
            <OrderHistory />
            {/* <IntlMessages id="pages.samplePage.description" /> */}
          </Box>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default TestingPage;
