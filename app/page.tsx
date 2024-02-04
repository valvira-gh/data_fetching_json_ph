import React from "react";
import styles from "./page.module.css";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", { next: { revalidate: 3600 } });
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch data");
  }

  return data;
}

const Home = async () => {
  const data = await getData();
  console.log(data);

  return (
    <main className={styles.container}>
      <h1>Home</h1>
      {data.map((post) => (
        post.id > 10 ? null :
          <div key={post.id} className={styles.post}>
            <h2 className={styles.title}>{post.title}</h2>
            <p className={styles.body}>{post.body}</p>
          </div>
      ))}
    </main>
  )
}

export default Home;

