import React from 'react';

import { PostAdd } from '@material-ui/icons';
import CmtHorizontal from '../../../../../@coremat/CmtNavigation/Horizontal';
import IntlMessages from '../../../../utils/IntlMessages';

const HeaderMenus = () => {
  const navigationMenus = [
    {
      name: <IntlMessages id={'sidebar.main'} />,
      type: 'collapse',
      children: [
        {
          name: <IntlMessages id={'pages.samplePage'} />,
          icon: <PostAdd />,
          type: 'item',
          link: '/sample-page',
        },
      ],
    },
      {
      name: <IntlMessages id={'sidebar.main'} />,
      type: 'collapse',
      children: [
        {
          name: <IntlMessages id={'pages.testing'} />,
          icon: <PostAdd />,
          type: 'item',
          link: '/sample-testing',
        },
      ],
    },
  ];

  return <CmtHorizontal menuItems={navigationMenus} />;
};

export default HeaderMenus;
