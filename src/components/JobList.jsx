import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobCard from './JobCard';
import AllFilters from './AllFilters';

const JobList = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1); // Track the current page number

  useEffect(() => {
    fetchData();
  }, [page]); // Fetch data whenever the page changes

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.post("https://api.weekday.technology/adhoc/getSampleJdJSON", {
        limit: 10,
        offset: (page - 1) * 10 // Calculate the offset based on the current page
      });
      const result = response.data;
      setAllJobs(prevJobs => [...prevJobs, ...result.jdList]); // Append new jobs to the existing list
      setLoading(false);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      setLoading(false);
    }
  };

  

  return (
    <div className='job-list-container'>
      <AllFilters allJobs={allJobs} setFilteredJobs={setFilteredJobs} />
      <div className='job-cards'>

        {filteredJobs.length > 0 ? filteredJobs.map((job, index) => (
          <JobCard key={`${job.jdUid}-${index}`} job={job} />
        )) : allJobs.map((job, index) => (
          <JobCard key={`${job.jdUid}-${index}`} job={job} />
        ))}

      </div>

    </div>
  );
};

export default JobList;
