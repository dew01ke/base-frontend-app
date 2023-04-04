import React, { MouseEventHandler } from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

export interface ButtonProps {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button className={cn(styles.Button, className)} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};
