import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
        Hi there, I'm currently a student at University of Central Florida studying the wonderful world of coding. I am learning a range of skills and technologies for both the front and back-end and I will graduate in June 2021 as a full-stack developer. 
        I grew up in New Zealand, but have been calling the US home since I moved here in 2001.  I have a professional background in education, investing, managment and customer service. I am thrilled to be breaking into the field of coding and find myself excited and challenged every day! Check out my projects to see some examples of my work.
        If you are looking for a passionate person with drive, curiosity, and a diligent work ethic, then I may be a good fit for your organization and I would love to hear from you.
        </p>
      </div>
    </section>
  );
}

export default About;
