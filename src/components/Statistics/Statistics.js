import React from "react";
import T from "prop-types";


const Statistics = ({ title, stats }) => {

  return (
    <section className="statistics">
   { title !== undefined && (
    <h2 className="title">{title}</h2>
    )}
    <ul className="stat-list">
        {stats.map(stat => (  
          <li className="item" key={stat.id} style={{backgroundColor: '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()}}>
          <span className="label">{stat.label}</span>
          <span className="percentage">{stat.percentage} %</span>
          </li>
        ))}
    </ul>
  </section>
  );
};


Statistics.propTypes = {
  title: T.string.isRequired,
  stats: T.array.isRequired
};

export default Statistics;