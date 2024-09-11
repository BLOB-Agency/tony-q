import ImageGrid from "../Components/ImageGrid";
import commercial from "../../../public/data/commercial.json";

export default function Commercial() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:ml-[412px] mt-[48px] ">
      {commercial ? <ImageGrid data={commercial} /> : <p>loading...</p>}
    </main>
  );
}
