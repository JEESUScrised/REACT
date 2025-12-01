import React from 'react';
import styles from './Testimonials.module.css';

const data = [
  { name: 'Sarah', text: 'Therapy at ThriveTalk helped me find balance.' },
  { name: 'Mike', text: 'Compassionate and effective support.' },
];

const Testimonials = () => (
  <section id="testimonials" className="section">
    <div className="container">
      <h2 className="section-title h2">Testimonials</h2>
      <div className={styles.list}>
        {data.map((t) => (
          <div key={t.name} className={styles.item}>
            <p className="p-lg">“{t.text}”</p>
            <div className={styles.author}>— {t.name}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;


