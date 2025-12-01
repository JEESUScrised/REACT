import React from 'react';
import styles from './BikeServices.module.css';

const items = [
  { title: 'Годовое ТО', color: 'dark' },
  { title: 'Выравнивание колес', color: 'blue' },
  { title: 'Настройка переключателей', color: 'green' },
];

const BikeServices = () => (
  <section id="services" className={styles.section}>
    <div className="container">
      <div className={styles.grid}>
        {items.map((i) => (
          <div key={i.title} className={`${styles.card} ${styles[i.color]}`}>
            <div className={styles.line}></div>
            <div className={styles.title}>{i.title}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BikeServices;


