import Image from "next/image";
import styles from "./style.module.scss";
import WomenWorkout from "@/Assets/womenWorkout.svg";
import Link from "next/link";
import { BannerProps } from "@/Interface/interfaces";
export default function Banner({ text }: BannerProps) {
  return (
    <section className={styles.banner}>
      <Image
        width={10}
        height={10}
        alt="Women workout"
        src={WomenWorkout}
        className={styles.womenWorkout}
      />
      <div className={styles.textInfos}>
        <p className={styles.mainText}>{text}</p>
        <div className={styles.profits}>
          <div>
            <p className={styles.without}>WITHOUT</p>
            <p className={styles.valueWithout}>LOYALTY</p>
          </div>
          <div>
            <p className={styles.without}>WITHOUT</p>
            <p className={styles.valueWithout}>ANNUITY</p>
          </div>
          <div>
            <p className={styles.without}>WITHOUT</p>
            <p className={styles.valueWithout}>BUGS</p>
          </div>
          <Link href={"#"} className={styles.toEnroll}>
            REGISTER NOW!
          </Link>
        </div>
      </div>
    </section>
  );
}
