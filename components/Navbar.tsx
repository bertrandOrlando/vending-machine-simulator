import { useBalanceContext } from "@/Context/BalanceContext";
import { currencyFormatter } from "@/utils/currencyFormatter";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const balanceContext = useBalanceContext();
  const balance = balanceContext.balance;
  return (
    <div className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-slate-200 bg-opacity-80 px-8 py-3 lg:py-4">
      <Link
        href={"./"}
        className="text-md text-center font-medium	transition hover:scale-105 hover:font-semibold hover:text-stone-700"
      >
        Ben & Lou <br /> Vending Machine
      </Link>
      <div className="">
        <Link href={"./addBalance"}>
          <button className="rounded-2xl bg-slate-800 px-3 py-2 text-white transition hover:scale-105 hover:bg-slate-950 ">
            Add Balance
          </button>
        </Link>
        <h4> {currencyFormatter(balance)}</h4>
      </div>
    </div>
  );
};

export default Navbar;
