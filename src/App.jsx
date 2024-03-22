import "./App.css";
import Bell from "./components/Bell";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Rogers from "./components/Rogers";
import Freedom from "./components/Freedom";
import Home from "./components/Home";
import BestPlan from "./components/BestPlan";
import Crawler from "./Features/Crawler";
import FrequencyCountSearchFrequency from "./Features/FrequencyCountSearchFrequency";
import PageRanking from "./Features/PageRanking";
import ErrorPage404 from "./components/ErrorPage404";
import Team from "./components/Team";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/team" element={<Team />} />
        <Route path="/mobile-plans/bell" element={<Bell/>}/>
        <Route path="/mobile-plans/rogers" element={<Rogers/>}/>
        <Route path="/mobile-plans/freedom" element={<Freedom/>}/>
        <Route path="/mobile-plans/bestplan" element={<BestPlan/>}/>
        <Route path="/mobile-plans/crawl" element={<Crawler/>}/>
        <Route path="/mobile-plans/frequencyCount" element={<FrequencyCountSearchFrequency/>}/>
        <Route path="/mobile-plans/pageRanking" element={<PageRanking/>}/>
        <Route path="*" element={<ErrorPage404 />} />
      </Routes>
      
    </>
  );
}

export default App;
