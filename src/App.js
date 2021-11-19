import React from 'react'

import Reviews from './components/Review.js'

const App = () => {
  return (
    <main>
      <div className='container'>
        <div className='title'>
          <h2>Reviews</h2>
          <div className='underline'></div>
        </div>
        <Reviews/>
      </div>
    </main>
  );
}

export default App

