import Image from "next/image";
import { Montserrat, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import vendingItems from "@/data/data.json";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={montserrat.className}>
      <Navbar />
      <div className="pt-28"></div>
      <h1 className="mb-4  text-center text-4xl  font-semibold text-stone-700 drop-shadow-2xl">
        Ben & Lou
        <br /> Vending Machine
      </h1>
      <h2 className="mb-4 text-center text-2xl font-medium  text-gray-800">
        It's Shop Time..
      </h2>

      <div className="mx-auto my-12 flex max-w-lg flex-wrap items-center justify-center gap-5 rounded-3xl bg-slate-400 bg-opacity-80  px-4 py-8 lg:max-w-xl lg:gap-10">
        {vendingItems.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
      <Footer />
    </main>
  );
}
