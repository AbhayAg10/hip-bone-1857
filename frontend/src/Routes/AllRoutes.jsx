import React from "react";
import { Route, Routes } from "react-router-dom";
import Companies from "../Components/Companies/Companies";
import CompanyProfile from "../Components/Companies/CompanyProfile";
import HomePage from "../Components/Homepage/HomePage";
import JobDetail from "../Components/Jobs/JobDetail";
import JobPage from "../Components/Jobs/JobPage";

const AllRoutes = () => {
  return (
    <Routes>
      {/* Don't Touch it Starts*/}
      <Route path='/' element={<HomePage />} />
      <Route path='/companies' element={<Companies />} />
      <Route path='/companies/:id' element={<CompanyProfile />} />
      {/* Don't Touch it Ends*/}

      <Route path='/jobpage' element={<JobPage />}>
        JobPage
      </Route>
      <Route path='/jobpage/:jobId' element={<JobDetail />}>
        JobPage
      </Route>
    </Routes>
  );
};

export default AllRoutes;
