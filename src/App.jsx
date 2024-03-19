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

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bell" element={<Bell/>}/>
        <Route path="/rogers" element={<Rogers/>}/>
        <Route path="/freedom" element={<Freedom/>}/>
        <Route path="/bestplan" element={<BestPlan/>}/>
        <Route path="/crawl" element={<Crawler/>}/>
      </Routes>
    </>
  );
}

export default App;
