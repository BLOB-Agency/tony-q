import ImageGrid from "./Components/ImageGrid";
import portraits from "../../public/data/portraits.json";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:ml-[412px] mt-[48px] ">
      {portraits ? <ImageGrid data={portraits} /> : <p>loading...</p>}
    </main>
  );
}
