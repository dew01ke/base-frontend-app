import React from 'react';
import styles from './Layout.module.scss';

export interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className={styles.Layout}>{children}</div>;
};
