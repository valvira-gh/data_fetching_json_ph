import React from "react";
import styles from "./page.module.css";
import axios from "axios";

async function getData() {
  const res = await axios.get("/api/posts.ts")
  const data = await res.data;

  if (!res) {
    throw new Error(data.message || "Failed to fetch data");
  }

  return { props: { data } };
}


const Home = () => {

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <p className={styles.description}>
        Get started by editing <code className={styles.code}>pages/index.tsx</code>
      </p>
    </main>
  )
}



export default Home;

