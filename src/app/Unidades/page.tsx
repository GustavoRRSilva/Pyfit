import Banner from "@/Components/Banner";
import styles from "./style.module.scss";
import TotalUnidades from "@/Components/TotalUnidades/page";

export default function Unidades() {
  return (
    <section className={styles.section}>
      <Banner text="Nossas unidades pertinho de você" />
      <TotalUnidades />
    </section>
  );
}
