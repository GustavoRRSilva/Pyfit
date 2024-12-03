import styles from "./style.module.scss";
import ImageBanner from "../../Assets/gymImageUm.svg";
import Image from "next/image";
import ImageUm from "@/Assets/cardio.svg";
import ImageDois from "@/Assets/cross.svg";
import ImageTres from "@/Assets/fisio.svg";
import ImageQuatro from "@/Assets/bodybuilding.svg";
import Wifi from "@/Assets/wifi.svg";
import Progress from "@/Assets/progress.svg";
import Climatization from "@/Assets/climatization.svg";
import Music from "@/Assets/music.svg";
import Parking from "@/Assets/parking.svg";
import Restroom from "@/Assets/vestiario.svg";
import Plans from "@/Components/Plans";

export default function UnitInfo() {
  const images = [ImageUm, ImageDois, ImageTres, ImageQuatro];
  const benefits = [
    {
      title: "Wi-fi",
      img: Wifi,
    },
    {
      title: "Progress",
      img: Progress,
    },
    {
      title: "Climatization",
      img: Climatization,
    },
    {
      title: "Music",
      img: Music,
    },
    {
      title: "Parking",
      img: Parking,
    },
    {
      title: "Restroom",
      img: Restroom,
    },
  ];
  return (
    <section className={styles.content}>
      <div className="content">
        <div className={styles.infosUnidade}>
          <Image src={ImageBanner} alt="" width={100} height={100} />
          <div className={styles.texts}>
            <h2>Jean Emile Favre</h2>
            <h3>
              Avenida Jean Emile Favre, S/N, Ipsep - CEP: 59.151-250, Ipsep/PE
            </h3>
            <h4 className="green">Operation</h4>
            <p>
              Monday to Friday:<span className="green"> 5:30h às 23:00h</span>
            </p>
            <p>
              Saturday and holidays:
              <span className="green"> 8:00h às 18:00h</span>
            </p>
            <p>
              Sunday:<span className="green"> 8:00h às 14:00h</span>
            </p>
          </div>
        </div>
        <p className={styles.subtitle}>
          Discover <span className="green">our modalities</span>
        </p>
        <div className={styles.images}>
          {images.map((image, index) => (
            <Image
              className={styles.imgModalidades}
              src={image}
              width={10000}
              height={10000}
              key={index}
              alt="image"
            />
          ))}
        </div>
        <h2 className={styles.inside}>Inside of the gym</h2>
        <div className={styles.benefits}>
          {benefits.map((benefit) => (
            <div key={benefit.title} className={styles.benefit}>
              <Image
                src={benefit.img}
                alt={benefit.title}
                width={1000}
                height={1000}
              />
              <p>{benefit.title}</p>
            </div>
          ))}
        </div>
        <Plans />
      </div>
    </section>
  );
}
