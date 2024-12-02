import Image from "next/image";
import styles from "./style.module.scss";
import { CardPlan } from "@/Interface/interfaces";
import CorrectImage from "@/Assets/correct.svg";
import DeleteIcon from "@/Assets/deleteIcon.svg";
export default function PlanCard({ betterBenefit }: CardPlan) {
  const benefits = [
    "No loyalty",
    "Zero annual fee",
    "Zero membership",
    "Access to online and in-person classes",
    "Exclusive application",
    "Flexible hours",
    "Space equipped with cutting-edge technology.",
    "Exclusive discounts at partner stores",
  ];

  const isValidBenefit = (index: number) => {
    if (index <= 5 || betterBenefit) {
      return true;
    }
    return false;
  };

  return (
    <div className={styles.card}>
      {betterBenefit && (
        <span className={styles.betterBenefit}>Best value for money</span>
      )}
      <h2 className={styles.planType}>
        {betterBenefit ? "Plus" : "Basic"} Plan
      </h2>
      <p className={styles.whiteComum}>A partir de </p>
      <h3 className={styles.valuePlan}>
        R$<b>{betterBenefit ? "0,99" : "99,90"}</b>
      </h3>
      <p className={styles.whiteComum}>
        {betterBenefit ? "in the first month" : "per month"}
      </p>
      <button className={styles.toEnroll}>REGISTER NOW!</button>
      <ul className={styles.benefits}>
        {benefits.map((benefit, index) => (
          <li key={benefit} className={styles.benefit}>
            <Image
              width={10}
              height={10}
              alt="Correct image"
              src={isValidBenefit(index) ? CorrectImage : DeleteIcon}
            />
            <p
              className={
                isValidBenefit(index) ? styles.trueBenefit : styles.falseBenefit
              }
            >
              {benefit}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
