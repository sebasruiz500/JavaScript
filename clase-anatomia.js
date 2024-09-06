const originaPrice = 100;
const discountPercentage = 20;
const finalPrice = calculateDiscountedPrice(originaPrice, discountPercentage);

function calculateDiscountedPrice (price, discountPercentage) {
    const discount = (price*discountPercentage)/100;
    const priceWithDiscount = price - discount;
    
    return priceWithDiscount;
}

console.log("Original Pirce $" + originaPrice);
console.log("Discount: " + discountPercentage + "%");
console.log("Pricw with discount: $ " + finalPrice);