import Image from 'next/image';
import styles from '../../styles/sessions/DestinationsSection.module.scss';
import { FaLocationArrow } from "react-icons/fa6";

const destinations = [
  {
    image: "/assets/dest-rome.png", 
    title: "Rome, Italy",
    price: "$5,42k",
    duration: "10 Days Trip",
  },
  {
    image: "/assets/dest-london.png",
    title: "London, UK",
    price: "$4.2k",
    duration: "12 Days Trip",
  },
  {
    image: "/assets/dest-europe.png",
    title: "Full Europe",
    price: "$15k",
    duration: "28 Days Trip",
  }
];

export const DestinationsSection = () => {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <p className={styles.subTitle}>Top Selling</p>
          <h2 className={styles.mainTitle}>Top Destinations</h2>
        </div>

        <div className={styles.destinationsGrid}>
          {destinations.map((dest, index) => (
            <div key={index} className={styles.destCardWrapper}>
              
              {/* Background accent image for the 3rd card */}
              {index === 2 && (
                <div className={styles.swirlAccent}>
                  <img src="/assets/dest-swirl.png" alt="" />
                </div>
              )}

              <div className={styles.card}>
                <div className={styles.cardImageContainer}>
                  {/* object-cover ensures the image fills the top area perfectly */}
                  <Image 
                    src={dest.image} 
                    alt={dest.title} 
                    fill 
                    className={styles.destinationImg}
                  />
                </div>

                <div className={styles.cardContent}>
                  {/* First row: Title and Price on opposite ends */}
                  <div className={styles.infoRow}>
                    <span className={styles.placeName}>{dest.title}</span>
                    <span className={styles.priceTag}>{dest.price}</span>
                  </div>

                  {/* Second row: Non-rotated icon and duration */}
                  <div className={styles.durationRow}>
                    <FaLocationArrow className={styles.arrowIcon} />
                    <span className={styles.durationText}>{dest.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};