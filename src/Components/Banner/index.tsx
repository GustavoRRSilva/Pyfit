import Image from "next/image"
import styles from "./style.module.scss"
import WomenWorkout from "@/Assets/womenWorkout.svg"
import Link from "next/link"
export default function Banner() {return(
   <section className={styles.banner}>
    <Image width={10} height={10} alt="Women workout" src={WomenWorkout} className={styles.womenWorkout}/>
    <div className={styles.textInfos}>
      <p className={styles.mainText}>Transforme seu corpo com a mesma precisão que você escreve seus códigos!</p>
      <div className={styles.profits}>
         <div>
            <p className={styles.without}>SEM</p>
            <p className={styles.valueWithout}>BUGS</p>
         </div>
         <div>
            <p className={styles.without}>SEM</p>
            <p className={styles.valueWithout}>ANUIDADE</p>
         </div>
         <div>
            <p className={styles.without}>SEM</p>
            <p className={styles.valueWithout}>FIDELIDADE</p>
         </div>
         <Link href={"#"} className={styles.toEnroll}>MATRICULE-SE JÁ!</Link>
      </div>
    </div> 
   </section>
)}