"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/sessions/Navbar.module.scss';
import { IoChevronDown, IoMenu, IoClose } from "react-icons/io5"; 

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.navbarWrapper}>
      <nav className={styles.container}>
        
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image src="/assets/logo.png" alt="Jadoo Logo" width={112} height={32} priority />
          </Link>
        </div>

        <div className={styles.mobileMenuIcon} onClick={toggleMenu}>
          {isMenuOpen ? <IoClose /> : <IoMenu />}
        </div>

        <div className={`${styles.navGroup} ${isMenuOpen ? styles.active : ''}`}>
          
          <ul className={styles.navLinks}>
            <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Destinations</Link></li>
            <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Hotels</Link></li>
            <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Flights</Link></li>
            <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Bookings</Link></li>
          </ul>

          <div className={styles.actionsGroup}>
            <Link href="/" className={styles.loginLink} onClick={() => setIsMenuOpen(false)}>
              Login
            </Link>
            <Link href="/" className={styles.signUpButton} onClick={() => setIsMenuOpen(false)}>
              Sign up
            </Link>
            <div className={styles.languageSwitcher}>
              <span>EN</span>
              <IoChevronDown />
            </div>
          </div>
          
        </div>
      </nav>
    </header>
  );
};