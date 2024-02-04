'use server';

import React from "react";
import styles from "./page.module.css";
import { getData } from "./utils/getData";
import Form from "./ui/form";

const HomePage = async () => {
  const data = await getData();

  return (
    <main>
      <h1>Home</h1>
      <Form />
    </main>
  )
}

export default HomePage;