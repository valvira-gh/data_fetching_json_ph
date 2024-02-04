import React from "react";
import styles from "./page.module.css";
import { getData } from "./utils/getData";

const HomePage = async () => {
  const data = await getData();

  return (
    <main>
      <h1>Home</h1>
     
    </main>
  )
}

export default HomePage;