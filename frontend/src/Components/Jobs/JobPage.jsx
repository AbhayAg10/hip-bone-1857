import React from "react";
import { Link } from "react-router-dom";

import jobData from "./jobData";

const JobPage = () => {
  const jobdatas = jobData.map(job => {
    return (
      <div key={job.id}>
        <h3>
          <Link to={`/jobpage/${job.id}`}>{job.title}</Link>
        </h3>
        <p>Price: ${job.pay}</p>
        <hr />
      </div>
    );
  });

  return (
    <>
      <h1>Job</h1>
      {jobdatas}
    </>
  );
};

export default JobPage;
