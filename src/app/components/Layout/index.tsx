// React
import React from "react";
// Next
import { Inter } from "next/font/google";
// Styles
import styles from "./index.module.css";
// 3rd party
import classnames from "classnames";
// Components
import Navbar from "../Navbar";

interface Props {
  image: "camp" | "graffiti" | "luke";
  children?: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

function Layout(props: Props) {
  return (
    <>
      <main
        className={classnames(styles.page, inter.className)}
        style={{ backgroundImage: `url(/${props.image}.jpg)` }}
      >
        <div className={styles.container}>
          <Navbar />
          {props.children}
        </div>
      </main>
    </>
  );
}

export default Layout;
