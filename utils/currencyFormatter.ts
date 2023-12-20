export const currencyFormatter = (price: number) => {
  let RupiahID = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  return RupiahID.format(price);
};
