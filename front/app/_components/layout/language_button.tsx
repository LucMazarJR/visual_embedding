"use client";

import Image from "next/image";
import { useState } from "react";

const getFlag = (isBrazilian: boolean) => {
  if (isBrazilian) {
    return "/icons/br-flag.png";
  }
  return "/icons/us-flag.png";
};

export default function LanguageButton() {
  const [isBrazilian, setIsBrazilian] = useState(true);

  return (
    <button
      className="cursor-pointer"
      onClick={() => setIsBrazilian(!isBrazilian)}
    >
      <Image
        src={getFlag(isBrazilian)}
        alt="us-flag"
        width={35}
        height={35}
      ></Image>
    </button>
  );
}
