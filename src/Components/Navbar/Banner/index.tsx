import Image from "next/image"
import "./style.scss"
import WomenWorkout from "@/Assets/womenWorkout.svg"
import Link from "next/link"
export default function Banner() {return(
   <section className="banner">
    <Image width={10} height={10} alt="Women workout" src={WomenWorkout} className="womenWorkout"/>
    <div className="textInfos">
      <p className="mainText">Transforme seu corpo com a mesma precisão que você escreve seus códigos!</p>
      <div className="profits">
         <div>
            <p className="without">SEM</p>
            <p className="valueWithout">BUGS</p>
         </div>
         <div>
            <p className="without">SEM</p>
            <p className="valueWithout">ANUIDADE</p>
         </div>
         <div>
            <p className="without">SEM</p>
            <p className="valueWithout">BUGS</p>
         </div>
         <Link href={"#"} className="toEnroll">MATRICULE-SE JÁ!</Link>
      </div>
    </div> 
   </section>
)}