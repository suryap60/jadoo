import Image from 'next/image';
import styles from './../../styles/sessions/LogoSection.module.scss';

const logos = [
  { src: "/assets/logo-axon.png", alt: "Axon Airlines" },
  { src: "/assets/logo-jetstar.png", alt: "Jetstar" },
  { src: "/assets/logo-expedia.png", alt: "Expedia" },
  { src: "/assets/logo-qantas.png", alt: "Qantas" },
  { src: "/assets/logo-alitalia.png", alt: "Alitalia" }
];

export const LogoSection = () => {
  return (
    <section className={styles.logoWrapper}>
      <div className={styles.container}>
        <div className={styles.logoRow}>
          {logos.map((logo, index) => {
            const isExpedia = index === 2;
            return (
              <div key={index} className={`${styles.logoItem} ${isExpedia ? styles.centerCard : ''}`}>
                <div className={styles.imageBox}>
                  <Image 
                    src={logo.src} 
                    alt={logo.alt} 
                    // Increase these values so the logos can scale larger
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