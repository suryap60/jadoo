import Image from 'next/image';
import styles from './../../styles/sessions/LogoSection.module.scss';

// Data for the logos in order from left to right
const logos = [
  { src: "/assets/logo-axon.png", alt: "Axon Airlines" },
  { src: "/assets/logo-jetstar.png", alt: "Jetstar" },
  { src: "/assets/logo-expedia.png", alt: "Expedia" }, // Index 2: The Highlighted One
  { src: "/assets/logo-qantas.png", alt: "Qantas" },
  { src: "/assets/logo-alitalia.png", alt: "Alitalia" }
];

export const LogoSection = () => {
  return (
    // relative container allows absolute positioning of the decorative background
    <section className={styles.logoWrapper}>
      <div className={styles.container}>
        
        {/* Simple Flex row to arrange all logos in a line */}
        <div className={styles.logoRow}>
          {logos.map((logo, index) => {
            
            // Apply special styling only to the middle 'Expedia' logo
            const isExpedia = index === 2;

            return (
              <div key={index} className={`${styles.logoItem} ${isExpedia ? styles.centerCard : ''}`}>
                <Image 
                  src={logo.src} 
                  alt={logo.alt} 
                  width={200} // Set fixed widths for pixel-perfect alignment
                  height={50} 
                  className={styles.logoImage} 
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};