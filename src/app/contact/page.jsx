import Image from "next/image";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col gap-[48px] items-center sm:items-start xl:ml-[360px] mt-[48px] ">
        <h1 className="text-[36px] text-center  self-center">
            Contactez-moi
        </h1>
        <form action="" className="flex flex-col gap-[48px] w-full mt-[48px] ">
            <div className="flex flex-col gap-[24px]">
                <label htmlFor="" className="text-[24px] ">Sujet :</label>
                <input placeholder="Shooting commercial" type="text" name="" id="" className="border-solid border-b-[1.5px] border-black w-[100%] sm:w-[50%] lg:w-[40%] text-[16px] pb-[20px] " />
            </div>
            <div className="flex flex-col gap-[24px]">
                <label htmlFor="" className="text-[24px] ">Message :</label>
                <textarea placeholder="Bonjour, pouvons-nous convenir d’un rendez-vous le ..." type="text" name="" id="" className="border-solid border-b-[1.5px] border-black w-[100%] sm:w-[60%] text-[16px] " />
            </div>
            <button className="text-[24px] mt-[48px] px-[48px] py-[12px] border-solid border-[2px] border-black w-fit self-center hover:bg-black hover:text-white transition-all duration-300 hover:scale-110 ease-in-out active:scale-90 ">Envoyer</button>
        </form>
        <div className="flex gap-[48px] mt-[24px] justify-center w-full  ">
        <a href="" target="_blank" className=" flex items-center justify-center border-[1.5px] border-black rounded-full w-[75px] h-[75px] transition-all duration-300 hover:scale-110 ease-in-out active:scale-90">
            <Image src="/images/icons/icon-linkedin.svg" width={35} height={35} alt="icon Linkedin" />
        </a>
        <a href="" target="_blank" className=" flex items-center justify-center border-[1.5px] border-black rounded-full w-[75px] h-[75px] transition-all duration-300 hover:scale-110 ease-in-out active:scale-90 ">
            <Image src="/images/icons/icon-instagram.svg" width={35} height={35} alt="icon Instagram" />
        </a>
        <a href="" target="_blank" className=" flex items-center justify-center border-[1.5px] border-black rounded-full w-[75px] h-[75px] transition-all duration-300 hover:scale-110 ease-in-out active:scale-90 ">
            <Image src="/images/icons/icon-behance.svg" width={35} height={35} alt="icon Behance" />
        </a>
        <a href="mailto:tony.querrec@gmail.com" target="_blank" className=" flex items-center justify-center border-[1.5px] border-black rounded-full w-[75px] h-[75px] transition-all duration-300 hover:scale-110 ease-in-out active:scale-90 ">
            <Image src="/images/icons/icon-mail.svg" width={35} height={35} alt="icon Mail" />
        </a>
        </div>
    </main>
  )
}
