import React from "react";
import { Route, Routes } from "react-router-dom";
import Companies from "../Components/Companies/Companies";
import CompanyProfile from "../Components/Companies/CompanyProfile";
import CreateCompany from "../Components/Companies/CreateCompany";
import JobDetail from "../Components/Jobs/JobDetail";
import JobPage from "../Components/Jobs/JobPage";

const AllRoutes = () => {
  return (
    <Routes>
      {/* Don't Touch it Starts*/}
      <Route path='/' element={<h1>Homepage</h1>} />
      <Route path='/companies' element={<Companies />} />
      <Route path='/companies/:id' element={<CompanyProfile />} />
      <Route path='/create' element={<CreateCompany />} />
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
