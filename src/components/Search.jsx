import React, { useState } from 'react';
import axios from 'axios';
import plansData from '../constants/Plans.json';
import plane from '../assets/plane.json'
import Lottie from 'lottie-react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [spellingSuggestions, setSpellingSuggestions] = useState([]);
  const [wordCompletions, setWordCompletions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');

  const handleSearchQueryChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    setError('');

    // Call the word completion API for word completions
    axios.get(`http://localhost:9091/mobile-plans/wordcompletion/${value}`)
      .then(response => {
        const completion = response.data['Last Word'];
        setWordCompletions([completion]);
      })
      .catch(error => {
        console.error('Error fetching word completion:', error);
        setWordCompletions([]);
      });

    // Reset spelling suggestions when the user types
    setSpellingSuggestions([]);
    setShowSuggestions(false);
  };

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      setError('Please enter text to search 😬'); 
      return; 
    }
    setError('');

    setWordCompletions([]);

    axios.get(`http://localhost:9091/mobile-plans/spellCheck/${searchQuery}`)
      .then(response => {
        if (response.data.length === 0) {
          setError('No matching words in our dictionary 🥹 Try another word!!');
          setShowSuggestions(false);
          setSearchResults([]);
        } else {
          const suggestions = response.data;
          setSpellingSuggestions(suggestions);
          setShowSuggestions(true);
        }
      })
      .catch(error => {
        setError('Invalid word format 🤥');
        console.error('Error fetching spelling suggestions:', error);
        setSpellingSuggestions([]);
        setShowSuggestions(false);
      });


    //Filter   
    /*
    const filteredResults = plansData.filter(plan => {
      const queryLowerCase = searchQuery.toLowerCase();
      return (
        plan.provider.toLowerCase().includes(queryLowerCase) ||
      plan.planName.toLowerCase().includes(queryLowerCase) ||
      plan.planData.toLowerCase().includes(queryLowerCase) ||
      plan.monthlyCost.toLowerCase().includes(queryLowerCase) ||
      plan.dataAllowance.toLowerCase().includes(queryLowerCase) ||
      plan.networkCoverage.toLowerCase().includes(queryLowerCase) ||
      plan.callAndTextAllowance.toLowerCase().includes(queryLowerCase)
      );
    });

    console.log('Filtered Results:', filteredResults); // Log filtered results

    setSearchResults(filteredResults);
    */
    const filteredResults = plansData.reduce((accumulator, plan) => {
      const queryLowerCase = searchQuery.toLowerCase();
      const matchedProps = {
        provider: plan.provider,
        planName: plan.planName,
        planData: plan.planData,
        monthlyCost: plan.monthlyCost,
        dataAllowance: plan.dataAllowance,
        networkCoverage: plan.networkCoverage,
        callAndTextAllowance: plan.callAndTextAllowance
      };
    
      Object.keys(matchedProps).forEach(prop => {
        if (matchedProps[prop].toLowerCase().includes(queryLowerCase)) {
          accumulator.push(matchedProps);
        }
      });
    
      return accumulator;
    }, []);
    
    setSearchResults(filteredResults);

    
  };


  //Web page
  return (
    <div className="flex flex-col items-center justify-center h-full mb-10">
      <div style={{ width: '100%', maxWidth: '800px', marginTop: '-15rem' }}> {/* Reduced margin top */}
            <Lottie animationData={plane} />
          </div>
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Want to know more about Mobile Plans?</h1>
      <div className="relative flex items-center mt-4">
        <input
          type="text"
          className="border border-gray-300 rounded-l-md px-4 py-3 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl mr-4"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-r-md text-xl"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {error && (
        <p className="text-red-500 mt-2">{error}</p>
      )}
      {showSuggestions && (
        <div className="flex flex-col justify-center mt-4 gap-4 text-center">
          <h3 className="text-gray-500 text-lg font-bold mb-2">Did you mean?</h3>
          <div className="flex flex-wrap justify-center">
            {spellingSuggestions.map((suggestion, index) => (
              <div key={index} className="bg-gray-300 rounded-md p-2 mr-2">
                {suggestion}
              </div>
            ))}
          </div>
        </div>
      )}
      {wordCompletions.length > 0 && (
        <div className="flex flex-wrap justify-center mt-4 gap-4">
          {wordCompletions.map((wordCompletion, index) => (
            <div key={index} className="bg-gray-300 rounded-md p-2 text-center mx-1">
              {wordCompletion}
            </div>
          ))}
        </div>
      )}
      {searchResults.length > 0 && (
        <div className="m-14">
        <h3 className="text-white text-lg font-bold mb-4 relative ml-24">Search Results:</h3>
        <div className="flex flex-wrap justify-center gap-4">
            {searchResults.map((result, index) => (
              <div key={index} className="bg-gray-100 rounded-l shadow-md p-3 mb-3 max-w-md">
                <p className="text-gray-700 text-l font-semibold mb-1">Provider: {result.provider}</p>
                <p className="text-gray-700 text-l  font-semibold mb-1">Plan Name: {result.planName}</p>
                <p className="text-gray-700 text-l  font-semibold mb-1">Plan Data: {result.planData}</p>
                <p className="text-gray-700 text-l  font-semibold mb-1">Monthly Cost: {result.monthlyCost}</p>
                <p className="text-gray-700 text-l  font-semibold mb-1">Data Allowance: {result.dataAllowance}</p>
                <p className="text-gray-700 text-l  font-semibold mb-1">Network Coverage: {result.networkCoverage}</p>
                <p className="text-gray-700 text-l  font-semibold mb-1">Call and Text Allowance: {result.callAndTextAllowance}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;

