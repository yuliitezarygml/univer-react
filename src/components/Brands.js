import React from 'react';
import './Brands.css'; 
import logo1 from '../img/brands/Rectangle36.png';
import logo2 from '../img/brands/Rectangle38.png';
import logo3 from '../img/brands/Rectangle41.png';
import logo4 from '../img/brands/Rectangle43.png';
import logo5 from '../img/brands/Rectangle44.png';
import logo6 from '../img/brands/Rectangle45.png';


function Brands() {
  return (
    <section className="logos-container">
      <img src={logo1} alt="logo1" />
      <img src={logo2} alt="logo2" />
      <img src={logo3} alt="logo3" />
      <img src={logo4} alt="logo4" />
      <img src={logo5} alt="logo5" />
      <img src={logo6} alt="logo6" />
    </section>
  );
}

export default Brands;
