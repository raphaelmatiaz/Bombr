import Post  from '@/types/post.ts';

export default interface User {
  id: string;
  name: string | null;
  image: string | null;
  email: string | null;
  password: string | null;
  fullName: string | null;
  username: string | null;
  emailVerified: Date | null;
  profileId: number | null;
  sentPosts: Post[];
  receivedPosts: Post[];
}