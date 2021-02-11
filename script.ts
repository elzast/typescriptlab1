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
  let tallestMountain: Mountain = anArrayOfMountains[0];
  anArrayOfMountains.forEach((mountain) => {
    if (tallestMountain.height < mountain.height) {
      tallestMountain = mountain;
    }
  });
  return tallestMountain.name;
};
/*
==== for loop option in class repo==
====for of in class repo====
*/
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
  if (anArrayOfProducts.length === 0) {
    return 0;
  }
  let total: number = 0;
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
  { product: { name: "motor", price: 30 }, quantity: 10 },
  { product: { name: "sensor", price: 30 }, quantity: 4 },
  { product: { name: "LED", price: 30 }, quantity: 20 },
];

const calcInventoryValue = (
  anArrayOfInventoryItems: InventoryItem[]
): number => {
  let totalValue = 0;
  anArrayOfInventoryItems.forEach((item) => {
    totalValue += item.product.price * item.quantity;
  });
  return totalValue;
};
console.log(calcInventoryValue(inventory));
