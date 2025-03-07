// 3rd party
import prisma from "../lib/prisma";
// 3rdparty
import classnames from "classnames";
// Components
import Layout from "../components/Layout";
import FighterCard from "../components/FighterCard";
// Styles
import styles from "./index.module.css";
// Assets
// import bgImage from "/bg_character.jpg";

async function getFighters() {
  const fighters = await prisma.fighter.findMany();
  return fighters;
}

export default async function Fighters() {
  const fighters = await getFighters();

  return (
    <Layout image="graffiti">
      <div className={classnames("container", styles.fightersPage)}>
        <div className={styles.fightersGrid}>
          {fighters.map((fighter) => (
            <FighterCard
              key={fighter.id}
              id={fighter.id}
              className={styles.card}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
