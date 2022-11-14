import styles from "../styles/Card.module.css";

import Image from "next/image";
import Link from "next/link";

export default function Card({ pokemon }) {
  return (
    <div className={styles.card}>
      <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width="120"
        height="120"
        alt={pokemon.name}
      />
      <p className={styles.id}>#{pokemon.id}</p>
      <h3 className={styles.title}>{pokemon.name}</h3>
      <div className={styles.btns}>
        <Link href={`/pokemon/${pokemon.id}`}className={styles.btn}>
          Detalhes
        </Link>
        <button onClick={''} className={styles.btn_plus}>+</button>
      </div>     
    </div>
  );
}