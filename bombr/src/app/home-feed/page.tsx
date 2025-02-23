import styles from './home-feed.module.css'
import Navbar from '@/components/Navbar/navbar.tsx'
import MainSection from '@/components/Main/main.tsx';
import ScrollRegion from '@/components/scrollRegion/scrollRegion.tsx'
import Post from '@/components/Post/Post.tsx'

function Home() {
  return (
    <div className={styles.homeview}>
      <MainSection>
        <Navbar></Navbar>
        <ScrollRegion>
          <p>addada</p>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </ScrollRegion>
      </MainSection>
    </div>
  );
}

export default Home