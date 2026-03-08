import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/sessions/Navbar.module.scss';
import { IoChevronDown } from "react-icons/io5"; // For the language dropdown

export const Navbar = () => {
  return (
    // Fixed positioning to keep navbar on top of the hero shape
    <header className={styles.navbarWrapper}>
      <nav className={styles.container}>
        
        {/* Logo Section (Left End) */}
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image 
              src="/assets/logo.png" // Path to your Jadoo logo image
              alt="Jadoo Logo" 
              width={112} // Matches the Figma asset width
              height={32} 
              priority // High priority loading
            />
          </Link>
        </div>

        {/* Links and Actions Group (Right End) */}
        <div className={styles.navGroup}>
          
          <ul className={styles.navLinks}>
            <li><Link href="/destinations">Destinations</Link></li>
            <li><Link href="/hotels">Hotels</Link></li>
            <li><Link href="/flights">Flights</Link></li>
            <li><Link href="/bookings">Bookings</Link></li>
          </ul>

          <div className={styles.actionsGroup}>
            <Link href="/login" className={styles.loginLink}>
              Login
            </Link>
            
            <Link href="/signup" className={styles.signUpButton}>
              Sign up
            </Link>

            {/* Language Selection */}
            <div className={styles.languageSwitcher}>
              <span>EN</span>
              <IoChevronDown className={styles.chevronIcon} />
            </div>
          </div>
          
        </div>

      </nav>
    </header>
  );
};