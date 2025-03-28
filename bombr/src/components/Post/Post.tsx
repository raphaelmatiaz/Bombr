// import Link from 'next/link'
// import styles from './post.module.css'
// import Post from '@/types/post'
// interface NewPostProps {
//     id: string
//     message: string
//     senderId: string
//     receiverId: string
//     post: Post
// }


// const NewPost = (props: NewPostProps) => {
//     return(
//         <div className={styles.postWrapper}>
//             <header className={styles.postHeader}>
//                 <Link href={`/profile/${props.post.receiverId}`}>
//                     <div className={styles.userProfileWrapper}>
//                         <div className={styles.userProfilePic}></div>
//                         <p className={styles.userProfileUsername}>{props.post.senderId}</p>
//                     </div>
//                 </Link>
//                 <p className={styles.bombedBy}>got bombed by...</p>
//                 <Link href={`/profile/stonker6000K`}>
//                     <div className={styles.userProfileWrapper}>
//                         <div className={styles.userProfilePic}></div>
//                         <p className={styles.userProfileUsername}>{props.post.receiverId}</p>
//                     </div>
//                 </Link>
//             </header>
//             {/* <div className={styles.postContent} style={{backgroundImage: `url(${props.post.content})`}}></div> */}
//             <img className={styles.postContent2} src={props.post.content} alt="" />
//             <footer className={styles.postFooter}>
//                 <div className={styles.postText}>
//                     {props.message}
//                 </div>
//                 <div className={styles.postButtonsWrapper}>
//                     <img className={styles.postButtonIcon} src="/like.svg" alt="Like Icon" />
//                     <img className={styles.postButtonIcon} src="/comment.svg" alt="Comment Icon" />
//                 </div>
//             </footer>
//         </div>
//     )
// }

// export default NewPost

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./post.module.css";
import Post from "@/types/post";

interface User {
  id: string;
  name: string | null;
  username: string | null;
  image: string | null;
}

interface NewPostProps {
  id: string;
  message: string;
  senderId: string;
  receiverId: string;
  post: Post;
}

const NewPost = (props: NewPostProps) => {
  const [senderUser, setSenderUser] = useState<User | null>(null);
  const [receiverUser, setReceiverUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/homeFeedUsers", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            senderId: props.post.senderId,
            receiverId: props.post.receiverId,
          }),
        });

        if (!res.ok) throw new Error("Failed to fetch users");

        const data = await res.json();
        setSenderUser(data.senderUser);
        setReceiverUser(data.receiverUser);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [props.post.senderId, props.post.receiverId]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className={styles.postWrapper}>
      <header className={styles.postHeader}>
        <Link href={`/profile/${props.post.receiverId}`}>
          <div className={styles.userProfileWrapper}>
            <div
              className={styles.userProfilePic}
              style={{ backgroundImage: `url(${receiverUser?.image || "/default-profile.png"})` }}
            ></div>
            <p className={styles.userProfileUsername}>{receiverUser?.username || "Unknown"}</p>
          </div>
        </Link>
        <p className={styles.bombedBy}>got bombed by...</p>
        <Link href={`/profile/${props.post.senderId}`}>
          <div className={styles.userProfileWrapper}>
            <div
              className={styles.userProfilePic}
              style={{ backgroundImage: `url(${senderUser?.image || "/default-profile.png"})` }}
            ></div>
            <p className={styles.userProfileUsername}>{senderUser?.username || "Unknown"}</p>
          </div>
        </Link>
      </header>
      <img className={styles.postContent2} src={props.post.content} alt="" />
      <footer className={styles.postFooter}>
        <div className={styles.postText}>{props.message}</div>
        <div className={styles.postButtonsWrapper}>
          <img className={styles.postButtonIcon} src="/like.svg" alt="Like Icon" />
          <img className={styles.postButtonIcon} src="/comment.svg" alt="Comment Icon" />
        </div>
      </footer>
    </div>
  );
};

export default NewPost;
