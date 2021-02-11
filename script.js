"use strict";
let mountains = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 },
];
const findNameOfTallestMountain = (anArrayOfMountains) => {
    let tallestMountain = anArrayOfMountains[0];
    anArrayOfMountains.forEach((mountain) => {
        if (tallestMountain.height < mountain.height) {
            tallestMountain = mountain;
        }
    });
    return tallestMountain.name;
};
console.log(findNameOfTallestMountain(mountains));
let products = [
    { name: "Sweater", price: 30 },
    { name: "Pants", price: 35 },
    { name: "Button-Up", price: 27 },
];
const calcAverageProductPrice = (anArrayOfProducts) => {
    let total = 0;
    for (let i = 0; i < anArrayOfProducts.length; i++) {
        total += anArrayOfProducts[i].price;
    }
    return total / anArrayOfProducts.length;
};
console.log(calcAverageProductPrice(products));
let inventory = [
    { name: "motor", price: 30, quantity: 10 },
    { name: "sensor", price: 30, quantity: 4 },
    { name: "LED", price: 30, quantity: 20 },
];
const calcInventoryValue = (anArrayOfItem) => {
    let totalValue = 0;
    anArrayOfInventoryItems.forEach((item) => {
        totalValue += item.product.price * item.quantity;
    });
    return totalValue;
};
console.log(calcInventoryValue(inventory));
