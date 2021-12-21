import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="foot">
                <address>
                    <h2>My Location</h2>
                    <div className='text-white'>
                        <li>AIRPORT ROAD 14 NUMBER, Chattogram.</li>
                        <li>E-mail: <small>alsabbir1066@gmail.com</small></li>
                        <li>Phone: <span>01619912166</span></li>
                    </div>
                </address>
            </div>
            <div className="foot">
                <h2>My Projects</h2>
                <a className='text-decoration-none text-white' href="https://tecno-mobile-skytech.web.app/"><i class="fas fa-link fs-4" data-bs-toggle="tooltip" data-bs-placement="top" title="Live Site"></i> Tecno Mobile Skytech</a><br />
                <a className='text-decoration-none text-white' href="https://unitravel-torism-agency.web.app/"><i class="fas fa-link fs-4" data-bs-toggle="tooltip" data-bs-placement="top" title="Live Site"></i> Unitravel & Torism Agency</a><br />
                <a className='text-decoration-none text-white' href="https://millenium-dental-care.web.app/"><i class="fas fa-link fs-4" data-bs-toggle="tooltip" data-bs-placement="top" title="Live Site"></i>Millenium Dental Care</a><br />
                <a className='text-decoration-none text-white' href="https://wild-world-developing-master.netlify.app/"><i class="fas fa-link fs-4" data-bs-toggle="tooltip" data-bs-placement="top" title="Live Site"></i> Wild World Developing Master</a>
            </div>
            <div className="foot">
                <h2>Social Link</h2>
                <a className="social-icon" href="https://github.com/MDALSABBIR"><i class="fab fa-github"></i></a>
                <a className="social-icon" href="https://www.linkedin.com/in/md-alsabbir-1066/"><i class="fab fa-linkedin-in"></i></a>
                <a className="social-icon" href="https://twitter.com/?lang=en"><i className="fab fa-twitter-square"></i></a>
            </div>
        </div >
    );
};

export default Footer;