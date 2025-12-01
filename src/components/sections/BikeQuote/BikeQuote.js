import React from 'react';
import styles from './BikeQuote.module.css';

const BikeQuote = () => (
  <section className={styles.quote}>
    <div className="container">
      <p className={styles.text}>
        Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть из них даже друзьями. А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед.
      </p>
    </div>
  </section>
);

export default BikeQuote;


