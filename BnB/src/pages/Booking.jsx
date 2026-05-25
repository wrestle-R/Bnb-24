import { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Button from '../components/Button/Button'
import { submitBookingRequest } from '../services/api'
import { formatInr } from '../utils/helpers'

const TABLES = [
  [1, 0, 1, 0, 1],
  [1, 1, 0, 0, 1],
  [1, 0, 1, 1, 0],
  [1, 1, 1, 0, 1],
]

const EVENT_PRICING = {
  'Live Music': 200,
  'Karaoke Nights': 200,
  'Standup Comedy': 100,
}

function Booking() {
  const location = useLocation()
  const [selectedEvent, setSelectedEvent] = useState(location.state?.eventName || 'Live Music')
  const [selectedTables, setSelectedTables] = useState([])
  const [notice, setNotice] = useState('')

  const pricePerTable = EVENT_PRICING[selectedEvent] || 100
  const totalPrice = useMemo(() => selectedTables.length * pricePerTable, [selectedTables, pricePerTable])

  const toggleTable = (tableId) => {
    setSelectedTables((prev) =>
      prev.includes(tableId) ? prev.filter((id) => id !== tableId) : [...prev, tableId],
    )
  }

  const handleBooking = async () => {
    if (selectedTables.length === 0) {
      setNotice('Please select at least one table.')
      return
    }

    await submitBookingRequest({ event: selectedEvent, tables: selectedTables })
    setNotice('Booking successful. Payment gateway will open shortly.')
    setSelectedTables([])
  }

  return (
    <section className="content-wrap page-pad">
      <h1>Book Your Table</h1>
      <p className="lead">Choose an event and reserve tables instantly.</p>

      <label htmlFor="event-select">Choose an event</label>
      <select
        id="event-select"
        value={selectedEvent}
        onChange={(event) => setSelectedEvent(event.target.value)}
      >
        {Object.keys(EVENT_PRICING).map((eventName) => (
          <option key={eventName} value={eventName}>
            {eventName}
          </option>
        ))}
      </select>

      <div className="table-grid">
        {TABLES.map((row, rowIndex) =>
          row.map((table, tableIndex) => {
            const tableId = `${rowIndex}-${tableIndex}`
            const occupied = table === 0
            const selected = selectedTables.includes(tableId)
            return (
              <button
                type="button"
                key={tableId}
                className={`table-cell ${occupied ? 'occupied' : selected ? 'selected' : 'available'}`}
                onClick={() => !occupied && toggleTable(tableId)}
                disabled={occupied}
              >
                {occupied ? 'Occupied' : selected ? 'Selected' : `Table ${tableIndex + 1}`}
              </button>
            )
          }),
        )}
      </div>

      <p>
        Selected: <strong>{selectedTables.length}</strong> table(s)
      </p>
      <p>
        Total: <strong>{formatInr(totalPrice)}</strong>
      </p>

      <Button onClick={handleBooking}>Book Table</Button>
      {notice && <p className="notice">{notice}</p>}
    </section>
  )
}

export default Booking
