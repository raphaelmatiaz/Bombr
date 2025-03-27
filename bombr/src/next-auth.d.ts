
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      image?: string | null;
      fullname?: string | null;
      username?: string | null;
      profileId?: string | null;
    };
  }

  interface User {
    id: string;
    email: string;
    image?: string | null;
    fullname?: string | null;
    username?: string | null;
    profileId?: string | null;
  }

  interface JWT {
    user: User;
  }
}
