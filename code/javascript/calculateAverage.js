function calculateAverage(purchases) {
  if (!Array.isArray(purchases) || purchases.length === 0) {
    return null;
  }

  const totalPurchases = purchases.reduce((total, purchase) => total + purchase, 0);
  return totalPurchases / purchases.length;
}

function formatAsCurrency(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(value);
}

const weeklyPurchases = [75.2, 63.8, 104.5, 89.1, 97.3, 82.6, 115.2];

const average = calculateAverage(weeklyPurchases);
const averageFormatted = formatAsCurrency(average);
console.log(averageFormatted);
