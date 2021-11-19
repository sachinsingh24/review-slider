import React, { useState, useEffect } from 'react';
import Data from '../Data.js';
import { FaQuoteRight, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = Data[index];
  const randomUser = () => {
    const randomIndex = Math.floor(Math.random() * Data.length);
    setIndex(randomIndex);
  };
  useEffect(() => {
    let slide = setInterval(() => {
      setIndex(index === Data.length - 1 ? 0 : index + 1);
    }, 1000);
    return () => clearInterval(slide);
  }, [index]);

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='student' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <div className='btn-container'>
        <button
          className='prev-btn'
          onClick={() => setIndex(index === 0 ? Data.length - 1 : index - 1)}
        >
          <FaChevronLeft />
        </button>
        <button
          className='next-btn'
          onClick={() => setIndex(index === Data.length - 1 ? 0 : index + 1)}
        >
          <FaChevronRight />
        </button>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <button className='random-btn' onClick={randomUser}>
        Random User
      </button>
    </article>
  );
};

export default Review;
