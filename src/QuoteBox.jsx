import React, { useState } from 'react';
import paragraphs from '../paragraphs.json'


const QuoteBox = () => {
  const colors = ['#a788ab' , '#e3b1c8', '#bf9780', '#aedddd','#5dc460','#ff6961']
  const [colorPosition, setColorPosition] = useState(Math.floor(Math.random() * 5))
  const [position, setPosition] = useState(Math.floor(Math.random() * 101))
// cambio de color
  const changePosition = () => {
    setColorPosition(Math.floor(Math.random() * 5))
    setPosition(Math.floor(Math.random() * 101))
  };
  return (
    <>
    <div className='app' style={{backgroundColor: colors[colorPosition]}}>
      <div className='card-container' style={{ background: '' }}>
        <div className='cart-descip'>
          <h2 style={{color: colors[colorPosition]}}>{paragraphs[position].quote}</h2>
          <div className='card-autor'>
            <h3 style={{color: colors[colorPosition]}}>{paragraphs[position].author}</h3>
          </div>
        </div>
        <div className="card-button">
          <a href="#" onClick={changePosition} style={{backgroundColor: colors[colorPosition]}}><i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
    </>
  );
};

export default QuoteBox;