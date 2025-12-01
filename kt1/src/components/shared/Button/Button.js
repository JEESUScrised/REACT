import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, variant = 'primary', size = 'md', href, onClick, className = '', ...props }) => {
  const classes = [
    styles.btn,
    variant === 'outline' ? styles.outline : styles.primary,
    size === 'lg' ? styles.lg : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;


