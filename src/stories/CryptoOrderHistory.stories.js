import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import React from 'react';
import CountryMasterTable from '../routes/Dashboards/Crypto/CountryMasterTable';

export default {
  title: 'Crypto Order History',
  component: OrderHistory,
  decorators: [withKnobs, withA11y],
};
export const Default = () => <CountryMasterTable />;
