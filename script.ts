interface Mountain {
  name: string;
  height: number;
}
let mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

const findNameOfTallestMountain = (anArrayOfMountains: Mountain[]): string => {
  let tallestMountain = anArrayOfMountains[0];
  anArrayOfMountains.forEach((mountain) => {
    if (tallestMountain.height < mountain.height) {
      tallestMountain = mountain;
    }
  });
  return tallestMountain.name;
};

console.log(findNameOfTallestMountain(mountains));

interface Product {
  name: string;
  price: number;
}
let products: Product[] = [
  { name: "Sweater", price: 30 },
  { name: "Pants", price: 35 },
  { name: "Button-Up", price: 27 },
];

const calcAverageProductPrice = (anArrayOfProducts: Product[]) => {
  let total = 0;
  for (let i = 0; i < anArrayOfProducts.length; i++) {
    total += anArrayOfProducts[i].price;
  }
  return total / anArrayOfProducts.length;
};
console.log(calcAverageProductPrice(products));

interface InventoryItem {
  product: Product;
  quantity: number;
}
let inventory: InventoryItem[] = [
  { name: "motor", price: 30, quantity: 10 },
  { name: "sensor", price: 30, quantity: 4 },
  { name: "LED", price: 30, quantity: 20 },
];

const calcInventoryValue = (anArrayOfItem: InventoryItem[]) => {
  let totalValue = 0;
  anArrayOfInventoryItems.forEach((item: InventoryItem[]) => {
    totalValue += item.product.price * item.quantity;
  });
  return totalValue;
};
console.log(calcInventoryValue(inventory));
