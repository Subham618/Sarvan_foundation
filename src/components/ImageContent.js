// src/components/ImageContent.js
import React from 'react';
import '../styles/ImageContent.css';
import monkeyImage from '../images/nature.jpg'; 


const ImageContent = () => {
  return (
    <div className="mainpart">
      <div className="container_val">
        <div className="image">
          {/* Sample source - https://i.pinimg.com/564x/59/32/29/593229739184504afd9507cc42a9cb86.jpg */}
          <img src={monkeyImage} alt="Sarvan Foundation" />
        </div>
        <div className="text">
          <p className="part1">We’re Sarvam Foundation</p>
          <p className="part2">Speaking Out for Animal Rights</p>
          <p className="part3">
            Since 2000, our Animal Welfare Organization has been dedicated to caring for and promoting the rights of animals through numerous initiatives. Our main goal is to educate and improve the treatment of animals around the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageContent;

