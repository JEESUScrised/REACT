import React from 'react';
import Button from '../../shared/Button/Button';
import styles from './Hero.module.css';

const Hero = () => (
  <section className={`section ${styles.hero}`} id="hero">
    <div className="container">
      <div className={styles.grid}>
        <div>
          <h1 className="hero-title">Help when you need it</h1>
          <p className="hero-sub">Professional therapy to support your mental wellbeing. Confidential, evidence‑based and human.</p>
          <div className="hero-cta flex">
            <Button href="#services">Get started</Button>
            <Button href="#contact" variant="outline">Contact us</Button>
          </div>
        </div>
        <div>
          <div className={styles.card} />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;


