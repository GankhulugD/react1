import Image from "next/image";
import styles from "./page.module.css";
import { Profiler } from "react";

export default function Home() {
  return <Profile />;
}

const Profile = () => {
  return (
    <body className={styles.background1}>
      <div className={styles.background}>
        <img
          className={styles.img}
          src="https://i.pinimg.com/736x/c1/67/9c/c1679c34485c28e6728e3b5f3cdb14a1.jpg"
          alt="img"
        />
        <div className={styles.b1}>
          <p className={styles.name}>Miyamoto Musashi 🍀</p>
          <div className={styles.title}>
            Japanese swordsman, strategist, artist and writer
          </div>
          <div className={styles.flex1}>
            <div className={styles.flex}>
              <img
                src="https://cdn-icons-png.freepik.com/512/3917/3917688.png"
                alt=""
                width={13}
                height={13}
              />
              <p>358</p>
            </div>
            <div className={styles.flex}>
              <img
                src="https://assets.streamlinehq.com/image/private/w_512,h_512,ar_1/f_auto/v1/icons/1/check-mark-button-high-contrast-rxek0a9r9c8sgtncztwpys.png/check-mark-button-high-contrast-afrix5r4vfcwdnzrmrezjd.png?_a=DATAg1AAZAA0"
                alt=""
                width={13}
                height={13}
              />
              <p>48</p>
            </div>
            <button className={styles.button}>Follow +</button>
          </div>
        </div>
      </div>
    </body>
  );
};
