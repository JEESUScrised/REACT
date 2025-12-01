import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className="container">© ThriveTalk {new Date().getFullYear()}</div>
  </footer>
);

export default Footer;


