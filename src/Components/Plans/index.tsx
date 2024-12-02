import PlanCard from "../Ui/PlanCard";
import styles from "./style.module.scss";
export default function Plans() {
  return (
    <section className={styles.plans} id="plans">
      <h2>Discover our plans</h2>
      <p>
        Start transforming your life today with{" "}
        <span className={styles.pyFit}>
          {" "}
          <b>Py</b>Fit!
        </span>{" "}
        We have the <b>ideal</b> plan for you to optimize your <b>physical</b>{" "}
        nd mental health, achieving your goals <b>efficiently</b> and
        <b> intelligently</b> Explore our packages and choose the one that
        offers the best <b> value for money </b>to keep you in shape, as well as
        optimize your <b>code</b>
      </p>

      <div className={styles.planDetails}>
        <PlanCard betterBenefit={true} />
        <PlanCard betterBenefit={false} />
      </div>
    </section>
  );
}
