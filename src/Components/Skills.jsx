import React from 'react';
import { skills } from '../data';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
  return (
    <>
   {skills.map(({title,percentage},index)=>{
    return(
       <div className="prograss__box" key={index}>
         <div className="prograss__circle">
            <CircularProgressbar strokeWidth={7.5} text ={`${percentage}`} value ={percentage} styles={{
    path: {
      stroke: `var(--first-color)`, // Set your desired color
    },
    text: {
      fill: `var(--text-color)`, // Set your desired color
    },
  }}/>
         </div>
         <h3 className="skills__title">{title}</h3>
       </div>
    )
   })}
    </>
  );
};

export default Skills;