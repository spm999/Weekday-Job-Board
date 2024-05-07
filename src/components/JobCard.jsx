import React, { useState } from 'react';

const JobCard = ({ job }) => {

    const jobLink = (link) => {
        window.open(link, '_blank');
    };

    return (
        <div className="job-card">
            <div className='upper-container'>
                <div>
                    <img className='company-logo' src={job.logoUrl} alt={job.companyName} />
                </div>
                <div className='main-details'>
                    <p style={{ fontSize: "13px", fontWeight: '600', letterSpacing: '1px', marginBottom: '3px', color: "#8b8b8b" }}>{job.companyName}</p>
                    <p style={{ fontSize: '16px' }}>{job.jobRole.charAt(0).toUpperCase() + job.jobRole.slice(1)}</p>
                    <p style={{ fontSize: '11px', fontWeight: "500", marginTop: '5px' }}>{job.location.charAt(0).toUpperCase() + job.location.slice(1)}</p>
                </div>
            </div>
            <p style={{ fontSize: '14px', color: '#4D596A' }}>Estimated Salary: {currencySymbol}{job.minJdSalary !== null ? job.minJdSalary : 0} - {job.maxJdSalary} LPA</p>
            <h3 style={{ fontWeight: '600' }}>About Company:</h3>
            <h4>About us</h4>
  
            <p>{job.jobDetailsFromCompany.slice(0, 400)}{job.jobDetailsFromCompany.length > 400 && '...'} <span style={{ color: "blue" }} onClick={togglePopup}>View Job</span></p>

            <h3 style={{ color: "#8b8b8b", fontWeight: "600", fontSize: '14px', letterSpacing: '1px', marginBottom: '0px' }}>Minimum Experience </h3>
            <p style={{ marginTop: '3px' }}>{job.minExp !== null ? job.minExp : 0} years</p>
            <button onClick={() => jobLink(job.jdLink)}>&#9889; Easy Apply</button>
            <button id="referral" >Unlock referral asks</button>
        </div>
    );
};

export default JobCard;
