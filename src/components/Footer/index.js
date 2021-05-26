import React from 'react';



function Footer() {

    return (
        
        <div className="container">
            <div className="footer d-flex justify-content-center">
                <ul className="unstyled-list list-inline">
                    <li className="list-inline-item">
                        <a href="https://github.com/Emmagollan" target="_blank" rel="noreferrer"><i
                                        className="fab fa-github-alt"></i> Github</a>
                    </li>
                    <li className="list-inline-item"><a href="https://www.linkedin.com/in/emma-gollan-012043203/" target="_blank" rel="noreferrer"><i
                                        className="fab fa-linkedin-in"></i> LinkedIn</a>
                    </li>
                    <li className="list-inline-item"><a href="mailto:emmagollan33@gmail.com"><i className="fas fa-envelope-open-text"></i> email</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;