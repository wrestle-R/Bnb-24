import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="content-wrap page-pad">
      <h1>Page Not Found</h1>
      <p>The page you requested does not exist.</p>
      <Link to="/" className="inline-link-btn">
        Back Home
      </Link>
    </section>
  )
}

export default NotFound
