"use client";
import Link from "next/link";
import styles from "./style.module.scss";
import { isLogged } from "@/utils/utils";

import { FormEvent, useEffect, useState } from "react";
import { loginUser } from "@/services/Auth";
import LoadingIcon from "@/Assets/loading.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Login() {
  const router = useRouter();

  const [cpf, setCpf] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (isLogged()) {
      router.push("/AlunArea");
    }
  }, [router]);

  const login = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await loginUser({ cpf, password });
      router.push("/AlunArea");
    } catch (e) {
      console.log(e);
    }
    isLogged();
    setLoading(false);
  };
  return (
    <section className={styles.login}>
      <h2>Login</h2>
      <p className={styles.isClient}>Se você já é cliente insira seus dados </p>
      <form action="submit" onSubmit={(e) => login(e)}>
        <label htmlFor="">
          <p>Cpf*</p>
          <input
            type="text"
            name="cpf"
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </label>
        <label htmlFor="">
          <p>Senha*</p>
          <input
            type="password"
            name="senha"
            id="senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {/* <span className={styles.error}>Digite um email válido</span> */}
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
