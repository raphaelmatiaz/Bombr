"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import styles from './home-feed.module.css';
import MainSection from '@/components/Main/main.tsx';
import ScrollRegion from '@/components/scrollRegion/scrollRegion.tsx';
import Post from '@/components/Post/Post.tsx';

function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      console.log("User is Unauthenticated")
      console.log("Status is:", status);
    }
    if (status === "authenticated") {
      console.log("User is Authenticated")
      console.log("Session data:", session);
      // router.push('/login');
    }
  }, [status, router]);

  useEffect(() => {
    // update(); // Force session refresh
  }, []);

  if (status === "loading") {
    return <p>Loading...</p>; // Show loading state while session is being checked
  }

  return (
    <div className={styles.homeview}>
      <MainSection>
        <ScrollRegion>
          <div className={styles.scrollRegionStyleWrapper}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </ScrollRegion>
      </MainSection>
    </div>
  );
}

export default Home;
