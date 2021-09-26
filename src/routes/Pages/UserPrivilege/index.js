import React from 'react';
import GridContainer from '../../../@jumbo/components/GridContainer';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';
import Box from '@material-ui/core/Box';
import IntlMessages from '../../../@jumbo/utils/IntlMessages';
import Grid from '@material-ui/core/Grid';
import UserPrivilegeTable from 'routes/Dashboards/Crypto/UserPrivilegeTable';

const breadcrumbs = [
  { label: 'user-privilage', link: '/user-privilege' },
  { label: 'User Privilege', isActive: true },
];

const UserPrivilege = () => {
  return (
    <PageContainer heading={<IntlMessages id="pages.userPrivilege" />} breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12}>
          <Box>
            <UserPrivilegeTable />
            {/* <IntlMessages id="pages.samplePage.description" /> */}
          </Box>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default UserPrivilege;
