import React from 'react';
import styles from './button.module.scss';

interface ButtonProps {

  label: string;
  variant: 'outline' | 'filled';

}

const Button: React.FC<ButtonProps> = ({ label, variant }) => {

  return (

    <button className = { `${styles.button} ${styles[variant]}` }>

      { label }

    </button>

  );

};

export default Button;