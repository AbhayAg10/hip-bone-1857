import React from "react";
import { Route, Routes } from "react-router-dom";
import Companies from "../Components/Companies/Companies";
import CompanyProfile from "../Components/Companies/CompanyProfile";
import CreateCompany from "../Components/Companies/CreateCompany";
import HomePage from "../Components/Homepage/HomePage";
import JobDetail from "../Components/Jobs/JobDetail";
import JobPage from "../Components/Jobs/JobPage";
import ServicesPage from "../Components/Services/ServicesPage";

const AllRoutes = () => {
  return (
    <Routes>
      {/* Don't Touch it Starts*/}
      <Route path='/' element={<HomePage />} />
      <Route path='/companies' element={<Companies />} />
      <Route path='/companies/:id' element={<CompanyProfile />} />
      <Route path='/create' element={<CreateCompany />} />
      {/* Don't Touch it Ends*/}

      <Route path='/jobpage' element={<JobPage />} />
      <Route path='/jobpage/:jobId' element={<JobDetail />} />
      <Route path='/services' element={<ServicesPage />} />
    </Routes>
  );
};

export default AllRoutes;
