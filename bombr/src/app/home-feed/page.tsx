import styles from './home-feed.module.css'
import Navbar from '@/components/Navbar/navbar.tsx'
import MainSection from '@/components/Main/main.tsx';
import ScrollRegion from '@/components/scrollRegion/scrollRegion.tsx'
import Post from '@/components/Post/Post.tsx'
import FriendSuggestions from '@/components/FriendSuggestions/friendSuggestions';
import SuggestedProfile from '@/components/suggestedProfile/suggestedProfile';
import LinkToProfile from '@/components/LinkToProfile/LinkToProfile';
import Aside from '@/components/Aside/Aside';

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

        <Aside></Aside>

      </MainSection>
    </div>
  );
}

export default Home