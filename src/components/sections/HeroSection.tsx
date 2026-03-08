import Image from 'next/image';
import styles from '../../styles/sessions/HeroSection.module.scss';
import { FaPlay } from "react-icons/fa"; // Using react-icons for the play button
import { Navbar } from '../layout/Navbar';

export const HeroSection = () => {
  return (
    // relative container to anchor the asymmetrical background shape
    <section className={styles.heroWrapper}>
      <Navbar />
      <div className={styles.bgDecoration}>
        <Image 
          src="/assets/Decore-bg.png" 
          alt="" 
          layout="intrinsic" 
          width={680} 
          height={500} 
          priority
        />
      </div>

      <div className={styles.container}>
        
        {/* Left Side: Text and Buttons */}
        <div className={styles.textColumn}>
          <p className={styles.tagline}>BEST DESTINATIONS AROUND THE WORLD</p>
          
          <h1 className={styles.mainTitle}>
            Travel, <span className={styles.highlightedWrapper}>
              enjoy
              <div className={styles.underlineDecore}>
                <Image src="/assets/Decore.png" alt="" width={485} height={12} />
              </div>
            </span> and live a new and full life
          </h1>
          
          <p className={styles.description}>
            Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
          </p>
          
          <div className={styles.buttonGroup}>
            <button className={styles.findOutMoreBtn}>
              Find out more
            </button>
            <div className={styles.playDemoGroup}>
              <div className={styles.playButtonCircle}>
                <FaPlay className={styles.playIcon} />
              </div>
              <span className={styles.playDemoText}>Play Demo</span>
            </div>
          </div>
        </div>

        {/* Right Side: Triple layered images */}
        <div className={styles.imageColumn}>
          
          {/* Main Traveller Image */}
          <div className={styles.mainImageContainer}>
            <Image 
              src="/assets/Traveller 1.png" // Path to your main image
              alt="Traveller with backpack sitting on suitcase" 
              layout="fill"
              objectFit="contain"
              priority // High priority loading for hero image
            />
          </div>

          {/* RIGHT Plane Image (Large, on top) */}
          <div className={`${styles.planeImage} ${styles.planeRight}`}>
            <Image 
              src="/assets/plane.png" // Path to your plane image
              alt="Airplane icon" 
              width={120} 
              height={120} 
            />
          </div>

          {/* LEFT Plane Image (Smaller, partially behind main image) */}
          <div className={`${styles.planeImage} ${styles.planeLeft}`}>
            <Image 
              src="/assets/plane.png" // Same path to your plane image
              alt="Airplane icon" 
              width={120} 
              height={120} 
            />
          </div>

        </div>

      </div>
    </section>
  );
};