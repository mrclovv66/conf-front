import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Choose__block from "./choose__module";
import SummaryPage from "./SummaryPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Choose__block />} />
        <Route path="/summary" element={<SummaryPage />} />
        <Route path="/cart" element={<SummaryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
