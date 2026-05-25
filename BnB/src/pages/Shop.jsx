import { useMemo, useState } from 'react'
import { formatInr } from '../utils/helpers'
import Button from '../components/Button/Button'
import coffeemakerImg from '../assets/images/coffeemaker.avif'
import milkfrotherImg from '../assets/images/milkfrother.avif'
import coffeebeansImg from '../assets/images/coffeebeans.avif'
import tumblerImg from '../assets/images/tumblr.avif'
import caramelImg from '../assets/images/caramel.avif'
import instantcoffeeImg from '../assets/images/instantcoffee.avif'
import heroImg from '../assets/images/shop.jpeg'

const products = [
  {
    id: 'coffee-maker',
    name: 'Coffee Maker',
    description: 'Brew barista-style coffee at home with grind and brew controls.',
    price: 9800,
    image: coffeemakerImg,
  },
  {
    id: 'milk-frother',
    name: 'Milk Frother',
    description: 'Create creamy foam for lattes and cappuccinos in minutes.',
    price: 2000,
    image: milkfrotherImg,
  },
  {
    id: 'coffee-beans',
    name: 'Coffee Beans',
    description: 'Premium beans with rich aroma and balanced flavor notes.',
    price: 1500,
    image: coffeebeansImg,
  },
  {
    id: 'tumblers',
    name: 'Steel Tumblers',
    description: 'Durable commuter tumblers for hot or cold drinks on the go.',
    price: 2400,
    image: tumblerImg,
  },
  {
    id: 'caramel-syrup',
    name: 'Caramel Syrup',
    description: 'Sweet caramel syrup ideal for coffee and dessert topping.',
    price: 1200,
    image: caramelImg,
  },
  {
    id: 'instant-coffee',
    name: 'Instant Coffee',
    description: 'Fast and flavorful coffee for quick daily brews.',
    price: 800,
    image: instantcoffeeImg,
  },
]

function Shop() {
  const [cart, setCart] = useState([])
  const [deliveryOption, setDeliveryOption] = useState('pickup')
  const deliveryFee = 100

  const addToCart = (product) => setCart((prev) => [...prev, product])

  const totalAmount = useMemo(
    () => cart.reduce((sum, item) => sum + item.price, 0),
    [cart],
  )

  const totalWithDelivery = deliveryOption === 'delivery' ? totalAmount + deliveryFee : totalAmount

  return (
    <div>
      <section className="hero hero-small" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="hero-overlay" />
        <div className="content-wrap hero-content">
          <h1>Coffee Essentials</h1>
          <p>Handpicked tools and accessories for better home brewing.</p>
        </div>
      </section>

      <section className="content-wrap page-pad">
        <div className="shop-grid">
          {products.map((product) => (
            <article key={product.id} className="menu-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price-tag">{formatInr(product.price)}</p>
              <Button onClick={() => addToCart(product)}>Add to Cart</Button>
            </article>
          ))}
        </div>

        <div className="panel">
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <div key={`${item.id}-${index}`} className="line-item">
                  <span>{item.name}</span>
                  <strong>{formatInr(item.price)}</strong>
                </div>
              ))}
              <div className="delivery-options">
                <label>
                  <input
                    type="radio"
                    name="delivery-option"
                    value="pickup"
                    checked={deliveryOption === 'pickup'}
                    onChange={() => setDeliveryOption('pickup')}
                  />
                  Pickup
                </label>
                <label>
                  <input
                    type="radio"
                    name="delivery-option"
                    value="delivery"
                    checked={deliveryOption === 'delivery'}
                    onChange={() => setDeliveryOption('delivery')}
                  />
                  Delivery ({formatInr(deliveryFee)})
                </label>
              </div>
              <p className="price-tag">Total: {formatInr(totalWithDelivery)}</p>
              <Button onClick={() => alert('Proceeding to checkout!')}>Checkout</Button>
            </>
          )}
        </div>
      </section>
    </div>
  )
}

export default Shop
