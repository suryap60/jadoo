"use client"; // REQUIRED for useState to work

import { useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/sessions/TestimonialsSection.module.scss';
import { IoChevronUp, IoChevronDown } from "react-icons/io5";

const reviews = [
  {
    avatar: "/assets/avatar.png", 
    description: "\"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.\"",
    name: "Mike Taylor",
    location: "Lahore, Pakistan",
  },
  {
    avatar: "/assets/avatar.png", 
    description: "\"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.\"",
    name: "Chris Thomas",
    position: "CEO of Red Button", 
    location: "karachi, Pakistan",
  },
    {
    avatar: "/assets/avatar.png", 
    description: "\"I was impressed by the level of detail and the professionalism of the team. The whole process was seamless and efficient from start to finish.\"",
    name: "John Doe",
    position: "Co-Founder, Red Button", 
    location: "Islamabad, Pakistan",
  }
];

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const currentReview = reviews[activeIndex];
  // Calculate the index for the card sitting behind
  const behindIndex = (activeIndex + 1) % reviews.length;
  const behindReview = reviews[behindIndex];

  return (
    <section className={styles.testimonialWrapper}>
      <div className={styles.container}>
        
        {/* Left Side */}
        <div className={styles.textColumn}>
          <p className={styles.subTitle}>TESTIMONIALS</p>
          <h2 className={styles.mainTitle}>What People Say<br />About Us.</h2>
          <div className={styles.slidingDots}>
            {reviews.map((_, i) => (
              <div key={i} className={`${styles.dot} ${activeIndex === i ? styles.active : ""}`} />
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className={styles.cardsColumn}>
          <div className={styles.cardStack}>
            
            {/* Main Card */}
            <div className={styles.mainReviewCard}>
              <div className={styles.avatarContainer}>
                <Image src={currentReview.avatar} alt={currentReview.name} width={70} height={70} />
              </div>
              <div className={styles.cardBody}>
                <p className={styles.reviewText}>{currentReview.description}</p>
                <div className={styles.authorMeta}>
                  <h3>{currentReview.name}</h3>
                  <p>{currentReview.location}</p>
                </div>
              </div>
            </div>

            {/* Background Card - Peeking out from Bottom Right */}
            <div className={styles.backgroundReviewCard}>
              <div className={styles.authorMeta}>
                <h3>{behindReview.name}</h3>
                <p>{behindReview.position || behindReview.location}</p>
              </div>
            </div>

          </div>

          <div className={styles.arrowControls}>
            <button onClick={handlePrev} className={styles.arrowButton}><IoChevronUp /></button>
            <button onClick={handleNext} className={styles.arrowButton}><IoChevronDown /></button>
          </div>
        </div>

      </div>
    </section>
  );
};