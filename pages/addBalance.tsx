import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import { useBalanceContext } from "@/Context/BalanceContext";
import ButtonBalance from "@/components/ButtonBalance";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const addBalance = () => {
  const balanceContext = useBalanceContext();
  const setBalance = balanceContext.setBalance;

  return (
    <main className={poppins.className}>
      <Navbar />
      <div className="mx-auto mt-28 flex w-full max-w-md flex-col items-center justify-center gap-6">
        <h2 className="text-2xl font-semibold">Tambah Saldo</h2>
        <div className="align-center flex flex-wrap content-center justify-center gap-x-4 gap-y-3 p-3">
          <ButtonBalance topup={5000} />
          <ButtonBalance topup={10000} />
          <ButtonBalance topup={20000} />
          <ButtonBalance topup={50000} />
          <ButtonBalance topup={100000} />
        </div>
        <span className="h-1 w-full bg-black" />
        {/* <button
          className="m-3 rounded-2xl bg-slate-800 px-4 py-3 text-white transition hover:scale-105 hover:bg-slate-200 hover:font-semibold hover:text-slate-800"
          onClick={() => {
            setBalance(0);
          }}
        >
          Tarik Semua Saldo
        </button> */}
      </div>
    </main>
  );
};

export default addBalance;
