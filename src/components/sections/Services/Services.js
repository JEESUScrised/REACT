import React from 'react';
import styles from './Services.module.css';

const Services = () => {
  const items = [
    { title: 'Anxiety', text: 'Tools and strategies to manage anxiety and regain control.' },
    { title: 'Depression', text: 'Compassionate care to help you move forward.' },
    { title: 'Relationships', text: 'Improve communication and build healthy boundaries.' },
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title h2">Our Services</h2>
        <div className={styles.grid}>
          {items.map((s) => (
            <div key={s.title} className={styles.card}>
              <h3 className={styles.title}>{s.title}</h3>
              <p className="p-lg">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


