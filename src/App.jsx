// src/App.jsx

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AddBook from "./components/AddBook";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </Router>
  );
};

export default App;
