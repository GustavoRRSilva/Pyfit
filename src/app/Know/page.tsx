import Image from "next/image";
import styles from "./style.module.scss";
import KnowImage from "@/Assets/bannerKnow.svg";
import ImageUm from "@/Assets/gabriel.png";
import ImageText from "@/Assets/imagetext.svg";
import Stars from "@/Assets/stars.svg";
export default function Know() {
  const notes = [
    {
      image: ImageUm,
      name: "Gabriel Vinicius",
      text: "Amazing Gym! Comfortable space, new machines, a lot good!",
    },
    {
      image: ImageUm,
      name: "Gabriel Vinicius",
      text: "Amazing Gym! Comfortable space, new machines, a lot good!",
    },
    {
      image: ImageUm,
      name: "Gabriel Vinicius",
      text: "Amazing Gym! Comfortable space, new machines, a lot good!",
    },
    {
      image: ImageUm,
      name: "Gabriel Vinicius",
      text: "Amazing Gym! Comfortable space, new machines, a lot good!",
    },
  ];
  return (
    <div className={styles.section}>
      <div className="content">
        <Image
          src={KnowImage}
          alt="Imagem da academia "
          width={100}
          className={styles.banner}
          height={100}
        />
        <h2>
          <span className="green">Modern</span>{" "}
          <span className="red">, high-performance</span> machines to enhance
          your results in each workout!
        </h2>

        <div className={styles.textImage}>
          <span>
            <span className={styles.bar}></span>
            <p>
              <span className="green">At our gym</span>, you will find a
              complete, modern and welcoming space, designed to offer the best
              in each workout. With state-of-the-art equipment and exclusive
              areas for various sports, we create an environment where
              motivation and care for well-being are priorities!
            </p>
          </span>
          <Image
            src={ImageText}
            height={100}
            width={100}
            alt="Imagem da academia"
          />
        </div>
        <h2>
          <span className="green">User</span> reviews
          <div className={styles.rates}>
            {notes.map((note, index) => (
              <div key={index} className={styles.rate}>
                <div className={styles.nameImage}>
                  <Image src={note.image} alt="" width={100} height={100} />
                  <h3>{note.name}</h3>
                </div>
                <div className={styles.textStar}>
                  {" "}
                  <p>{note.text}</p>
                  <Image src={Stars} alt="" width={100} height={100} />
                </div>
              </div>
            ))}
          </div>
        </h2>
      </div>
    </div>
  );
}
