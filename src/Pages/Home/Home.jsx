import React from 'react';
import './Home.css'
import profile from "../../assets/BNE.jpeg"
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from "react-icons/fa";

const Home = () => {
  return (
   <section className="home section grid">
    <img src={profile} alt="" className="home_img" />
    <div className="home__content">
     <div className="home__data">
      <h1 className="home__title">
        <span>I am Beshoy Nasry </span> Full stack developer   <span>  MERN </span>
      </h1>
      <p className="home__description">
      MERN stack developer specializes in full-stack web development, leveraging MongoDB for data storage, Express.js for server-side application building, React for dynamic front-end interfaces, and Node.js for server-side JavaScript execution. Proficient in end-to-end development, they create robust, scalable web applications by seamlessly integrating these technologies throughout the development lifecycle.
      </p>
     
     </div>
     <Link to ='/About' className="button">
          More About Me <span className="button__icon">
            <FaArrowCircleRight/>
          </span>
      </Link>

    </div>
    <div className="color__block">

    </div>
   </section>
  );
};

export default Home;