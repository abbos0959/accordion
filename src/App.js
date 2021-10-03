import React, { useState } from 'react';
import data from './data';
import Question from './Question';
function App() {
  return (
    <main>
      <div className="container">
        <h3>savol va javoblar </h3>
        <section className="info">
          {data.map((ques) => {
            return <Question key={ques.id} {...ques}></Question>;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
