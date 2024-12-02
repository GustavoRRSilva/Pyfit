import Image from "next/image";
import styles from "./style.module.scss";
import WarningIcon from "@/Assets/warningIcon.svg";
export default function Warning() {
  return (
    <section className={styles.warning}>
      <div>
        <Image width={10} height={10} alt="Warning icon " src={WarningIcon} />
        <h2>Warnings:</h2>
      </div>
      <ul>
        <li>
          <p>
            Adolescents between 12 and 17 years old must be accompanied by their
            legal guardian on the first visit to the chosen Unit, carrying an
            identification document.{" "}
          </p>
        </li>
        <li>
          For cash payments, consult the service desk of the selected Unit.{" "}
        </li>
      </ul>
    </section>
  );
}
