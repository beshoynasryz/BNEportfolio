import React from 'react';
import "./About.css"
import Stats from '../../Components/Stats';
import Info from '../../Components/Info';
import { FaDownload } from 'react-icons/fa';
import CV from '../../assets/BNE.CV.pdf'
import Skills from '../../Components/Skills';
import { resume } from '../../data';
import ResumeItem from '../../Components/ResumeItem';


const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>

        </h2>
        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle">
              Personal Info
            </h3>
            <ul className="info__list grid">
                <Info/>
            </ul>
            <a href={CV} download ='' className="button">
              Download CV 
              <span><FaDownload/></span>
            </a>

          </div>
          <div className="stats grid">
            <Stats />
          </div>
        </div>

      </section>

      <div className="seproter"></div>
      
      <section className="skills">
        <h3 className="skills__subtitle section__title">
          My  <span>Skills</span>
          </h3>
          <div className="skills__container grid">
            <Skills/>
          </div>
      </section>
      <div className="seproter"></div>
      <section className="resume">
      <h3 className="skills__subtitle section__title">Experience <span>&</span> Education </h3>
      <div className="resume__container grid">

        <div className="resume__data">
          {resume.map((val)=>{
          if (val.category === 'experience'){
            return <ResumeItem key={val.id} {...val} /> ;
          }
          })}
        </div>
        <div className="resume__data">
          {resume.map((val)=>{
          if (val.category === 'education'){
            return <ResumeItem key={val.id} {...val} />;
          }
          })}
        </div>
      </div>
      </section>
    </main>
  );
};

export default About;