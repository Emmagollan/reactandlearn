import React from 'react';
import JobList from '../JobList'

function Resume() {
  return (
    <section>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xxl-10 col-xl-12">
                    <div className="intro">
                        <div className="hero-content">
                            <h1>Resume</h1>
                            <h2>Please view my resume to learn more about my professional background   <a href="" target="_blank" rel="noreferrer">Click here to download</a></h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-xxl-10 col-xl-12">
                    <div className="section">
                        <h2 className="title">Education</h2>
                        <div className="event-item">
                            <h3>Western Governors University</h3>
                            <h4>2008-2012</h4>
                            <ul className="event-details  list-unstyled">
                                <li>BS, Special Education - 120 credits</li>
                                
                            </ul>
                        </div>

                        <div className="event-item">
                            <h3>Coding Bootcamp</h3>
                            <h4>2021</h4>
                            <ul className="event-details list-unstyled">
                                <li>Fullstack Web Development</li>
                            </ul>
                        </div>
                        <h2 className="title">Skills</h2>
                        <div className="row">
                            <div className="col-md-3 col-sm-12">
                                <ul className="list-unstyled skill-list">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                    <li>Jquery</li>
                                    <li>Node.js</li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-12">
                                <ul className="list-unstyled skill-list">
                                    <li>Express.js</li>
                                    <li>SQL</li>
                                    <li>MongoDB</li>
                                    <li>React</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <h2 className="title">Employment History</h2>
                    </div>
                        <div className="row">
                            <div className="col-12">
                            <JobList />
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </section>
  );
}
export default Resume;