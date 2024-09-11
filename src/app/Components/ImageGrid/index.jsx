"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageGrid({ data }) {
  const [spans, setSpans] = useState([]);

  useEffect(() => {
    if (data) {
      setSpans(
        data.map(() =>
          Math.random() < 0.2 ? "md:col-span-2" : "md:col-span-1"
        )
      );
    }
  }, [data]);

  return (
    <div
      className={`grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center`}
    >
      {data.map((item, index) => (
        <div
          key={item.id}
          className={`relative w-full ${spans[index]}`}
        >
          <Image
            src={`/images/${item.url}`}
            alt={item.description}
            layout="responsive"
            width={400} // Adjust as needed
            height={300} // Adjust as needed
            quality={75}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}