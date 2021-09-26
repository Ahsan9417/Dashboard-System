import React from 'react';
import GridContainer from '../../../@jumbo/components/GridContainer';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';
import Box from '@material-ui/core/Box';
import IntlMessages from '../../../@jumbo/utils/IntlMessages';
import Grid from '@material-ui/core/Grid';
import ChangePasswordTable from 'routes/Dashboards/Crypto/ChangePasswordTable';

const breadcrumbs = [
  { label: 'Change Password', link: '/change-password' },
  { label: 'Change-Password', isActive: true },
];

const ChangePassowrd = () => {
  return (
    <PageContainer heading={<IntlMessages id="pages.changePassword" />} breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12}>
          <Box>
            <ChangePasswordTable />
            {/* <IntlMessages id="pages.samplePage.description" /> */}
          </Box>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default ChangePassowrd;
