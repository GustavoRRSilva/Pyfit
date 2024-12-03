import UnidadeUnical from "../Ui/Unidade/index";

import ImageUm from "../../Assets/gymImageUm.svg";
import ImageDois from "../../Assets/gymImageDois.svg";

import styles from "./style.module.scss";
export default function TotalUnidades() {
  const unidades = [
    {
      NomeUnidade: "Unidade Centro",
      Localizacao: "Rua Principal, 123 - Centro",
      Link: `/unit-details?name=Unidade%20Centro&address=Rua%20Principal,%20123%20-%20Centro`,
    },
    {
      NomeUnidade: "Unidade Norte",
      Localizacao: "Avenida Norte, 456 - Zona Norte",
      Link: `/unit-details?name=Unidade%20Norte&address=Avenida%20Norte,%20456%20-%20Zona%20Norte`,
    },
    {
      NomeUnidade: "Unidade Sul",
      Localizacao: "Rua das Flores, 789 - Zona Sul",
      Link: `/unit-details?name=Unidade%20Sul&address=Rua%20das%20Flores,%20789%20-%20Zona%20Sul`,
    },
    {
      NomeUnidade: "Unidade Leste",
      Localizacao: "Avenida Leste, 1234 - Zona Leste",
      Link: `/unit-details?name=Unidade%20Leste&address=Avenida%20Leste,%201234%20-%20Zona%20Leste`,
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
