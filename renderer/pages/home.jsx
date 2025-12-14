import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Hello World</h1>
      <p>Welcome to my Nextron desktop app</p>
      <Link href="/sample">Go to sample page</Link>
    </>
  );
};

export default Home;
