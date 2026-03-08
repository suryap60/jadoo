'use client';
import Image from 'next/image';
import styles from './../../styles/sessions/SubscriptionSection.module.scss';
import { IoMailOutline, IoPaperPlaneSharp } from "react-icons/io5";

export const SubscriptionSection = () => {
  return (
    <section className={styles.subscriptionWrapper}>
      <div className={styles.container}>
        <div className={styles.behindRing} />
        
        <div className={styles.gridDecor} /> 
        <div className={styles.cardContainer}>
          
          <div className={styles.cardContent}>
            <h2 className={styles.descriptionText}>
              Subscribe to get information, latest news and other interesting offers about Jadoo
            </h2>
            
            <form className={styles.inputGroup} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.inputWrapper}>
                <IoMailOutline className={styles.emailIcon} />
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className={styles.emailInput} 
                />
              </div>
              <button type="submit" className={styles.subscribeButton}>
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className={styles.floatingArrowWrapper}>
          <IoPaperPlaneSharp className={styles.floatingArrow} />
        </div>
        
      </div>
    </section>
  );
};