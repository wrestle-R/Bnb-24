import { Link } from 'react-router-dom'
import Button from '../components/Button/Button'
import homeImg from '../assets/images/home1.jpg'
import aboutImg from '../assets/images/about.jpeg'
import brewingImg from '../assets/images/brewing.jpeg'
import roastingImg from '../assets/images/roasting.jpeg'
import sourcingImg from '../assets/images/sourcing.jpeg'

function Home() {
  return (
    <div>
      <section className="hero" style={{ backgroundImage: `url(${homeImg})` }}>
        <div className="hero-overlay" />
        <div className="content-wrap hero-content">
          <p className="hero-kicker">ETTARRA COFFEE HOUSE</p>
          <h1>Serving only the best since 2013</h1>
          <Link to="/menu">
            <Button>Explore Menu</Button>
          </Link>
        </div>
      </section>

      <section className="content-wrap split-section">
        <div>
          <h2>Our Coffee Philosophy</h2>
          <p>
            Every cup tells a story crafted from ethically sourced single-origin beans. We partner
            with farmers who focus on quality and sustainable methods, then roast in small batches
            to bring out each origin profile.
          </p>
          <Link to="/about">
            <Button className="mt-2">Read More</Button>
          </Link>
        </div>
        <img src={aboutImg} alt="Coffee beans and cup" className="image-rounded" />
      </section>

      <section className="content-wrap feature-grid-section">
        <h2 className="text-center">Three Steps for the Perfect Brew</h2>
        <div className="feature-grid">
          <article className="feature-card">
            <img src={sourcingImg} alt="Sourcing" />
            <h3>Sourcing</h3>
            <p>We select beans from trusted farms with transparent and sustainable sourcing.</p>
          </article>
          <article className="feature-card">
            <img src={roastingImg} alt="Roasting" />
            <h3>Roasting</h3>
            <p>Small-batch roasting keeps aroma and body balanced for each cup.</p>
          </article>
          <article className="feature-card">
            <img src={brewingImg} alt="Brewing" />
            <h3>Brewing</h3>
            <p>Barista precision with reliable brew ratios gives a rich and clean finish.</p>
          </article>
        </div>
      </section>
    </div>
  )
}

export default Home
