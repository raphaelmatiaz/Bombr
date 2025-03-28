"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import styles from './home-feed.module.css';
import MainSection from '@/components/Main/main.tsx';
import ScrollRegion from '@/components/scrollRegion/scrollRegion.tsx';
import NewPost from '@/components/Post/Post.tsx';
import Post from '@/types/post.ts';

function Home() {

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
  }, [status, router, session]);

  useEffect(() => {
    // update(); // Force session refresh
  }, []);


    
  
    useEffect(() => {
      async function fetchPosts() {
        try {
          const res = await fetch("/api/posts");
          if (!res.ok) throw new Error("Failed to fetch posts");
          const data: Post[] = await res.json();
          setPosts(data);
        } catch (err) {
          console.log(err)
          setError((err as Error).message);
        } finally {
          setLoading(false);
          console.log(posts)
        }
      }
  
      fetchPosts();
    }, []);

  if (status === "loading") {
    return <p>Loading...</p>; // Show loading state while session is being checked
  }

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.homeview}>
      <MainSection>
        <ScrollRegion>
          <div className={styles.scrollRegionStyleWrapper}>
            
          {posts.slice().reverse().map((post) => (
            <span key={post.id}>
              <NewPost id={post.id} message={post.message} senderId={post.senderId} receiverId={post.receiverId} post={post} />
            </span>
          ))}
              
          </div>
        </ScrollRegion>
      </MainSection>
    </div>
  );
}

export default Home;
