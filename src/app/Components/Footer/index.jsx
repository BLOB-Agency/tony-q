import Image from "next/image";


export default function Footer() {
  return (
    <footer className="pt-[48px] border-t-[1px] border-solid border-black flex flex-col sm:flex-row justify-between gap-[48px] items-center sm:items-start lg:ml-[360px] mt-[48px] ">
        <div className="flex flex-col gap-[24px] items-center sm:items-start">
            <h2 className="text-[24px]">Tony Querrec</h2>
            <div className="flex gap-[24px]">
            <a href="" target="_blank" className="flex items-center justify-center border-[1.5px] border-black rounded-full w-[45px] h-[45px] transition-all duration-300 hover:scale-110 ease-in-out active:scale-90">
                <Image src="/images/icons/icon-linkedin.svg" width={20} height={20} alt="icon Linkedin" />
            </a>
            <a href="" target="_blank" className="flex items-center justify-center border-[1.5px] border-black rounded-full w-[45px] h-[45px] transition-all duration-300 hover:scale-110 ease-in-out active:scale-90">
                <Image src="/images/icons/icon-instagram.svg" width={20} height={20} alt="icon Instagram" />
            </a>
            <a href="" target="_blank" className="flex items-center justify-center border-[1.5px] border-black rounded-full w-[45px] h-[45] transition-all duration-300 hover:scale-110 ease-in-out active:scale-90">
                <Image src="/images/icons/icon-behance.svg" width={20} height={20} alt="icon Behance" />
            </a>
            <a href="mailto:tony.querrec@gmail.com" target="_blank" className="flex items-center justify-center border-[1.5px] border-black rounded-full w-[45px] h-[45] transition-all duration-300 hover:scale-110 ease-in-out active:scale-90">
                <Image src="/images/icons/icon-mail.svg" width={20} height={20} alt="icon mail" />
            </a>
            </div>
        </div>
        <div className="sm:self-end text-[12px] ">
            <a href="https://www.blob-agency.com/" target="_blank">© 2024 Blob Agency - Tous droits réservés</a>
        </div>
    </footer>
  )
}
