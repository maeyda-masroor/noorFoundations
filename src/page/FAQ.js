import React, { useState } from 'react';
import data from './QuestionData';
import SingleQuestion from '../component/Question';
function FAQ() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className='container'>
        <h1>questions and answers about login</h1>
        <section className='info'>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default FAQ;