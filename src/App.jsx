import "./App.css";
import Bell from "./components/Bell";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Rogers from "./components/Rogers";
import Freedom from "./components/Freedom";
import Home from "./components/Home";
import BestPlan from "./components/BestPlan";
import Crawler from "./Features/Crawler";
import FrequencyCount from "./Features/FrequencyCount";
import SearchFrequency from "./Features/SearchFrequency";
import InvertedIndexing from "./Features/InvertedIndexing";
import FindingPatterns from "./Features/FindingPatterns";
import SpellChecking from "./Features/SpellChecking";
import WordCompletion from "./Features/WordCompletion";
import DataValidation from "./Features/DataValidation";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mobile-plans/bell" element={<Bell/>}/>
        <Route path="/mobile-plans/rogers" element={<Rogers/>}/>
        <Route path="/mobile-plans/freedom" element={<Freedom/>}/>
        <Route path="/mobile-plans/bestplan" element={<BestPlan/>}/>
        <Route path="/mobile-plans/crawl" element={<Crawler/>}/>
        <Route path="/mobile-plans/frequencyCount" element={<FrequencyCount/>}/>
        <Route path="/mobile-plans/searchFrequency" element={<SearchFrequency/>}/>
        <Route path="/mobile-plans/invertedIndexing" element={<InvertedIndexing/>}/>
        <Route path="/mobile-plans/findPatterns" element={<FindingPatterns/>}/>
        <Route path="/mobile-plans/spellCheck" element={<SpellChecking/>}/>
        <Route path="/mobile-plans/wordCompletion" element={<WordCompletion/>}/>
        <Route path="/mobile-plans/dataValidation" element={<DataValidation/>}/>
      </Routes>
    </>
  );
}

export default App;
