import React, { useState } from 'react';

const Question = ({ title, info }) => {
  const [show, setshov] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button onClick={() => setshov(!show)} className="btn">
          {show ? '-' : '+'}
        </button>
      </header>

      {show && <p>{info}</p>}
    </article>
  );
};

export default Question;
