import React, { useState } from 'react';
import coffeemkerImg from './images/coffeemaker.avif';
import milkfrotherImg from './images/milkfrother.avif';
import coffeebeans from './images/coffeebeans.avif';
import TumblrImg from './images/tumblr.avif';
import caramelsyrumImg from './images/caramel.avif';
import instantcoffeeIMg from './images/instantcoffee.avif';
import shopImg from './images/shop.jpeg';

function Shop() {
  const [cart, setCart] = useState([]);
  const [deliveryOption, setDeliveryOption] = useState('pickup'); // 'pickup' or 'delivery'
  const deliveryFee = 100; // Fixed delivery fee

  // Function to add items to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Array of product data
  const products = [
    {
      id: 1,
      name: 'Coffee Maker',
      description: 'Brew barista-quality coffee at home with customizable strength and a built-in grinder.',
      price: '₹9,800',
      image: coffeemkerImg,
    },
    {
      id: 2,
      name: 'Milk Frother',
      description: 'Create creamy, frothy milk at home with our easy-to-use milk frother—perfect for lattes and cappuccinos!',
      price: '₹2,000',
      image: milkfrotherImg,
    },
    {
      id: 3,
      name: 'Coffee Beans',
      description: 'Savor the rich aroma and flavor of our premium coffee beans, perfect for brewing your favorite cup!',
      price: '₹1,500',
      image: coffeebeans,
    },
    {
      id: 4,
      name: 'Stainless Steel Tumblers',
      description: 'Keep your drinks hot or cold with our sturdy stainless steel commuter cup, perfect for on-the-go!',
      price: '₹2,400',
      image: TumblrImg,
    },
    {
      id: 5,
      name: 'Caramel Syrups',
      description: 'Indulge in rich, smooth caramel syrup—perfect for coffee, desserts, and drizzling on treats!',
      price: '₹1,200',
      image: caramelsyrumImg,
    },
    {
      id: 6,
      name: 'Instant Coffee',
      description: 'Enjoy rich, flavorful coffee in seconds—just add hot water for a quick caffeine fix!',
      price: '₹800',
      image: instantcoffeeIMg,
    },
  ];

  // Calculate the total amount for the cart
  const totalAmount = cart.reduce(
    (total, item) => total + parseInt(item.price.replace(/₹|,/g, ''), 10),
    0
  );

  // Total cost including delivery fee if selected
  const totalWithDelivery = deliveryOption === 'delivery' ? totalAmount + deliveryFee : totalAmount;

  // Checkout button handler
  const handleCheckout = () => {
    alert('Proceeding to checkout!');
    // Here you can implement actual checkout logic such as redirecting to a payment gateway.
  };

  return (
    <div className="bg-black text-white font-sans">
      {/* Header section */}
      <section
        className="relative bg-cover bg-center h-[75vh]"
        style={{ backgroundImage: `url(${shopImg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
          <h1 className="text-5xl font-bold mb-4">Coffee Essentials</h1>
          <p className="text-xl mb-8">Explore our handpicked collection of coffee-making tools and accessories.</p>
          <div>
            <button className="bg-white text-black px-6 py-3 rounded-md mr-4">Shop Now</button>
            <button className="bg-gray-700 text-white px-6 py-3 rounded-md">Learn More</button>
          </div>
        </div>
      </section>

      {/* Coffee Products */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Our Coffee Essentials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="bg-[#290202] p-8 rounded-lg text-center">
              <img src={product.image} alt={product.name} className="mx-auto mb-4 h-40 w-40 object-cover" />
              <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
              <p>{product.description}</p>
              <p className="text-yellow-500 mt-2">{product.price}</p>
              <button
                className="bg-white text-black px-4 py-2 mt-4 rounded"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Cart Section */}
      <section className="bg-[#1e1e1e] py-8">
        <h2 className="text-3xl font-bold text-center mb-6">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-center text-gray-400">Your cart is empty.</p>
        ) : (
          <div className="max-w-4xl mx-auto">
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span>{item.name}</span>
                  <span className="text-yellow-500">{item.price}</span>
                </li>
              ))}
            </ul>

            {/* Delivery Option */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-2">Choose Delivery Option</h3>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="deliveryOption"
                    value="pickup"
                    checked={deliveryOption === 'pickup'}
                    onChange={() => setDeliveryOption('pickup')}
                    className="mr-2"
                  />
                  Pickup in Store
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="deliveryOption"
                    value="delivery"
                    checked={deliveryOption === 'delivery'}
                    onChange={() => setDeliveryOption('delivery')}
                    className="mr-2"
                  />
                  Delivery (₹{deliveryFee})
                </label>
              </div>
            </div>

            {/* Total Amount */}
            <p className="text-right text-xl mt-4">
              Total: <span className="text-yellow-500">₹{totalWithDelivery}</span>
            </p>

            {/* Checkout Button */}
            <div className="text-right mt-6">
              <button
                className="bg-yellow-500 text-black px-6 py-3 rounded-md"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Shop;
