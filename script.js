const items = [
  { name: "This was our pact", quantity: 0, dollars: 69, cents: 83 },
  { name: "The famous five", quantity: 0, dollars: 69, cents: 83 },
  { name: "Matilda", quantity: 0, dollars: 69, cents: 83 },
  { name: "Harry Potter", quantity: 0, dollars: 69, cents: 83 },
  { name: "The Young Readers", quantity: 0, dollars: 69, cents: 83 },
  { name: "Diary of a Wimpy Kid", quantity: 0, dollars: 69, cents: 83 }, // Fixed typo
  { name: "Dart Board", quantity: 0, dollars: 69, cents: 83 },
  { name: "Connect four", quantity: 0, dollars: 69, cents: 83 },
  { name: "Jenga", quantity: 0, dollars: 69, cents: 83 },
  { name: "Monopoly", quantity: 0, dollars: 69, cents: 83 },
  { name: "Bookmarks", quantity: 0, dollars: 69, cents: 83 },
  { name: "Birthday Card", quantity: 0, dollars: 69, cents: 83 },
  { name: "Stuffed Toy", quantity: 0, dollars: 69, cents: 83 },
  { name: "Dream Catcher", quantity: 0, dollars: 69, cents: 83 },
];

const cartItems = document.getElementById("cart-items");
const cart = document.getElementById("cart");
const addToCartBtn = document.querySelectorAll(".price button");

function addToCart() {
  const cartValue = items.reduce((total, item) => total + item.quantity, 0);
  cartItems.innerHTML = cartValue;
}

addToCartBtn.forEach((button, i) => {
  button.onclick = () => {
    items[i].quantity++;
    addToCart();
  };
});

function calcPrice() {
  const totalPrice = items.reduce(
    (total, item) => total + item.quantity * (item.dollars * 100 + item.cents),
    0
  );
  return {
    totalDollars: Math.floor(totalPrice / 100),
    totalCents: totalPrice % 100,
  };
}

cart.onclick = () => {
  const { totalDollars, totalCents } = calcPrice();
  items.forEach((item) => {
    if (item.quantity > 0) {
      console.log(`Item: ${item.name} - Quantity: ${item.quantity}`);
    }
  });
  console.log(`Total Amount: ${totalDollars} Dollars ${totalCents} Cents`);
  const WhatsAppWeb = `https://web.whatsapp.com/send?phone=11111111111&text=Order%20details%0A%20Total%20Price:%20${totalDollars}%20${totalCents}c`;
  window.open(WhatsAppWeb, "_blank");
};
