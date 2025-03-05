import styles from './scrollRegion.module.css';
import { ReactNode } from 'react';

interface ScrollRegionProps {
  children: ReactNode;
}

const ScrollRegion = ({ children }: ScrollRegionProps) => {
  return (
    <div className={styles.scrollRegion}>
      {/* <p>scrollRegion</p> */}
      {children}
    </div>
  );
};

export default ScrollRegion;
