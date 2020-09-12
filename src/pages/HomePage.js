import React from 'react';

import list from '../img/list.jpg';

import '../styles/HomePage.scss';

const HomePage = () => {
  return (
    <div className="row home">
      <div className="col-xl-6 col-lg-7 col-md-8 home-lead">
        <h1 className='home-title'>To-Do-App, zorganizuj swój czas.</h1>
        <p className="home-text"><span className="circle"></span>Cześć, dzięki że jesteś.</p>
        <p className="home-text"><span className='circle'></span>Chciałem Ci powiedzieć po krótce co tutaj robię. Mianowicie ta aplikacja współpracuje z REST API, dzięki któremu zapisywanie Twoich zadań na dłużej to nie problem. Jest to swojego rodzaju test moich umiejętności jako Fullstack Developera.</p>
        <p className="home-text">Zapraszam do testowania. Po swojej przygodzie chciałbym, abyś podzielił się ze mną tym, co myślisz o całej aplikacji. Każda uwaga jest mile widziana.<span className='circle'></span></p>
        <p className="home-text"><span className='circle'></span>Narzędzia, które zostały użyte: <strong>React.js</strong>, <strong>PHP</strong>, <strong>SCSS</strong>, <strong>Bootstrap</strong>.</p>
        <p className="home-text">Miłego używania!</p>
      </div>
      <div className="col-xl-6 col-lg-5 col-md-4 home-image">
        <figure className='home-image__container'>
          <img className='home-image__picture' src={list} alt="lista"/>
        </figure>
      </div>
      <div className="col-md-12 home-technologies">
        <div className="col-md-2 home-technology">
          <i className="fab fa-react"></i>
        </div>
        <div className="col-md-2 home-technology">
          <i className="fab fa-php"></i>
        </div>
        <div className="col-md-2 home-technology">
          <i className="fab fa-sass"></i>
        </div>
        <div className="col-md-2 home-technology">
          <i className="fab fa-bootstrap"></i>
        </div>
      </div>
    </div>
  );
}

export default HomePage;