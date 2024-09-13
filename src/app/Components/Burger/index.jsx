

export default function Burger({isOpen, switchMenu}) {
 
  return (
    <button onClick={switchMenu} className="flex flex-col lg:hidden w-[50px] h-[36px] gap-[10px] justify-center items-center overflow-hidden">
      {
        !isOpen ? (
          <>
            <span className="w-[40px] h-[2px] bg-black rounded transition-all duration-300"></span>
            <span className="w-[40px] h-[2px] bg-black rounded transition-all duration-300"></span>
            <span className="w-[40px] h-[2px] bg-black rounded transition-all duration-300"></span>
          </>
        ) : (
          <>
            <span className="w-[40px] h-[2px] bg-black rounded rotate-45 self-center absolute transition-all duration-300"></span>
            <span className="w-[40px] h-[2px] bg-black rounded self-center transition-all absolute opacity-0"></span>
            <span className="w-[40px] h-[2px] bg-black rounded -rotate-45 self-center absolute transition-all duration-300"></span>
          </>
        )
      }
    </button>
  );
}
