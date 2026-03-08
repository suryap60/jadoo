import Image from 'next/image';
import styles from '../../styles/sessions/Footer.module.scss';
import { FaFacebookF, FaTwitter, FaApple, FaPlay } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";



export const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          
          {/* Column 1: Brand */}
          <div className={styles.brandCol}>
            <h2 className={styles.logo}>Jadoo.</h2>
            <p className={styles.tagline}>
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          {/* Column 2: Company */}
          <div className={styles.linkCol}>
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Mobile</li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className={styles.linkCol}>
            <h3>Contact</h3>
            <ul>
              <li>Help/FAQ</li>
              <li>Press</li>
              <li>Affilates</li>
            </ul>
          </div>

          {/* Column 4: More */}
          <div className={styles.linkCol}>
            <h3>More</h3>
            <ul>
              <li>Airlinefees</li>
              <li>Airline</li>
              <li>Low fare tips</li>
            </ul>
          </div>

          {/* Column 5: Social & Apps */}
          <div className={styles.socialCol}>
            <div className={styles.socialIcons}>
              <div className={styles.iconCircle}><FaFacebookF /></div>
              <div className={styles.instagramGradient}><CiInstagram size={20} /></div>
              <div className={styles.iconCircle}><FaTwitter /></div>
            </div>
            
            <p className={styles.discoverText}>Discover our app</p>
            
            <div className={styles.appButtons}>
              {/* Google Play */}
              <button className={styles.storeButton}>
                <div className={styles.iconContainer}><Image src="/assets/play-store.png" alt="" width={24} height={24} /></div>
                <div className={styles.btnText}>
                  <span className={styles.boldTextSmall}>GET IT ON</span>
                  <span className={styles.normalTextLarge}>GOOGLE PLAY</span>
                </div>
              </button>

              {/* Apple Store */}
              <button className={styles.storeButton}>
                <div className={styles.iconContainer}><FaApple className={styles.appleIcon} /></div>
                <div className={styles.btnText}>
                  <span className={styles.normalTextSmall}>Available on the</span>
                  <span className={styles.boldTextLarge}>Apple Store</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className={styles.copyright}>
          All rights reserved@jadoo.co
        </div>
      </div>
    </footer>
  );
};