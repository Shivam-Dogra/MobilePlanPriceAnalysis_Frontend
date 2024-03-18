// Freedom.jsx
import React from 'react';
import Card from './Card';
import { freedomPlans } from '../constants';

const Freedom = () => {
  return (
    <div>
      <Card plans={freedomPlans} provider="Freedom" />
    </div>
  );
};

export default Freedom;
