import Image from "next/image";
export default function ImgModal({ item, onClose }) {
  return (
    <div className="fixed  bg-black bg-opacity-80 z-50 top-0 left-0 self-center w-full h-full flex flex-col gap-[12px] items-center justify-center transform transition-all duration-300 ease-in-out ">
      <div className="relative  h-full w-full flex  justify-center ">
        <Image
          src={`/images/${item.url}`}
          alt="image"
          fill
          quality={100}
          className="object-contain py-[48px] sm:py-[96px] "
        ></Image>
      </div>
      <button
        className=" fixed z-[60] w-[50px] h-[50px]  top-[24px] lg:top-[96px] right-[24px] lg:right-[96px]  text-white text-[24px] flex items-center justify-center hover:scale-110 transform transition-all duration-300 ease-in-out active:scale-75 active:rotate-[90deg] "
        onClick={onClose}
      >
        <span className="absolute h-[2px] w-[40px] bg-white rounded-full rotate-45"></span>
        <span className="absolute h-[2px] w-[40px] bg-white rounded-full -rotate-45"></span>
      </button>
    </div>
  );
}
