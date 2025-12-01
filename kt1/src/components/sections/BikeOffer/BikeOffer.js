import React from 'react';
import styles from './BikeOffer.module.css';

const BikeOffer = () => (
  <section id="offer" className={styles.offer}>
    <div className="container">
      <div className={styles.grid}>
        <div className={styles.card}>
          <h2 className={styles.title}>Что мы предлагаем</h2>
          <p className={styles.text}>
            В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта. Все работы выполняем качественно и с душой.
          </p>
        </div>
        <div className={styles.photo} aria-label="bike shop photo" />
      </div>
    </div>
  </section>
);

export default BikeOffer;


