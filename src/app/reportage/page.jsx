import reportage from "../../../public/data/reportage.json";
import ImageGrid from "../Components/ImageGrid";

export default function Reportage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between xl:ml-[412px] mt-[48px]">
      {reportage ? <ImageGrid data={reportage} /> : <p>Loading...</p>}
    </main>
  );
}
