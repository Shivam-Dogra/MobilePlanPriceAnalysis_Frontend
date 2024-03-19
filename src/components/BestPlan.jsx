import React, { useState } from 'react';
import Button from './Button';
import Card from './Card';
import { bestData, bestPrice } from '../constants'; // Importing bestPrice and bestData from index.js

const BestPlan = () => {
  const [plans, setPlans] = useState(bestPrice); // State to manage which plans to display, initially set to bestPrice

  const handlePriceButtonClick = () => {
    setPlans(bestPrice); // Set plans to bestPrice when Price button is clicked
  };

  const handleDataButtonClick = () => {
    setPlans(bestData); // Set plans to bestData when Data button is clicked
  };

  return (
    <div className="container mx-auto mt-12">
      <h1 className="text-3xl font-bold mb-4 font-serif text-white flex justify-center m-10">Best-Plan</h1>
      <div className="flex justify-center">
        <Button text="Price" onClick={handlePriceButtonClick} />
        <Button text="Data" onClick={handleDataButtonClick} />
      </div>
      <Card plans={plans} provider="Provider" /> {/* Pass plans state to Card component */}
    </div>
  );
};

export default BestPlan;
