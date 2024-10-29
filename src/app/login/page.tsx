"use client";
import Link from "next/link";
import styles from "./style.module.scss";
import { isLogged } from "@/utils/utils";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import LoadingIcon from "@/Assets/loading.svg";
import Image from "next/image";
export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (isLogged()) {
      router.push("/");
    }
  }, [isLogged()]);

  const loginUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  return (
    <section className={styles.login}>
      <h2>Login</h2>
      <p className={styles.isClient}>Se você já é cliente insira seus dados </p>
      <form action="submit" onSubmit={(e) => loginUser(e)}>
        <label htmlFor="">
          <p>Email*</p>
          <input type="text" name="email" id="email" />
        </label>
        <label htmlFor="">
          <p>Senha*</p>
          <input type="password" name="senha" id="senha" />
        </label>
        <span className={styles.error}>Digite um email válido</span>
        <button type="submit" className={styles.sendForm} disabled={loading}>
          {loading ? (
            <Image
              src={LoadingIcon}
              alt="Login image"
              width={10}
              height={10}
              className={styles.loadingImage}
            />
          ) : (
            "login"
          )}
        </button>
      </form>

      <p className={styles.firstAccess}>
        É seu primeiro acesso? como cliente?{" "}
        <Link href="/cadastro">Clique aqui</Link> e faça seu cadastro
      </p>
    </section>
  );
}
