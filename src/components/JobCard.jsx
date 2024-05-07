import React, { useState } from 'react';

const JobCard = ({ job }) => {

    const [showPopup, setShowPopup] = useState(false);


    const jobLink = (link) => {
        window.open(link, '_blank');
    };

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const currencySymbols = {
        USD: '$', // US Dollar
        INR: '₹', // Indian Rupee
        EUR: '€', // Euro
        GBP: '£', // British Pound Sterling
        AUD: 'A$', // Australian Dollar
        CAD: 'C$', // Canadian Dollar
        CHF: 'CHF', // Swiss Franc
        JPY: '¥', // Japanese Yen
        CNY: '¥', // Chinese Yuan Renminbi
        HKD: 'HK$', // Hong Kong Dollar
        NZD: 'NZ$', // New Zealand Dollar
        // Add more currency codes and symbols as needed
    };

    const currencySymbol = currencySymbols[job.salaryCurrencyCode] || ''; // Get the currency symbol

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
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={togglePopup}>&times;</span>
                        <h2>About Job:</h2>
                        <p>{job.jobDetailsFromCompany}</p>
                    </div>
                </div>
            )}
  
            <p>{job.jobDetailsFromCompany.slice(0, 400)}{job.jobDetailsFromCompany.length > 400 && '...'} <span style={{ color: "blue" }} onClick={togglePopup}>View Job</span></p>

            <h3 style={{ color: "#8b8b8b", fontWeight: "600", fontSize: '14px', letterSpacing: '1px', marginBottom: '0px' }}>Minimum Experience </h3>
            <p style={{ marginTop: '3px' }}>{job.minExp !== null ? job.minExp : 0} years</p>
            <button onClick={() => jobLink(job.jdLink)}>&#9889; Easy Apply</button>
            <button id="referral" >Unlock referral asks</button>
        </div>
    );
};

export default JobCard;
