import React, { useState } from 'react';

const BookaTable = ({ onClose }) => {
  const [selectedTables, setSelectedTables] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState('Live Music'); // State for selected event
  const [bookingSuccess, setBookingSuccess] = useState(false); // State to track booking success

  // Example array of table availability (1: available, 0: occupied)
  const tables = [
    [1, 0, 1, 0, 1],
    [1, 1, 0, 0, 1],
    [1, 0, 1, 1, 0],
    [1, 1, 1, 0, 1],
  ];

  // Get the price per table based on the event name
  const getTablePrice = () => {
    switch (selectedEvent) {
      case 'Live Music':
      case 'Karaoke Nights':
        return 200; // Price for these events
      case 'Standup Comedy':
        return 100; // Lower price for this event
      default:
        return 10; // Default price
    }
  };

  // Function to toggle table selection
  const toggleTableSelection = (rowIndex, tableIndex) => {
    const tableId = `${rowIndex}-${tableIndex}`;
    if (selectedTables.includes(tableId)) {
      setSelectedTables(selectedTables.filter((id) => id !== tableId));
    } else {
      setSelectedTables([...selectedTables, tableId]);
    }
  };

  // Function to calculate total price based on the number of tables selected
  const calculateTotalPrice = () => {
    const tablePrice = getTablePrice(); // Use event-specific price
    return selectedTables.length * tablePrice;
  };

  // Handle event change
  const handleEventChange = (e) => {
    setSelectedEvent(e.target.value);
  };

  // Handle booking confirmation
  const handleBooking = () => {
    if (selectedTables.length === 0) {
      alert("Please select at least one table to book."); // Alert if no tables are selected
      return;
    }

    // Simulate booking process
    setBookingSuccess(true);
    // Optionally, you can also reset the selected tables after booking
    setSelectedTables([]);
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-6">
      <h2 className="text-4xl font-bold mb-6 text-center">Book Your Table for {selectedEvent}</h2>

      {/* Event Selection */}
      <div className="mb-8 w-full max-w-md">
        <label htmlFor="event" className="block text-lg mb-2">
          Choose an event
        </label>
        <select
          id="event"
          className="bg-gray-800 text-white py-2 px-4 rounded w-full"
          value={selectedEvent}
          onChange={handleEventChange} // Update event on change
        >
          <option value="Live Music">Live Music</option>
          <option value="Karaoke Nights">Karaoke Nights</option>
          <option value="Standup Comedy">Standup Comedy</option>
        </select>
      </div>

      {/* Table Layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8 w-full max-w-5xl">
        {tables.map((row, rowIndex) =>
          row.map((table, tableIndex) => {
            const tableId = `${rowIndex}-${tableIndex}`;
            const isOccupied = table === 0;
            const isSelected = selectedTables.includes(tableId);

            return (
              <div key={tableId} className={`border-2 rounded-lg transition-transform duration-300 
                ${isOccupied ? 'bg-gray-600' : isSelected ? 'bg-blue-500' : 'bg-green-500'}`}>
                <button
                  className={`w-full h-full flex flex-col items-center justify-center p-4 text-sm font-semibold text-white rounded-lg 
                  ${isOccupied ? 'cursor-not-allowed' : ''}`}
                  onClick={() => !isOccupied && toggleTableSelection(rowIndex, tableIndex)}
                  disabled={isOccupied}
                >
                  <span>{isOccupied ? 'Occupied' : isSelected ? 'Selected' : 'Available'}</span>
                  <span className="mt-2">{isOccupied ? '' : 'Table ' + (tableIndex + 1)}</span>
                </button>
              </div>
            );
          })
        )}
      </div>

      {/* Total Section */}
      <div className="text-lg text-center mb-6">
        <p className="mb-2">
          You have selected <span className="font-bold">{selectedTables.length}</span> table(s)
        </p>
        <p className="font-bold">Total Price: ₹{calculateTotalPrice()}</p>
      </div>

      {/* Booking Button */}
      <button
        className="bg-green-500 text-white py-3 px-8 rounded hover:bg-green-600 transition mb-4"
        onClick={handleBooking}
      >
        Book Table
      </button>

      {/* Success Message */}
      {bookingSuccess && (
        <div className="bg-green-600 text-white p-4 rounded mb-6">
          <p>Your table(s) have been successfully booked! </p>
          <p>A Payment gateway will open shortly </p>
          
        </div>
      )}

      {/* Close Booking Button */}
      <button
        className="bg-[#290202] text-white py-3 px-8 rounded hover:bg-[#3a0d0d] transition"
        onClick={onClose}
      >
        Close Booking
      </button>
    </div>
  );
};

export default BookaTable;
