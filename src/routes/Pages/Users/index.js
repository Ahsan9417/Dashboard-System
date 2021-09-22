import React from 'react';
import GridContainer from '../../../@jumbo/components/GridContainer';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';
import Box from '@material-ui/core/Box';
import IntlMessages from '../../../@jumbo/utils/IntlMessages';
import Grid from '@material-ui/core/Grid';
import UsersTable from 'routes/Dashboards/Crypto/UsersTable';

const breadcrumbs = [
  { label: 'Users', link: '/users' },
  { label: 'Users', isActive: true },
];

const Users = () => {
  return (
    <PageContainer heading={<IntlMessages id="pages.users" />} breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12}>
          <Box>
            <UsersTable />
            {/* <IntlMessages id="pages.samplePage.description" /> */}
          </Box>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Users;
