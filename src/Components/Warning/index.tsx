import Image from "next/image";
import styles from "./style.module.scss";
import WarningIcon from "@/Assets/warningIcon.svg";
export default function Warning() {
  return (
    <section className={styles.warning}>
      <div>
        <Image width={10} height={10} alt="Warning icon " src={WarningIcon} />
        <h2>Avisos:</h2>
      </div>
      <ul>
        <li>
          <p>
            Adolescentes entre 12 e 17 anos devem estar acompanhados de seu
            responsável legal na primeira visita à Unidade escolhida, portando
            documento de identificação.{" "}
          </p>
        </li>
        <li>
          Para pagamentos em dinheiro, consulte o balcão de atendimento da
          Unidade selecionada.{" "}
        </li>
      </ul>
    </section>
  );
}
