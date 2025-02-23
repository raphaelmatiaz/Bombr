import styles from './scrollRegion.module.css';
import { ReactNode } from 'react';

interface ScrollRegionProps {
  children: ReactNode;
}

const ScrollRegion = ({ children }: ScrollRegionProps) => {
  return (
    <div className={styles.scrollRegion}>
      <h1>scrollRegion</h1>
      {children}
    </div>
  );
};

export default ScrollRegion;
