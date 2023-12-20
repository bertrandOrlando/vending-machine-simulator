import Image from "next/image";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import vendingItems from "@/data/data.json";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={poppins.className}>
      <Navbar />
      <div className="mt-28"></div>
      <h1 className="mb-4 text-center text-4xl font-bold  text-stone-700 drop-shadow-2xl">
        Ben & Lou Mart
      </h1>
      <h2 className="mb-4 text-center text-2xl font-medium  text-gray-800">
        It's Shop Time..
      </h2>

      <div className="mx-auto my-12 flex max-w-lg flex-wrap items-center justify-center gap-5 rounded-3xl bg-stone-400 px-4  py-8 lg:max-w-xl lg:gap-10">
        {vendingItems.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
      <Footer />
    </main>
  );
}
