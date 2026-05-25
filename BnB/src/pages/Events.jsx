import { Link } from 'react-router-dom'
import liveMusicImg from '../assets/images/livemusic.jpeg'
import standupImg from '../assets/images/standup.jpeg'
import karaokeImg from '../assets/images/karaoke.jpeg'

const events = [
  {
    name: 'Live Music',
    image: liveMusicImg,
    description: 'Enjoy an evening of acoustic sets, jazz sessions, and coffee specials.',
  },
  {
    name: 'Karaoke Nights',
    image: karaokeImg,
    description: 'Bring your friends and sing your favorites in a warm cafe setting.',
  },
  {
    name: 'Standup Comedy',
    image: standupImg,
    description: 'Laugh out loud with curated standup acts and late-evening brews.',
  },
]

function Events() {
  return (
    <section className="content-wrap page-pad">
      <h1>Upcoming Events</h1>
      <p className="lead">Join us for live entertainment and community nights.</p>
      <div className="feature-grid">
        {events.map((event) => (
          <article key={event.name} className="feature-card">
            <img src={event.image} alt={event.name} />
            <h3>{event.name}</h3>
            <p>{event.description}</p>
            <Link to="/booking" state={{ eventName: event.name }} className="inline-link-btn">
              Book a table
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Events
