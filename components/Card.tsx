import { useBalanceContext } from "@/Context/BalanceContext";
import { currencyFormatter } from "@/utils/currencyFormatter";
import Image from "next/image";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

type cardPropsType = {
  id: number;
  name: string;
  price: number;
  image_url: string;
};

const Card = (props: cardPropsType) => {
  const balanceContext = useBalanceContext();
  const setBalance = balanceContext.setBalance;
  const { id, name, price, image_url } = props;
  const isActive = price <= balanceContext.balance;
  const router = useRouter();

  const buyItemHandler = () => {
    let timerInterval: number;
    if (isActive) {
      setBalance((prevValue) => prevValue - price);
      Swal.fire({
        title: "Transaksi Berhasil",
        html: `Terima kasih, telah membeli ${name}`,
        timer: 1500,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          // console.log("I was closed by the timer");
        }
      });
    } else {
      Swal.fire({
        title: "Saldo Tidak Cukup",
        text: "Mohon maaf, transaksi Anda tidak dapat diproses pada saat ini karena saldo dalam akun Anda tidak mencukupi untuk melakukan transaksi ini.",
        // showDenyButton: true,
        // showCancelButton: true,
        confirmButtonText: "Tambahkan saldo",
        // denyButtonText: `Don't save`,
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("./addBalance");
          // Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    }
  };
  return (
    <>
      <button
        className={`flex w-52 flex-col items-center justify-center rounded-3xl bg-white p-3 transition ${
          isActive
            ? "cursor-pointer bg-opacity-80 hover:scale-105 hover:bg-opacity-100"
            : "cursor-default bg-opacity-50"
        }`}
        onClick={buyItemHandler}
      >
        <h1 className="text-lg font-semibold">{name}</h1>
        <div className="flex h-24 w-24 items-center justify-center rounded-md bg-transparent">
          <Image
            src={image_url}
            width={96}
            height={96}
            alt={name}
            style={{ objectFit: "cover" }}
            className="rounded-xl"
          />
        </div>
        <h3>{currencyFormatter(price)}</h3>
        {isActive ? (
          <a className="font-semibold text-red-600 underline">Buy Now</a>
        ) : (
          <h4 className="text-sm">Saldo anda tidak cukup</h4>
        )}
      </button>
    </>
  );
};

export default Card;
