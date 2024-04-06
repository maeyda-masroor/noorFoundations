import React, { useState } from 'react';
import people from './TestinomialData';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';
const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
        <div>
        <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" propsstyle="max-width: 600px;">
                <h1 style={{fontSize:'45px'}}><FormattedMessage id = "clientsays" defaultMessage="what our client says!"/></h1>
            </div>
                <div class="testimonial-item text-center">
                    <img class="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src={image} width={100} height={100}/>
                    <div class="testimonial-text rounded text-center p-4">
                        <p>{text}</p>
                        <h5 class="mb-1">{name}</h5>
                        <span class="fst-italic">{job}</span>
                    </div>
                </div>
                </div>
                </div>
                <center><div className='button-container' style={{Color:'#986931'}}>
                <button className='prev-btn' onClick={prevPerson}style={{color:'#986931'}} >
                  <FaChevronLeft />
                </button>
                <button className='next-btn' onClick={nextPerson}style={{color:'#986931'}}>
                  <FaChevronRight />
                </button>
              </div>
              </center>
              </div>
     );

};

export default Testimonial;