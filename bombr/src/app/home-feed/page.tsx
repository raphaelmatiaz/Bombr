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
          <ScrollRegion>
            <div className={styles.scrollRegionStyleWrapper}>
              <Post></Post>
              <Post></Post>
              <Post></Post>
              <Post></Post>
              <Post></Post>
              <Post></Post>
            </div>
          </ScrollRegion>
        </MainSection>

    </div>
  );
}

export default Home

    /* border-left: 1px solid var(--color-greyA);
    border-right: 1px solid var(--color-greyA); */