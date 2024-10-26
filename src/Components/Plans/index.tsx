import PlanCard from "../Ui/PlanCard"
import styles from "./style.module.scss"
export default function Plans() {
    return(
        <section className={styles.plans}>
            <h2>Conheça nossos planos</h2>
            <p>Comece a transformar sua vida hoje com a <span className={styles.pyFit}> <b>Py</b>Fit!</span> Temos o plano <b>ideal</b> para você otimizar sua <b>saúde</b> física e mental, alcançando seus <b>objetivos</b> de forma <b>eficiente</b> e <b>inteligente</b>. Explore nossos pacotes e escolha o que oferece o melhor <b>custo-benefício</b> para você se manter em forma, assim como otimiza seu <b>código!</b></p>

            <div className= {styles.planDetails}>
                 <PlanCard betterBenefit = {true} />
                 <PlanCard betterBenefit = {false}/>
            </div>
        </section>
    )
}