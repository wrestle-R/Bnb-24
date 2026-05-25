import { useState } from 'react'
import Button from '../components/Button/Button'
import { submitContactForm } from '../services/api'
import contactImg from '../assets/images/contactus.jpg'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'

function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const payload = Object.fromEntries(formData.entries())
    await submitContactForm(payload)
    setStatus('Thanks for reaching out. We will get back to you shortly.')
    event.currentTarget.reset()
  }

  return (
    <div>
      <section className="hero hero-small" style={{ backgroundImage: `url(${contactImg})` }}>
        <div className="hero-overlay" />
        <div className="content-wrap hero-content">
          <h1>Contact Us</h1>
          <p>Questions about menu, events, or bookings? We are here to help.</p>
        </div>
      </section>

      <section className="content-wrap page-pad contact-layout">
        <Card className="panel">
          <CardContent className="p-0">
            <h2>Reach Us</h2>
            <p>Phone: 086558 05815</p>
            <p>Email: care@ettarracoffee.in</p>
            <p>Address: Ground floor, Juhu Residency, Mumbai 400049</p>
            <a href="http://zoma.to/r/20468935" target="_blank" rel="noreferrer">
              Visit our Zomato page
            </a>
            <iframe
              title="Google Map"
              className="contact-map"
              src="https://maps.google.com/maps?q=19.101360749184686,72.8273981168701&t=&z=13&ie=UTF8&iwloc=&output=embed"
            />
          </CardContent>
        </Card>

        <Card className="panel">
          <CardContent className="p-0">
            <form className="form-grid" onSubmit={handleSubmit}>
              <h2>Get In Touch</h2>
              <Input name="name" type="text" placeholder="Your Name" required />
              <Input name="email" type="email" placeholder="Your Email" required />
              <Input name="subject" type="text" placeholder="Subject" required />
              <Textarea name="message" rows={5} placeholder="Your Message" required />
              <Button type="submit">Send Message</Button>
              {status && <p className="notice">{status}</p>}
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

export default Contact
