// Bell.jsx
import React from 'react';
import Card from './Card';
import { bellPlans } from '../constants';

const Bell = () => {
  return (
    <div>
      <Card plans={bellPlans} provider="Bell" />
    </div>
  );
};

export default Bell;
