// Rogers.jsx
import React from 'react';
import Card from './Card';
import { rogersPlans } from '../constants';

const Rogers = () => {
  return (
    <div>
      <Card plans={rogersPlans} provider="Rogers" />
    </div>
  );
};

export default Rogers;
