"use client";
import Banner from "@/Components/Banner";
import styles from "./page.module.scss";
import Plans from "@/Components/Plans";
import Warning from "@/Components/Warning";
import LoadingImage from "@/Assets/loading.svg";
import { useState } from "react";
import Image from "next/image";
export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return (
    <div className={styles.Home}>
      <Image
        src={LoadingImage}
        className={loading ? styles.loading : styles.notLoading}
        alt="loading icon"
        height={20}
        width={20}
      />
      <div className={loading ? styles.homeLoading : styles.home}>
        <Banner />
        <Plans />
        <Warning />
      </div>
    </div>
  );
}
