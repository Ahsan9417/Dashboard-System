import React from 'react';
import CmtVertical from '../../../../../@coremat/CmtNavigation/Vertical';
import PerfectScrollbar from 'react-perfect-scrollbar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import IntlMessages from '../../../../utils/IntlMessages';
import { PostAdd } from '@material-ui/icons';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  perfectScrollbarSidebar: {
    height: '100%',
    transition: 'all 0.3s ease',
    '.Cmt-sidebar-fixed &, .Cmt-Drawer-container &': {
      height: 'calc(100% - 167px)',
    },
    '.Cmt-modernLayout &': {
      height: 'calc(100% - 72px)',
    },
    '.Cmt-miniLayout &': {
      height: 'calc(100% - 91px)',
    },
    '.Cmt-miniLayout .Cmt-sidebar-content:hover &': {
      height: 'calc(100% - 167px)',
    },
  },
}));

const SideBar = () => {

  //console.log('sidebar');
  const classes = useStyles();
  let links = []
  
  const authorizedMenu = useSelector(({ auth }) => auth.authorizedMenu);
  const parseNavigationList = menuArray => {
    return menuArray.map(menu => {

      let navItem = {
        name: menu["menu-name"],//<IntlMessages id={menu["menu-name"]} /> // menu["menu-name"]
        type: menu["menu-child"].length ? 'collapse' : 'item',
        link: menu["url-link"] ? menu["url-link"] : '/' + (menu["menu-name"].toLowerCase().split(' ').join('-'))
      }
      
      links.push(navItem.link)
      if (menu["menu-child"].length) {
        navItem.children = parseNavigationList(menu["menu-child"])
      }
      else navItem.icon = <PostAdd />
      // else navItem.link = menu["url-link"] ? menu["url-link"] : '/'
      return navItem;
    });
  };
  //console.log(links);

  const navigationMenus = parseNavigationList(authorizedMenu)
  // const navigationMenus = [
  //   {
  //     name: <IntlMessages id={'sidebar.main'} />,
  //     type: 'section',
  //     children: [
  //       {
  //         name: <IntlMessages id={'pages.samplePage'} />,
  //         icon: <PostAdd />,
  //         type: 'item',
  //         link: '/country-master',
  //       },
  //       {
  //         name: <IntlMessages id={'pages.testing'} />,
  //         icon: <PostAdd />,
  //         type: 'item',
  //         link: '/province-master',
  //       },
  //       {
  //         name: <IntlMessages id={'pages.cityMaster'} />,
  //         icon: <PostAdd />,
  //         type: 'item',
  //         link: '/city-master',
  //       },
  //       {
  //         name: <IntlMessages id={'pages.hotelType'} />,
  //         icon: <PostAdd />,
  //         type: 'item',
  //         link: '/hotel-type-master',
  //       },
  //       {
  //         name: <IntlMessages id={'pages.users'} />,
  //         icon: <PostAdd />,
  //         type: 'item',
  //         link: '/users',
  //       },
  //       {
  //         name: <IntlMessages id={'pages.changePassword'} />,
  //         icon: <PostAdd />,
  //         type: 'item',
  //         link: '/change-password',
  //       },
  //       {
  //         name: <IntlMessages id={'pages.userPrivilege'} />,
  //         icon: <PostAdd />,
  //         type: 'item',
  //         link: '/user-privilege',
  //       },
  //     ],
  //   },
  //   // {
  //   //   name: <IntlMessages id={'sidebar.main'} />,
  //   //   type: 'collapse',
  //   //   children: [
  //   //     {
  //   //       name: <IntlMessages id={'pages.testing'} />,
  //   //       icon: <PostAdd />,
  //   //       type: 'item',
  //   //       link: '/sample-testing',
  //   //     },
  //   //   ],
  //   // },
  // ];

  return (
    <PerfectScrollbar className={classes.perfectScrollbarSidebar}>
      <CmtVertical menuItems={navigationMenus} />
    </PerfectScrollbar>
  );
};

export default SideBar;
