import React, { useState, useEffect } from 'react';

const AllFilters = ({ allJobs, setFilteredJobs }) => {

    const [filters, setFilters] = useState({
    minExperience: '',
    companyName: '',
    location: '',
    remote: '',
    role: '',
    minBasePay: ''
  });
  useEffect(() => {
    applyFilters();
  }, [filters, allJobs]); // Run applyFilters whenever filters or allJobs change

  const applyFilters = () => {
    let filteredJobs = [...allJobs];

    filteredJobs = filteredJobs.filter(job => {
      const minExp = filters.minExperience ? parseInt(filters.minExperience) : 0;
      const minBasePay = filters.minBasePay ? parseInt(filters.minBasePay.replace(/\D/g, '')) : 0;


      // console.log("Job min base salary:", job.minJdSalary);
      // console.log("Selected min base pay:", minBasePay);

      return (!filters.role || job.jobRole.toLowerCase() === filters.role.toLowerCase()) &&
        (minExp === 0 || job.minExp <= minExp) &&
        (filters.remote === '' || (filters.remote === 'Remote' && job.location.toLowerCase() === 'remote') || (filters.remote === 'Onsite' && job.location.toLowerCase() !== 'remote')) &&
        (minBasePay === 0 || (job.minJdSalary !== null && job.minJdSalary >= minBasePay))

        &&
        (!filters.location || job.location.toLowerCase() === filters.location.toLowerCase()) &&
        (!filters.companyName || job.companyName.toLowerCase().includes(filters.companyName.toLowerCase()));
    });

    setFilteredJobs(filteredJobs);

  };
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };
  return (
    <div>
      <div className='filter-container'>
        <div className='role'>
          <select name="role" value={filters.role} onChange={handleChange}>
            <option value="" >
              Roles&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|
            </option>
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="ios">Ios Developer</option>
            <option value="android">Android Developer</option>
            <option value="tech lead">Tech Lead</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className='minExp'>
          <select name="minExperience" value={filters.minExperience} onChange={handleChange}>
            <option value="">Min Experience&nbsp; |</option>
            <option value="0">0 years</option>
            <option value="1">1 year</option>
            <option value="2">2 years</option>
            <option value="3">3 years</option>
            <option value="4">4 years</option>
            <option value="5">5 years</option>
            <option value="6">6 years</option>
            <option value="7">7 years</option>
            <option value="8">8 years</option>
            <option value="9">9 years</option>
            <option value="10">10 years</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className='remote'>
          <select name="remote" value={filters.remote} onChange={handleChange}>
            <option value="">Remote&nbsp; |</option>
            <option value="Onsite">Onsite</option>
            <option value="Remote">Remote</option>
          </select>
        </div>
        <div className='minbasePay'>
          <select name="minBasePay" value={filters.minBasePay} onChange={handleChange}>
            <option value="">Min Base Pay Salary &nbsp; &nbsp;  |</option>
            <option value="0">$0</option>
            <option value="20">$20</option>
            <option value="40">$40</option>
            <option value="60">$60</option>
            <option value="80">$80</option>
            <option value="100">$100</option>
            <option value="200">$200</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className='location'>
          <select name="location" value={filters.location} onChange={handleChange}>
            <option value="">Location   &nbsp;&nbsp;  | </option>
            <option value="new york">New York</option>
            <option value="london">London</option>
            <option value="tokyo">Tokyo</option>
            <option value="mumbai">Mumbai</option>
            <option value="delhi ncr">Delhi</option>
            <option value="bangalore">Bangalore</option>
            <option value="hyderabad">Hyderabad</option>
            <option value="chennai">Chennai</option>
            <option value="kolkata">Kolkata</option>
            <option value="pune">Pune</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className='name'>
          <input placeholder='Search Company Name' type="text" name="companyName" value={filters.companyName} onChange={handleChange} />
        </div>
        {/* </form> */}
      </div>


    </div>

  );
};

export default AllFilters;
