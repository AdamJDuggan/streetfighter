// Next
import Image from "next/image";
import Link from "next/link";
// 3rd party
import classnames from "classnames";
// Styles
import styles from "./index.module.css";

export default function ButtonAppBar() {
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <Link href={"/"}>
          <Image src={"/logo.png"} alt="Logo" width={150} height={40} />
        </Link>
        <div className={styles.routes}>
          <Link href={"/fighters"} className={styles.route}>
            FIGHTERS
          </Link>
        </div>
      </div>
    </nav>
  );
}
