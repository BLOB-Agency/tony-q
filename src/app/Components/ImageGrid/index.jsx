"use client";
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
      className={`grid gap-[12px] grid-col md:grid-cols-3 lg:grid-cols-4 items-center `}
    >
      {data.map((item) => (
        <img
          key={item.id}
          src={`/images/${item.url}`}
          alt={item.description}
          className={`w-full object-contain ${spans[item.id]}`}
        />
      ))}
    </div>
  );
}
