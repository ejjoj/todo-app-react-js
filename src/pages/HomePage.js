import React from 'react';

import list from '../img/list.jpg';

import '../styles/HomePage.scss';

const HomePage = () => {
  return (
    <div className="row home">
      <div className="col-md-9 home-lead">
        <h1 className='home-title'>Twoja aplikacja do organizacji <em className='home-title__small'>swojego</em> świata!</h1>
        <p className="home-text">
          Cześć, dzięki że jesteś. Chciałem Ci powiedzieć po krótce co tutaj robię. Mianowicie ta aplikacja współpracuje z REST API, dzięki któremu zapisywanie swoich zadań na dłużej to nie problem. Jest to swojego rodzaju test moich umiejętności jako Fullstack Developera. Narzędzia, które zostały użyte: <strong>React.js</strong>, <strong>PHP</strong>, <strong>SCSS</strong>, <strong>Bootstrap</strong>.
          Zapraszam do testowania. Po swojej przygodzie chciałbym, abyś podzielił się ze mną tym, co myślisz o całej aplikacji. Każda uwaga jest milewidziana. Miłego dnia =)
        </p>
      </div>
      <div className="col-md-3 home-image">
        <figure className='home-image__container'>
          <img className='home-image__picture' src={list} alt="lista"/>
        </figure>
      </div>
    </div>
  );
}

export default HomePage;