
declare module "next-auth" {
  export interface Session {
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

  export interface User {
    id: string;
    email: string;
    image?: string | null;
    fullname?: string | null;
    username?: string | null;
    profileId?: string | null;
  }

  export interface JWT {
    user: User;
  }
}
