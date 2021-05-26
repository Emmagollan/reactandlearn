import React, { useState } from 'react'

function JobList() {

    const [jobs] = useState([
        {
            company: 'Frontier Airlines',
            dates: 'July 2018 - current',
            role: 'Flight Attendant',
            description: 'Ensure a safe and comfortable experience for passengers on board A319, A320, and A321 Airbus aircrafts while adhering to FAA regulations and company policy.'
        },
        {
            company: 'NisaCabana LLC',
            dates: 'Jan 2012 - May 2018',
            role: 'Manager/Owner',
            description: 'Managed day-to-day operations.  This included residential property managment and project managment for renovations and remodels.'
        },
       
    ])
    return (
        <>
            {jobs.map((job, i) => (
                
            <div className="event-item mb-5"  key={job.company} >
                <h3>{job.company}</h3>
                <h4>{job.role} {job.dates}</h4>
                <ul className="event-details list-unstyled">
                    <li><p>{job.description}</p></li>
                </ul>
            </div>
        ))}
        </>
    );

}
export default JobList;
