// BestPlan.jsx
import React from 'react';
import Card from './Card';
import Button from './Button';

const BestPlan = ({ plans, provider }) => {
  const handlePriceButtonClick = () => {
    // Handle Price button click
  };

  const handleDataButtonClick = () => {
    // Handle Data button click
  };

  return (
    <div className="container mx-auto mt-12">
      <h1 className="text-3xl font-bold mb-4 font-serif text-black flex justify-center m-10">Best-Plan</h1>
      <div className="flex justify-center">
        <Button text="Price" onClick={handlePriceButtonClick} />
        <Button text="Data" onClick={handleDataButtonClick} />
      </div>
      <Card plans={plans} provider={provider} />
    </div>
  );
};

export default BestPlan;
