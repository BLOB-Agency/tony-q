
import fineart from "../../../public/data/fineart.json";
import ImageGrid from "../Components/ImageGrid";

export default function FineArt() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between xl:ml-[412px] mt-[48px] ">
      {fineart ? <ImageGrid data={fineart} /> : <p>loading...</p>}
    </main>
  );
}
