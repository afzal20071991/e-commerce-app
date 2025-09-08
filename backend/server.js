// Import required libraries
const express = require("express");  // Express ek lightweight Node.js framework hai jo API banane ke liye use hota hai
const cors = require("cors");        // cors allow karta hai ki frontend(Angular) backend se data le sake

// Express app initialize karna
const app = express();
app.use(cors()); // middleware - cors ko enable kar raha hai taki frontend aur backend connect ho sake

// Dummy product data create kiya
const productsData = [
  { name: "Wireless Mouse", image: "mouse.png" },
  { name: "Gaming Keyboard", image: "keyboard.png" },
  { name: "Bluetooth Speaker", image: "speaker.png" },
  { name: "Smart Watch", image: "watch.png" },
  { name: "Coffee Mug", image: "mug.png" },
  { name: "Backpack", image: "backpack.png" },
  { name: "Headphones", image: "headphones.png" },
  { name: "Water Bottle", image: "bottle.png" },
  { name: "Desk Lamp", image: "lamp.png" },
  { name: "Power Bank", image: "powerbank.png" }
];

// Random product generate karne ka function
function getRandomProduct(id) {
  // Math.random() * productsData.length → ek random index pick karega
  const random = productsData[Math.floor(Math.random() * productsData.length)];
  
  // Ek product object return karega with id, name, price, currency, image
  return {
    id,                                 // Unique product id
    name: random.name,                  // Randomly selected product ka name
    price: (Math.random() * 100).toFixed(2), // Price generate karega (0 se 100 ke beech)
    currency: "USD",                    // Currency fixed rakha USD
    image: random.image                 // Image filename (sirf naam, path frontend handle karega)
  };
}

// API route banaya - "/products"
// Jab frontend GET request karega, yeh API 10 random products return karega
app.get("/products", (req, res) => {
  const products = [];
  for (let i = 1; i <= 10; i++) {         // 10 products banane ke liye loop
    products.push(getRandomProduct(i));   // Har iteration me ek random product add hoga
  }
  res.json(products); // Response JSON format me bheja
});

// Server ko port 3000 pe run kiya
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}/products`);
});
