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
    <h1></h1>
    <SearchBar />
    <Button text="crawl" style={{ width: '120px' }} />
  </div>
  <div className="flex justify-center items-center m-4 p-4 border border-gray-300 rounded-lg h-80">
    Output Text Goes Here
  </div>
</>

  );
};

export default Crawler;
