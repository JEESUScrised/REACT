import React from 'react';
import styles from './BikeHero.module.css';

const BikeHero = () => (
  <section className={styles.hero}>
    <div className="container">
      <div className={styles.grid}>
        <div className={styles.text}>
          <h1 className={styles.title}>Веломастерская “Велозар”</h1>
          <p className={styles.desc}>
            Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.
          </p>
        </div>
        <div className={styles.illustration}>
          <img src="/dino.png" alt="Динозавр на велосипеде" className={styles.dinoImg} />
        </div>
      </div>
    </div>
  </section>
);

export default BikeHero;


