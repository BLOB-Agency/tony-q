"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import ImgModal from "../ImgModal";

export default function ImageGrid({ data }) {
  const [spans, setSpans] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (data) {
      setSpans(
        data.map(() =>
          Math.random() < 0.2 ? "sm:col-span-2" : "sm:col-span-1"
        )
      );
    }
  }, [data]);

  const handleClick = (item) => {
    setSelectedImage(item)
  };
  const onClose = () => {
    setSelectedImage(null);
  }

  return (
    <>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center ">
        {data.map((item, index) => (
          <div
            key={item.id + item.description}
            // className={`relative ${spans[index]} cursor-pointer`}
            className={`relative cursor-pointer`}
            onClick={() => handleClick(item)}
          >
            <Image
              src={`/images/${item.url}`} // Directly use item.url
              alt={item.description}
              width={400}
              height={300}
              quality={75}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal for displaying selected image */}
      {selectedImage && (
        <ImgModal
          item={selectedImage}
          onClose={() => onClose()}
        />
      )}
    </>
  );
}
