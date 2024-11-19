"use client";
import { isLogged } from "@/utils/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { User } from "../../Interface/interfaces";
import styles from "./style.module.scss";
import { getUserData } from "@/services/User";
import TableComponent from "@/Components/TableComponent";
export default function ALun() {
  const router = useRouter();
  const [data, setData] = useState<User>();

  useEffect(() => {
    if (!isLogged()) {
      router.push("/");
    }
  }, [router]);

  useEffect(() => {
    const initializeData = async () => {
      try {
        const userData = await getUserData();
        setData(userData);
      } catch (e) {
        console.log(e);
      }
    };

    if (isLogged()) {
      initializeData();
    } else {
      router.push("/");
    }
  }, [router]);

  console.log(data);
  console.log(data?.is_adm);
  return (
    <div className={styles.allContent}>
      {data?.is_adm ? <TableComponent /> : ""}
    </div>
  );
}
