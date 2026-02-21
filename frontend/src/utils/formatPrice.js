 // src/utils/formatPrice.js

export default function formatPrice(price) {

  if (!price && price !== 0) return "";

  return new Intl.NumberFormat("en-US", {

    style: "currency",

    currency: "USD",

    maximumFractionDigits: 0,

  }).format(price);

}