"use Client";
import { UnidadeProps } from "@/Interface/interfaces";
import styles from "./style.module.scss";
import Image from "next/image";
import LocationIcon from "../../../Assets/LocationIcon.svg";
export default function UnidadeUnical({
  Localizacao,
  NomeUnidade,
  Link,
  ImageLink,
}: UnidadeProps) {
  console.log(Localizacao, NomeUnidade, Link);
  return (
    <div className={styles.unidade}>
      <Image src={ImageLink} width={10} height={10} alt="Pessoa na academia" />
      <h2>{NomeUnidade}</h2>
      <div className={styles.location}>
        <Image src={LocationIcon} width={10} height={10} alt="Airplane icon" />
        <p>{Localizacao}</p>
      </div>
      <a href={Link}>
        <button>View Unit</button>
      </a>
    </div>
  );
}
