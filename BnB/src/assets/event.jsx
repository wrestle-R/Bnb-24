import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import LivemusicImg from './images/livemusic.jpeg';
import StandupImg from './images/standup.jpeg';
import KaraokeImg from './images/karaoke.jpeg';

const Event = () => {
  return (
    <div className="bg-black text-white ">
      {/* Header Section */}
      <section className="text-center py-9  ">
        <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
        <p className="text-lg">
          Join us at Enkarra Coffee House for exciting events that bring our
          community together! Enjoy laughter-filled stand-up comedy, karaoke
          nights, and live music. 
          <p className="text-lg">Check our schedule below and be part of the fun!</p>
        </p>
      </section>

      {/* Events Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 md:px-20 py-8">
        {/* Live Music Event */}
        <div className="bg-[#290202] rounded-lg overflow-hidden shadow-lg">
          <img
            src={LivemusicImg}
            alt="Live Music"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Live Music</h2>
            <p className="mb-4">
              Join us for an unforgettable evening of live performances and great
              vibes. Don’t miss the music!
            </p>
            <Link
              to={{
                pathname: '/booking', // Your booking route
                state: { eventName: 'Live Music' },
              }}
              className="bg-black text-white font-semibold py-2 px-4 rounded-xl"
              aria-label="Book a table for Live Music"
            >
              Book a table
            </Link>
          </div>
        </div>

        {/* Karaoke Nights Event */}
        <div className="bg-[#290202] rounded-lg overflow-hidden shadow-lg">
          <img
            src={KaraokeImg}
            alt="Karaoke Nights"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Karaoke Nights</h2>
            <p className="mb-4">
              Sing your heart out and enjoy a fun-filled night with friends. Don’t
              miss the chance to shine on stage!
            </p>
            <Link
              to={{
                pathname: '/booking', // Your booking route
                state: { eventName: 'Karaoke Nights' },
              }}
              className="bg-black text-white font-semibold py-2 px-4 rounded-xl"
              aria-label="Book a table for Karaoke Nights"
            >
              Book a table
            </Link>
          </div>
        </div>

        {/* Standup Comedy Event */}
        <div className="bg-[#290202] rounded-lg overflow-hidden shadow-lg">
          <img
            src={StandupImg}
            alt="Standup Comedy"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Standup Comedy</h2>
            <p className="mb-4">
              Laugh out loud with top comedians and great jokes. Don’t miss the fun!
            </p>
            <Link
              to={{
                pathname: '/booking', // Your booking route
                state: { eventName: 'Standup Comedy' },
              }}
              className="bg-black text-white font-semibold py-2 px-4 rounded-xl"
              aria-label="Book a table for Standup Comedy"
            >
              Book a table
            </Link>
          </div>
        </div>
      </section>

      {/* Stay Tuned Section */}
      <section className="bg-[#290202] text-center pb-12 py-10  mt-16  ">
        <h2 className="text-3xl font-bold mb-4">Stay Tuned!</h2>
        <p className="text-lg">
          We're constantly planning more exciting events at Enkarra Coffee House.
          Check back often to see what's coming next!
        </p>
      </section>
    </div>
  );
};

export default Event;
