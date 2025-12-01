import React from 'react';
import styles from './BikeRental.module.css';

const BikeRental = () => (
  <section id="rental" className={styles.rental}>
    <div className="container">
      <div className={styles.grid}>
        <div className={styles.photo} aria-label="bikes photo" />
        <div className={styles.text}>
          <h2 className={styles.title}>Прокат велосипедов</h2>
          <p className={styles.desc}>
            У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default BikeRental;


