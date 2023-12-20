import { useBalanceContext } from "@/Context/BalanceContext";
import { currencyFormatter } from "@/utils/currencyFormatter";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

type ButtonBalancePropsType = {
  topup: number;
};

const ButtonBalance = (props: ButtonBalancePropsType) => {
  const router = useRouter();
  const balanceContext = useBalanceContext();
  const setBalance = balanceContext.setBalance;
  const addHandler = (topup: number) => {
    let timerInterval: number;
    setBalance((prevBalance) => prevBalance + topup);
    Swal.fire({
      title: "Berhasil menambahkan saldo",
      text: `Berhasil menambahkan  ${currencyFormatter(topup)} ke dalam dompet`,
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: "Continue Top Up",
      denyButtonText: `Back To Home`,
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        router.push("./");
        // Swal.fire("Changes are not saved", "", "info");
      }
    });
    // Swal.fire({
    //   title: "Berhasil menambahkan saldo",
    //   html: `Berhasil menambahkan  ${currencyFormatter(topup)} ke dalam dompet`,
    //   timer: 1500,
    //   timerProgressBar: true,
    //   didOpen: () => {
    //     Swal.showLoading();
    //   },
    //   willClose: () => {
    //     clearInterval(timerInterval);
    //   },
    // }).then((result) => {
    //   if (result.dismiss === Swal.DismissReason.timer) {
    //     // console.log("I was closed by the timer");
    //   }
    // });
  };

  return (
    <button
      className="m-3 rounded-2xl bg-slate-800 px-4 py-3 text-white transition hover:scale-105 hover:bg-slate-200 hover:font-semibold hover:text-slate-800"
      onClick={() => addHandler(props.topup)}
    >
      {currencyFormatter(props.topup)}
    </button>
  );
};

export default ButtonBalance;
