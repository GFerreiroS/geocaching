import React from "react";
import "../../styles/home.css";
import homeBackground from "../../img/background/home.png";
import { Link } from "react-router-dom";

export const Home = () => {
  const styles = {
    backgroundImage: `url(${homeBackground})`,
  };

  const elements = document.querySelectorAll('.scroll-animation');

  function checkScroll() {
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const position = element.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
      if (position < screenHeight * 0.8) {
        element.classList.add('scroll-triggered');
        if (i % 2 === 0) {
          element.classList.add('left');
        } else {
          element.classList.add('right');
        }
      }
    }
  }

  window.addEventListener('scroll', checkScroll);

  return (
    <div className="bg">
      <section class="banner" style={styles}>
        <div className="slogan text-light">
          <h1>XPLORA</h1>
          <p className="fs-4">Comunidad de Aventureros y Buscadores de Tesoros.</p>
          <Link to="/login" onClick={() => window(0, 0)}>
            <button type="button" className="btn btn-success btn-lg">Accede!</button>
          </Link>
        </div>
      </section>
    </div>
  );
};
