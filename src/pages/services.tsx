import Image from "next/image";
import React from "react";

export default function Services() {
  return (
    <>
      <hr className="border-gray-200" />
      <p className="text-gray-900 text-3xl">Ils m'ont fait confiance</p>
      <div className="flex">
        <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <Image
            src="/mutatis.png"
            width={200}
            height={200}
            alt="mutatis logo"
          />
        </div>
        <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <Image src="/oak.png" width={200} height={200} alt="oak logo" />
        </div>
      </div>
    </>
  );
}
