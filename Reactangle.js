import React from 'react';
import './Reactangle.css'; // Make sure your CSS file path is correct
import logo from './assets/Layer 156.png';
import Vector from './assets/Vector.png';
import Vector_1 from './assets/Vector_1.png';
import Vector_2 from './assets/Vector_2.png';
import Group_6 from './assets/Group_6.png';

const Reactangle = () => {
  return (
    <div className="dashboard">
      <div className="header">
      <div className='right-elements'>
          <div className='img'> 
            <img src={logo} alt='Logo' />
          </div>  
          <div className='text'>
            Free Delivery
          </div>
          <div className='line'></div>
          <div className='return'>
            Return Policy
          </div>
        </div>
        <div className='left-elements'>
          <div className='login'>
            Login
          </div>
          <div className='follow'>
            Follow US
          </div>
          <div className='Vector'>
            <img src={Vector} alt='Vector'/>
          </div>
          <div className='Vector_2'>
            <img src={Vector_2} alt='Vector_2' />
          </div>
          <div className='Vector_1'>
            <img src={Vector_1} alt='Vector_1' />
          </div>
          <div className='Group_6'>
            <img src={Group_6} alt='Group_6' />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Reactangle;
