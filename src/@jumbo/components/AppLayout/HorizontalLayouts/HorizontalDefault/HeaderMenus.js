import React from 'react';

import { PostAdd } from '@material-ui/icons';
import CmtHorizontal from '../../../../../@coremat/CmtNavigation/Horizontal';
import IntlMessages from '../../../../utils/IntlMessages';

const HeaderMenus = () => {

  console.log('HeaderMenus');
  const navigationMenus = [
    {
      name: <IntlMessages id={'sidebar.main'} />,
      type: 'collapse',
      children: [
        {
          name: <IntlMessages id={'pages.samplePage'} />,
          icon: <PostAdd />,
          type: 'item',
          link: '/country-master',
        },
        {
          name: <IntlMessages id={'pages.testing'} />,
          icon: <PostAdd />,
          type: 'item',
          link: '/province-master',
        },
        {
          name: <IntlMessages id={'pages.cityMaster'} />,
          icon: <PostAdd />,
          type: 'item',
          link: '/city-master',
        },
        {
          name: <IntlMessages id={'pages.hotelType'} />,
          icon: <PostAdd />,
          type: 'item',
          link: '/hotel-type-master',
        },
        {
          name: <IntlMessages id={'pages.users'} />,
          icon: <PostAdd />,
          type: 'item',
          link: '/users',
        },
        {
          name: <IntlMessages id={'pages.changePassword'} />,
          icon: <PostAdd />,
          type: 'item',
          link: '/change-password',
        },
        {
          name: <IntlMessages id={'pages.userPrivilege'} />,
          icon: <PostAdd />,
          type: 'item',
          link: '/user-privilege',
        },
      ],
    },
      
  ];

  return <CmtHorizontal menuItems={navigationMenus} />;
};

export default HeaderMenus;
