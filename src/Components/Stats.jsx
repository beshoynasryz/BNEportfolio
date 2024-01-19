import React from 'react';
import {stats} from '../data'
const Stats = () => {
  return (
    <>
   {stats.map(({no,title},index)=>{
    return(
        <div className="stats__box" key={index}>
            <h3 className="stats__no">{no}</h3>
            
            <h3 className="stats__title" dangerouslySetInnerHTML={{ __html: title }} />
        </div>
    )
   })}
    </>
  );
};

export default Stats;