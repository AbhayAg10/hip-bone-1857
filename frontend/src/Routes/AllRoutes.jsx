import React from "react";
import { Route, Routes } from "react-router-dom";
import Companies from "../Components/Companies/Companies";
import CompanyProfile from "../Components/Companies/CompanyProfile";
import HomePage from "../Components/Homepage/HomePage";
import JobDetail from "../Components/Jobs/JobDetail";
import JobPage from "../Components/Jobs/JobPage";
import Login from "../Components/Login/Login";
import MainHomepage from "../Components/MainHome/MainHomepage";
import ServicesPage from "../Components/Services/ServicesPage";
import Signup from "../Components/Signup/Signup";


const AllRoutes = () => {
  return (
    <Routes>
      {/* Don't Touch it Starts*/}
      <Route path='/' element={<HomePage />} />
      <Route path='/companies' element={<Companies />} />
      <Route path='/companies/:id' element={<CompanyProfile />} />
      {/* Don't Touch it Ends*/}


      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/mainhome' element={<MainHomepage />} />
      <Route path='/jobpage' element={<JobPage />} />
      <Route path='/jobpage/:jobId' element={<JobDetail />} />
      <Route path='/services' element={<ServicesPage />} />
    </Routes>
  );
};

export default AllRoutes;
