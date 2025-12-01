import React from 'react';
import styles from './BikeHeader.module.css';

const BikeHeader = () => (
  <header className={styles.header}>
    <div className="container">
      <div className={styles.row}>
        <div className={styles.logo}>
          <img src="/logo.svg" alt="Велозар" className={styles.logoImg} />
        </div>
        <nav className={styles.nav}>
          <a href="#offer">О нас</a>
          <a href="#services">Услуги</a>
          <a href="#rental">Аренда</a>
        </nav>
        <a href="#contact" className={styles.cta}>Связаться</a>
      </div>
    </div>
  </header>
);

export default BikeHeader;


