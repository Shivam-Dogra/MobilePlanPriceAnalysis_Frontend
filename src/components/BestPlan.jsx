import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import Button from './Button';

const BestPlan = () => {
  const [plans, setPlans] = useState([]); // State to store the fetched plans
  const [loading, setLoading] = useState(false); // State to track loading status

  const fetchData = async (criteria) => {
    setLoading(true); // Set loading to true before making the request
    try {
      const response = await axios.get(`http://localhost:9091/mobile-plans/best-plan/${criteria}`); // Make GET request to backend API
      setPlans(response.data); // Update plans state with the fetched data
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Set loading back to false after fetching data
    }
  };

  const handlePriceButtonClick = () => {
    fetchData('price'); // Fetch plans based on price criteria
  };

  const handleDataButtonClick = () => {
    fetchData('data'); // Fetch plans based on data criteria
  };

  return (
    <div className="container mx-auto mt-12">
      <h1 className="text-3xl font-bold mb-4 font-serif text-white flex justify-center m-10">Best-Plan</h1>
      <div className="flex justify-center">
        <Button text="Price" onClick={handlePriceButtonClick} />
        <Button text="Data" onClick={handleDataButtonClick} />
      </div>
      {loading ? (
        <p  className="text-3xl font-bold text-center mb-8 text-gray-500">Scraping and getting the best plan for you..</p>
      ) : (
        <Card plans={plans} provider="Provider" />
      )}
    </div>
  );
};

export default BestPlan;
