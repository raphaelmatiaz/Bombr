import styles from './main.module.css'
import { ReactNode } from 'react';
import Navbar from '../Navbar/navbar';
import Aside from '../Aside/Aside';

interface MainSectionProps {
  children: ReactNode;
}

const MainSection = ({ children }: MainSectionProps) => {
    return(
        <main className={styles.main}>
          <Navbar></Navbar>
          <main className={styles.mainContent}>
            <div className={styles.mainChildren}>
              {children}
            </div>
            <div className={styles.asideWrapper}>
              <Aside></Aside>
            </div>
          </main>
          {/* <div className={styles.navBarPlaceholder}></div> */}
      </main>
    )
}

export default MainSection