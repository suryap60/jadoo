"use client";

import { useState } from 'react';
import Image from 'next/image';
import { IoChevronBack, IoChevronForward } from "react-icons/io5"; // Arrow icons
import styles from './../../styles/sessions/LogoSection.module.scss';

const logos = [
  { src: "/assets/logo-axon.png", alt: "Axon Airlines" },
  { src: "/assets/logo-jetstar.png", alt: "Jetstar" },
  { src: "/assets/logo-expedia.png", alt: "Expedia" },
  { src: "/assets/logo-qantas.png", alt: "Qantas" },
  { src: "/assets/logo-alitalia.png", alt: "Alitalia" }
];

export const LogoSection = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Start with Expedia active

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % logos.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + logos.length) % logos.length);
  };

  return (
    <section className={styles.logoWrapper}>
      <div className={styles.container}>
        
        {/* Navigation Arrows - Visible only on Mobile */}
        <div className={styles.mobileControls}>
          <button onClick={handlePrev} className={styles.arrowButton}><IoChevronBack /></button>
          <button onClick={handleNext} className={styles.arrowButton}><IoChevronForward /></button>
        </div>

        <div className={styles.logoRow}>
          {logos.map((logo, index) => {
            const isActive = index === activeIndex;
            return (
              <div 
                key={index} 
                className={`${styles.logoItem} ${isActive ? styles.centerCard : ''} ${index !== activeIndex ? styles.hideOnMobile : ''}`}
              >
                <div className={styles.imageBox}>
                  <Image 
                    src={logo.src} 
                    alt={logo.alt} 
                    width={240} 
                    height={100} 
                    className={styles.logoImage} 
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};