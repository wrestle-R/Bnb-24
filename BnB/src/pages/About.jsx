import brewingImg from '../assets/images/brewing.jpeg'
import roastingImg from '../assets/images/roasting.jpeg'
import sourcingImg from '../assets/images/sourcing.jpeg'

function About() {
  return (
    <section className="content-wrap page-pad">
      <h1>About Ettarra</h1>
      <p className="lead">
        Ettarra is built around coffee, community, and comfortable conversations. Our process is
        intentional from bean selection to final pour.
      </p>

      <div className="about-steps">
        <article>
          <img src={sourcingImg} alt="Bean sourcing" className="image-rounded" />
          <h3>Ethical Sourcing</h3>
          <p>We collaborate with farms that prioritize sustainable cultivation and quality harvests.</p>
        </article>
        <article>
          <img src={roastingImg} alt="Roasting" className="image-rounded" />
          <h3>Thoughtful Roasting</h3>
          <p>Each roast profile is tuned to highlight sweetness, body, and aroma consistency.</p>
        </article>
        <article>
          <img src={brewingImg} alt="Brewing" className="image-rounded" />
          <h3>Precision Brewing</h3>
          <p>Our baristas maintain brewing standards for predictable flavor across every cup.</p>
        </article>
      </div>
    </section>
  )
}

export default About
