import { useMemo, useState } from 'react'
import { formatInr } from '../utils/helpers'
import Button from '../components/Button/Button'
import latteImg from '../assets/images/latte.jpeg'
import macchiatoImg from '../assets/images/macchiato.jpeg'
import espressoImg from '../assets/images/espresso.jpeg'
import cappuccinoImg from '../assets/images/Cappuccino.jpeg'
import americanoImg from '../assets/images/americano.jpeg'
import frappuccinoImg from '../assets/images/frappacino.jpeg'
import hotChocolateImg from '../assets/images/hotchocolate.jpg'
import affogatoImg from '../assets/images/afogato.jpg'

const drinks = [
  { id: 'espresso', name: 'Espresso', description: 'Pure and intense single shot', price: 150, img: espressoImg },
  { id: 'americano', name: 'Americano', description: 'Strong, simple, and focused', price: 180, img: americanoImg },
  { id: 'latte', name: 'Latte', description: 'Smooth, creamy, and balanced', price: 200, img: latteImg },
  { id: 'macchiato', name: 'Macchiato', description: 'Bold with velvety finish', price: 220, img: macchiatoImg },
  { id: 'cappuccino', name: 'Cappuccino', description: 'Warm and airy texture', price: 210, img: cappuccinoImg },
  { id: 'frappuccino', name: 'Frappuccino', description: 'Cold and indulgent blend', price: 250, img: frappuccinoImg },
  { id: 'affogato', name: 'Affogato', description: 'Espresso over ice cream', price: 250, img: affogatoImg },
  { id: 'hotchocolate', name: 'Hot Chocolate', description: 'Rich and comforting cocoa', price: 250, img: hotChocolateImg },
]

const foods = [
  { id: 'chickenSandwich', name: 'Chicken Sandwich', price: 250 },
  { id: 'specialBurger', name: 'Special Burger', price: 400 },
  { id: 'chickenLasagna', name: 'Chicken Lasagna', price: 350 },
  { id: 'paneerRoll', name: 'Paneer Roll', price: 210 },
  { id: 'chocolateWaffle', name: 'Chocolate Waffle', price: 250 },
  { id: 'carrotCake', name: 'Carrot Cake', price: 250 },
  { id: 'keyLimePie', name: 'Key Lime Pie', price: 250 },
  { id: 'iceCreamSundae', name: 'Ice Cream Sundae', price: 250 },
  { id: 'strawberryPudding', name: 'Strawberry Pudding', price: 250 },
]

function Menu() {
  const [cart, setCart] = useState({})
  const [tableNumber, setTableNumber] = useState('')

  const setQuantity = (id, next) => {
    setCart((prev) => ({ ...prev, [id]: Math.max(0, next) }))
  }

  const totalAmount = useMemo(() => {
    const catalog = [...drinks, ...foods]
    return Object.entries(cart).reduce((sum, [id, qty]) => {
      const item = catalog.find((entry) => entry.id === id)
      return sum + (item ? item.price * qty : 0)
    }, 0)
  }, [cart])

  const handleCheckout = () => {
    if (!tableNumber) {
      alert('Please select your table number.')
      return
    }
    alert(`Checkout successful. Table ${tableNumber}. Total ${formatInr(totalAmount)}.`)
  }

  return (
    <section className="content-wrap page-pad">
      <h1>Sip and Savour</h1>
      <div className="menu-grid">
        {drinks.map((drink) => (
          <article key={drink.id} className="menu-card">
            <img src={drink.img} alt={drink.name} />
            <h3>{drink.name}</h3>
            <p>{drink.description}</p>
            <p className="price-tag">{formatInr(drink.price)}</p>
            <div className="qty-row">
              <button type="button" onClick={() => setQuantity(drink.id, (cart[drink.id] || 0) - 1)}>
                -
              </button>
              <span>{cart[drink.id] || 0}</span>
              <button type="button" onClick={() => setQuantity(drink.id, (cart[drink.id] || 0) + 1)}>
                +
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="food-lists">
        <article className="panel">
          <h2>Food</h2>
          {foods.slice(0, 4).map((item) => (
            <div key={item.id} className="line-item">
              <span>{item.name}</span>
              <strong>{formatInr(item.price)}</strong>
              <div className="qty-row small">
                <button type="button" onClick={() => setQuantity(item.id, (cart[item.id] || 0) - 1)}>
                  -
                </button>
                <span>{cart[item.id] || 0}</span>
                <button type="button" onClick={() => setQuantity(item.id, (cart[item.id] || 0) + 1)}>
                  +
                </button>
              </div>
            </div>
          ))}
        </article>
        <article className="panel">
          <h2>Desserts</h2>
          {foods.slice(4).map((item) => (
            <div key={item.id} className="line-item">
              <span>{item.name}</span>
              <strong>{formatInr(item.price)}</strong>
              <div className="qty-row small">
                <button type="button" onClick={() => setQuantity(item.id, (cart[item.id] || 0) - 1)}>
                  -
                </button>
                <span>{cart[item.id] || 0}</span>
                <button type="button" onClick={() => setQuantity(item.id, (cart[item.id] || 0) + 1)}>
                  +
                </button>
              </div>
            </div>
          ))}
        </article>
      </div>

      <div className="checkout-panel">
        <h3>Total: {formatInr(totalAmount)}</h3>
        <label htmlFor="table-number">Select Table Number</label>
        <select
          id="table-number"
          value={tableNumber}
          onChange={(event) => setTableNumber(event.target.value)}
        >
          <option value="">Select table</option>
          {Array.from({ length: 20 }, (_, index) => index + 1).map((table) => (
            <option key={table} value={table}>
              Table {table}
            </option>
          ))}
        </select>
        <Button onClick={handleCheckout}>Checkout</Button>
      </div>
    </section>
  )
}

export default Menu
