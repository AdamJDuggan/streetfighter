"use client";
// React
import { useState } from "react";
// Next
import Link from "next/link";
import Image from "next/image";
// 3rd party
import classnames from "classnames";
// Styles
import styles from "./index.module.css";

type Props = {
  id: string;
  className?: string;
};

export default function FighterCard(props: Props) {
  const imagePath = `/fighters/${props.id}/coverImg.png`;
  const colorImagePath = `/fighters/${props.id}/converImg_over.png`;

  const [image, setImage] = useState(imagePath);

  return (
    <Link
      href={`/fighters/${props.id}`}
      onMouseOver={() => setImage(colorImagePath)}
      onMouseLeave={() => setImage(imagePath)}
      className={classnames(styles.fighterCard, props.className)}
    >
      <Image
        src={image}
        width={120}
        height={120}
        alt={`Profile image for fighter with id ${props.id}`}
      />
    </Link>
  );
}
