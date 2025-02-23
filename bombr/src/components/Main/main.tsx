import styles from './main.module.css'
import { ReactNode } from 'react';

interface MainSectionProps {
  children: ReactNode;
}

const MainSection = ({ children }: MainSectionProps) => {
    return(
        <main className={styles.main}>
          <div className={styles.navBarPlaceholder}></div>
            {children}
      </main>
    )
}

export default MainSection