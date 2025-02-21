import styles from './main.module.css'
import { ReactNode } from 'react';

interface MainSectionProps {
  children: ReactNode;
}

const MainSection = ({ children }: MainSectionProps) => {
    return(
        <main className={styles.main}>
            {children}
      </main>
    )
}

export default MainSection