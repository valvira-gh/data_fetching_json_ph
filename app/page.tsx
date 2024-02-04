import React from "react";
import styles from "./page.module.css";

export const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the cöpsest error boundary
    throw new Error("Failed to fetch");
  }

  return res.json();
}

const HomePage = () => {
  const data = await getData();

  return (
    <main>
      <h1>Home</h1>
    </main>
  )
}

export default HomePage;