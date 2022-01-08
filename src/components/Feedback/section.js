import React from "react";
import T from "prop-types";

const Section = ({
  goodFeedBack,
  neutralFeedBack,
  badFeedBack,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  visibility
}) => {
  
  if(visibility){
    return (
      <>
        <h2>Please leave feedback!</h2>
        
        <button onClick={goodFeedBack} type="button">
          Good
        </button>
        <button onClick={neutralFeedBack} type="button">
          Neutral
        </button>
        <button onClick={badFeedBack} type="button">
          Bad
        </button>
        <h3>Statistics</h3> <div>
          <span style={{ padding: 10 }}>Good: {good}</span>
          <span style={{ padding: 10 }}>Neutral: {neutral}</span>
          <span style={{ padding: 10 }}>Bad: {bad}</span>
          <span style={{ padding: 10 }}>Total: {total}</span>
          <span style={{ padding: 10 }}>
            Positive feedback: {positivePercentage}%
          </span>
        </div>
        </>
    )
  } else {
    return (
      <>
        <h2>Please leave feedback!</h2>
        
        <button onClick={goodFeedBack} type="button">
          Good
        </button>
        <button onClick={neutralFeedBack} type="button">
          Neutral
        </button>
        <button onClick={badFeedBack} type="button">
          Bad
        </button>
        <h3>Statistics</h3> 
        <p>There is no feedback</p> 
        
      </>
    );
    }
};

Section.propTypes = {
  goodFeedBack: T.func.isRequired,
  neutralFeedBack: T.func.isRequired,
  badFeedBack: T.func.isRequired,
  openSection: T.func.isRequired,
  good: T.func.isRequired,
  neutral: T.func.isRequired,
  bad: T.func.isRequired,
  total: T.func.isRequired,
  positivePercentage: T.func.isRequired,
};

export default Section;
