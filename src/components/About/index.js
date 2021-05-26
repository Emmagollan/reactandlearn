import React from 'react';
import mainPhoto from '../../assets/images/profile-photo.jpg';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { HashLink as Anchor } from 'react-router-hash-link';

function About() {
    //custom greeting based on time of day
    const myDate = new Date();
    const hours = myDate.getHours();
    let greeting;

        if (hours < 12) {
            greeting =  'Good morning,';
        }
        else if( hours >= 12 && hours <= 17) {
            greeting =  'Good afternoon,';
        }
         else {
             greeting = 'Good evening,'
         }
    

    return (
        <Router>
        <main>
    <section>
        <div className="hero">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-12">
                        <div className="hero-content">
                        <div className="row">
                                <div className="col-xxl-3 col-xl-4">
                                <img src={mainPhoto} alt="Emma Gollan" className="img-circle img-fluid" />
                                </div>
                                <div className="col-xxl-9 col-xl-8">
                                <h1>{greeting} My name is Emma, I'm a Fullstack Developer living in Orlando, FL.</h1>
                                <h2>Learn more <Anchor to="/#about">about me</Anchor> below or please, take a look at my <Link
                                    to="/portfolio">portfolio</Link> &amp; <Link to="/resume">resume</Link>. <Link to="/contact">Contact me</Link> with any questions.</h2>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container mt-5 mb-5" id="about">
            <div className="row justify-content-center">
                <div className="col-xxl-10 col-xl-12">
                    <div className="section mt-5 mb-5">
                        <p>I grew up in New Zealand, but have been calling the United States home since 2001.  I offically became an American citizen in 2019, it was a very proud day for me.  I still have the heart of a kiwi though, with the love of travel in my blood!  I love to explore new places because I enjoy the diversity of new communities and cultures.  Exploring and curiosity for the unknown leads to learning and growing, which I believe is the spice of life.  I love all things creative and enjoy several artist hobbies including watercolor and resin art.  Add more content later.  marry your values with why you'll be an awesome dev. </p>
                        
                    </div>

                </div>
            </div>
        </div>
    </section>
</main>
</Router>
    )

}
export default About;