import { useBalanceContext } from "@/Context/BalanceContext";
import { currencyFormatter } from "@/utils/currencyFormatter";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const balanceContext = useBalanceContext();
  const balance = balanceContext.balance;
  return (
    <div className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-slate-200 bg-opacity-80 px-8 py-3">
      <Link href={"./"} className="text-center text-xl font-semibold	">
        Ben & Lou Mart
      </Link>
      <div className="">
        <Link href={"./addBalance"}>
          <button className="rounded-2xl bg-slate-800 px-3 py-2 text-white">
            Add Balance
          </button>
        </Link>
        <h4> {currencyFormatter(balance)}</h4>
      </div>
    </div>
  );
};

export default Navbar;