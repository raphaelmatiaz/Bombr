import styles from './home-feed.module.css'
import Navbar from '../../components/Navbar/navbar.tsx'
import MainSection from '@/components/Main/main.tsx';
import ScrollRegion from '../../components/scrollRegion/scrollRegion.tsx'

function Home() {
  return (
    <div className={styles.homeview}>
      <Navbar></Navbar>
      <MainSection>
        <ScrollRegion>
          <>
          </>
        </ScrollRegion>
      </MainSection>
    </div>
  );
}

export default Home