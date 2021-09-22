import React from 'react';
import GridContainer from '../../../@jumbo/components/GridContainer';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';
import Box from '@material-ui/core/Box';
import IntlMessages from '../../../@jumbo/utils/IntlMessages';
import Grid from '@material-ui/core/Grid';
import ProvinceMasterTable from 'routes/Dashboards/Crypto/ProvinceMasterTable';

const breadcrumbs = [
  { label: 'Province', link: '/province-master' },
  { label: 'Province Master ', isActive: true },
];

const ProvinceMaster = () => {
  return (
    <PageContainer heading={<IntlMessages id="pages.testing" />} breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12}>
          <Box>
            <ProvinceMasterTable />
            {/* <IntlMessages id="pages.samplePage.description" /> */}
          </Box>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default ProvinceMaster;
