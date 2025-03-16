import { redirect } from "next/navigation";

export default function Home() {

  redirect("/home-feed")

  return (
    <>
      <h1>Home</h1>
      <h2>this is main page of next app</h2>
    </>
  );
}
