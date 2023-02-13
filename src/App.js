import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Add from './components/AddNew';
import Card from './components/Products';






function App() {

  

  return (
  <>
  <Routes>
     <Route path="/" element={<Card />} />
     <Route path="/addproduct" element={<Add />} />
  </Routes>
</>)
}

export default App;
