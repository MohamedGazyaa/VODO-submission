import React from 'react';
import {Routes, Route} from "react-router-dom";
import Layout from './Layout';
import HomePage from './Pages/HomePage';
import DetailsPage from './Pages/DetailsPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:id" element={<DetailsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
