import React, { useState } from 'react';
import latteImg from './images/latte.jpeg';  
import macchiatoImg from './images/macchiato.jpeg';
import espressoImg from './images/espresso.jpeg';
import cappuccinoImg from './images/cappuccino.jpeg';
import americanoImg from './images/americano.jpeg';
import frappuccinoImg from './images/frappacino.jpeg'; 
import hotchocolateImg from './images/hotchocolate.jpg';
import affogatoImg from './images/afogato.jpg';

function Menu() {
  const [cart, setCart] = useState({});
  const [tableNumber, setTableNumber] = useState(''); // State for table number

  const products = [
    { id: 'espresso', name: 'Espresso', description: 'Pure, intense energy in a single shot', price: 150, img: espressoImg },
    { id: 'americano', name: 'Americano', description: 'Simple and strong, bringing focus and clarity', price: 180, img: americanoImg },
    { id: 'latte', name: 'Latte', description: 'Smooth and soothing, for calm.', price: 200, img: latteImg },
    { id: 'macchiato', name: 'Macchiato', description: 'Bold & sophisticated, a drink with intensity', price: 220, img: macchiatoImg },
    { id: 'cappuccino', name: 'Cappuccino', description: 'Cozy & warm like a morning hug', price: 210, img: cappuccinoImg },
    { id: 'frappuccino', name: 'Frappuccino', description: 'Indulgent and playful, a sweet escape', price: 250, img: frappuccinoImg },
    { id: 'affogato', name: 'Affogato', description: 'A rich blend of espresso and ice cream', price: 250, img: affogatoImg },
    { id: 'hotchocolate', name: 'Hot Chocolate', description: 'A cozy cup of rich hot chocolate', price: 250, img: hotchocolateImg },
  ];

  const culinaryComforts = [
    { id: 'chickenSandwich', name: 'Chicken Sandwich', price: 250 },
    { id: 'specialBurger', name: 'Special Burger', price: 400 },
    { id: 'chickenLasagna', name: 'Chicken Lasagna', price: 350 },
    { id: 'paneerRoll', name: 'Paneer Roll', price: 210 },
    { id: 'chocolateWaffle', name: 'Chocolate Waffle', price: 250 },
    { id: 'carrotCake', name: 'Carrot Cake', price: 250 },
    { id: 'keyLimePie', name: 'Key Lime Pie', price: 250 },
    { id: 'iceCreamSundae', name: 'Ice Cream Sundae', price: 250 },
    { id: 'strawberryPudding', name: 'Strawberry Pudding', price: 250 },
  ];

  const updateCart = (id, quantity) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: quantity,
    }));
  };

  const calculateTotalPrice = () => {
    return Object.keys(cart).reduce((total, id) => {
      const product = products.find(product => product.id === id);
      const culinaryItem = culinaryComforts.find(item => item.id === id);
      return total + (cart[id] * (product ? product.price : culinaryItem.price));
    }, 0);
  };

  const handleCheckout = () => {
    if (tableNumber.trim() === '') {
      alert("Please select your table number.");
      return;
    }
    alert(`Checkout successful!\nTable Number: ${tableNumber}\nTotal Price: ₹${calculateTotalPrice()}`);
  };

  const totalAmount = calculateTotalPrice(); // Calculate total amount for cart

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Main Section */}
      <section className="text-center py-12">
        <h2 className="text-5xl font-bold mb-8">Sip & Savour</h2>

        {/* Coffee Menu */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
          {products.map(({ id, name, description, price, img }) => (
            <div key={id} className="flex flex-col items-center">
              <img src={img} alt={name} className="w-60 h-60 object-cover rounded-3xl mb-4" />
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-gray-400">{description}</p>
              <span className="text-lg font-bold text-white">₹{price}</span>

              {/* Quantity Control */}
              <div className="flex items-center mt-2">
                <button
                  className="bg-red-600 text-white px-2 rounded-l"
                  onClick={() => {
                    const currentQuantity = cart[id] || 0;
                    if (currentQuantity > 0) {
                      updateCart(id, currentQuantity - 1);
                    }
                  }}
                >
                  -1
                </button>
                <span className="mx-2">{cart[id] || 0}</span>
                <button
                  className="bg-green-600 text-white px-2 rounded-r"
                  onClick={() => updateCart(id, (cart[id] || 0) + 1)}
                >
                  +1
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Food & Dessert Menu */}
      <section className="py-12 px-6">
        <h2 className="text-5xl font-bold mb-8 text-center">Culinary Comforts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Food Menu */}
          <div className="bg-[#290202] p-6 rounded">
            <h3 className="text-2xl font-bold mb-4">Food</h3>
            <ul className="space-y-3">
              {culinaryComforts.slice(0, 4).map(({ id, name, price }) => (
                <li key={id} className="flex justify-between border-b border-gray-700 pb-2">
                  <span>{name}</span>
                  <span>₹{price}</span>
                  <div className="flex items-center">
                    <button
                      className="bg-red-600 text-white px-2 rounded-l"
                      onClick={() => {
                        const currentQuantity = cart[id] || 0;
                        if (currentQuantity > 0) {
                          updateCart(id, currentQuantity - 1);
                        }
                      }}
                    >
                      -1
                    </button>
                    <span className="mx-2">{cart[id] || 0}</span>
                    <button
                      className="bg-green-600 text-white px-2 rounded-r"
                      onClick={() => updateCart(id, (cart[id] || 0) + 1)}
                    >
                      +1
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Dessert Menu */}
          <div className="bg-[#290202] p-6 rounded">
            <h3 className="text-2xl font-bold mb-4">Desserts</h3>
            <ul className="space-y-3">
              {culinaryComforts.slice(4).map(({ id, name, price }) => (
                <li key={id} className="flex justify-between border-b border-gray-700 pb-2">
                  <span>{name}</span>
                  <span>₹{price}</span>
                  <div className="flex items-center">
                    <button
                      className="bg-red-600 text-white px-2 rounded-l"
                      onClick={() => {
                        const currentQuantity = cart[id] || 0;
                        if (currentQuantity > 0) {
                          updateCart(id, currentQuantity - 1);
                        }
                      }}
                    >
                      -1
                    </button>
                    <span className="mx-2">{cart[id] || 0}</span>
                    <button
                      className="bg-green-600 text-white px-2 rounded-r"
                      onClick={() => updateCart(id, (cart[id] || 0) + 1)}
                    >
                      +1
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Total Amount Display */}
      <section className="py-12 text-center">
        <h3 className="text-2xl font-bold mb-2">Total Amount: ₹{totalAmount}</h3>
      </section>

      {/* Table Number Selection */}
      <section className="py-12 text-center">
        <label htmlFor="tableNumber" className="block text-xl font-bold text-black mb-2">
          Select Table Number:
        </label>
        <select
          id="tableNumber"
          value={tableNumber}
          onChange={(e) => setTableNumber(e.target.value)}
          className="bg-white text-black rounded p-2"
        >
          <option value="">Select Table</option>
          {Array.from({ length: 20 }, (_, index) => (
            <option key={index + 1} value={index + 1}>
              Table {index + 1}
            </option>
          ))}
        </select>
        <button
          onClick={handleCheckout}
          className="bg-green-600 text-white mt-4 px-4 py-2 rounded ml-9"
        >
          Checkout
        </button>
      </section>
    </div>
  );
}

export default Menu;
