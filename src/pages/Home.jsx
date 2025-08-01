import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar.jsx';
import '../css/Home.css'; // Ensure this import is present
import ph5 from '../assets/ph5.jpeg';
import ph6 from '../assets/ph6.jpeg';
import ph7 from '../assets/ph7.jpeg';
import ph8 from '../assets/ph8.jpg';
import ph2 from '../assets/ph2.webp';
import { useRef } from 'react';
const rawSlides = [
  { img: ph5, caption: 'Houses' },
  { img: ph6, caption: 'Cars' },
  { img: ph7, caption: 'Electronics' },
  { img: ph8, caption: 'Machineries' },
  { img: ph2, caption: 'Clothes' },
];

const slides = [
  rawSlides[rawSlides.length - 1], // clone last
  ...rawSlides,
  rawSlides[0], // clone first
];

function Home() {
  const [theme, setTheme] = useState('light');
  const [index, setIndex] = useState(1); // start at real first
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef(null);

  const handleTransitionEnd = () => {
    // If we're at the fake first or last, jump without transition
    if (index === 0) {
      setIsTransitioning(false);
      setIndex(slides.length - 2); // last real slide
    } else if (index === slides.length - 1) {
      setIsTransitioning(false);
      setIndex(1); // first real slide
    }
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(true);
      setIndex((prev) => prev + 1);
    }, 3000);
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  return (
    <>
      <NavBar theme={theme} setTheme={setTheme} />

      <div className={`home-container ${theme === 'dark' ? 'dark' : ''}`}>
        <div className="text-section">
          <h1>WHY BUY?</h1>
          <h2>When you can rent everything!</h2>
          <h3>{slides[index].caption}</h3>
          <p>Find the best {slides[index].caption.toLowerCase()} for rent around you.</p>

          {/* Dots */}
          <div className="dots">
            {rawSlides.map((_, i) => (
              <span
                key={i}
                className={`dot ${index - 1 === i ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>

        <div className="slider-section">
          <div
            className="slides-wrapper"
            style={{
              transform: `translateX(-${index * 100}%)`,
              transition: isTransitioning ? 'transform 0.8s ease-in-out' : 'none',
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {slides.map((slide, i) => (
              <div className="slide" key={i}>
                <img src={slide.img} alt={slide.caption} className="slide-image" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;