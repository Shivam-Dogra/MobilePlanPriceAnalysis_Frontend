import React from "react";
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";

const Crawler = () => {
  return (
    <>
  <div className="text-white flex justify-center items-center m-8 text-3xl">
    Web Crawler
  </div>
  <div className="flex flex-row justify-center items-center gap-4">
    <SearchBar placeholder="Enter URL"/>
    <Button text="crawl" style={{ width: '120px' }} />
  </div>

  <div className="flex justify-center container mx-auto items-center p-4 m-4 border border-gray-300 rounded-lg h-80 w-1/2 text-white">
    Output Text Goes Here
  </div>
</>

  );
};

export default Crawler;
