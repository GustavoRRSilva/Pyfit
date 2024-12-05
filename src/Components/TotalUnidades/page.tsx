import UnidadeUnical from "../Ui/Unidade/index";

import ImageUm from "../../Assets/gymImageUm.svg";
import ImageDois from "../../Assets/gymImageDois.svg";

import styles from "./style.module.scss";
export default function TotalUnidades() {
  const unidades = [
    {
      NomeUnidade: "Unidade Centro",
      Localizacao: "Rua Principal, 123 - Centro",
      Link: `/UnitInfo`,
    },
    {
      NomeUnidade: "Unidade Norte",
      Localizacao: "Avenida Norte, 456 - Zona Norte",
      Link: `/UnitInfo`,
    },
    {
      NomeUnidade: "Unidade Sul",
      Localizacao: "Rua das Flores, 789 - Zona Sul",
      Link: `/UnitInfo`,
    },
    {
      NomeUnidade: "Unidade Leste",
      Localizacao: "Avenida Leste, 1234 - Zona Leste",
      Link: `/UnitInfo`,
    },
  ];

  return (
    <div className={styles.div}>
      <form>
        <input type="text" name="" id="" />
        <input type="submit" value="Buscar" />
      </form>
      <p>Units found: {unidades.length}</p>
      <div className={styles.unidades}>
        {unidades.map((unidade, index) => (
          <UnidadeUnical
            key={index}
            NomeUnidade={unidade.NomeUnidade}
            Localizacao={unidade.Localizacao}
            Link={unidade.Link}
            ImageLink={index % 2 === 0 ? ImageUm : ImageDois}
          />
        ))}
      </div>
    </div>
  );
}
