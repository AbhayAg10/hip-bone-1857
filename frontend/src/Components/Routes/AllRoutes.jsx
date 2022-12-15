import React from "react";
import { Route, Routes } from "react-router-dom";
import Companies from "../Companies/Companies";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<h1>Homepage</h1>} />
      <Route path='/companies' element={<Companies />} />
    </Routes>
  );
};

export default AllRoutes;
