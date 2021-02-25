export async function getStock() {
  const response = await fetch("./data/products.json");
  const stock = await response.json();
  return stock;
}
