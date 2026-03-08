import Image from 'next/image';
import styles from '../../styles/sessions/BookSection.module.scss';
import { IoLocationOutline, IoLeafOutline } from "react-icons/io5";
import { FaPaperPlane } from "react-icons/fa6";
import { AiOutlineHeart } from "react-icons/ai";
import { PiBuildingOfficeThin } from "react-icons/pi";

const bookingSteps = [
  {
    icon: "/assets/step-icon-1.png", 
    title: "Choose Destination",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
  },
  {
    icon: "/assets/step-icon-2.png", 
    title: "Make Payment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
  },
  {
    icon: "/assets/step-icon-3.png",
    title: "Reach Airport on Selected Date",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
  }
];

export const BookSection = () => {
  return (
    <section className={styles.bookWrapper}>
      <div className={styles.container}>
        
        {/* Left Side */}
        <div className={styles.stepsColumn}>
          <p className={styles.subTitle}>Easy and Fast</p>
          <h2 className={styles.mainTitle}>Book Your Next Trip<br />In 3 Easy Steps</h2>
          
          <div className={styles.stepsList}>
            {bookingSteps.map((step, index) => (
              <div key={index} className={styles.stepItem}>
                <div className={styles.iconBox}>
                  <Image src={step.icon} alt="" width={50} height={50} />
                </div>
                <div className={styles.textBox}>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side*/}
        <div className={styles.cardsColumn}>
          
          {/* Main Card  */}
          <div className={styles.mainTripCard}>
            <div className={styles.imageContainer}>
              <Image src="/assets/trip-greece.png" alt="Greece" width={320} height={180} />
            </div>
            <div className={styles.cardInfo}>
              <h3>Trip To Greece</h3>
              <p>14-29 June | by Robbin joseph</p>
              
              <div className={styles.iconRow}>
                <div className={styles.circleIcon}><IoLeafOutline /></div>
                <div className={styles.circleIcon}><IoLocationOutline /></div>
                <div className={styles.circleIcon}><FaPaperPlane /></div>
              </div>
              
              <div className={styles.footerRow}>
                <div className={styles.goingCount}>
                  <PiBuildingOfficeThin />
                  <span>24 people going</span>
                </div>
                <AiOutlineHeart className={styles.heartIcon} />
              </div>
            </div>
          </div>

          {/* Overlapping Card */}
          <div className={styles.overlappingRomeCard}>
            <div className={styles.avatarContainer}>
              <Image src="/assets/avatar-rome.png" alt="" width={50} height={50} />
            </div>
            <div className={styles.romeInfo}>
              <p className={styles.status}>Ongoing</p>
              <h4>Trip to rome</h4>
              <p className={styles.completion}>
                <span className={styles.percent}>40%</span> completed
              </p>
              {/* Custom Progress Bar */}
              <div className={styles.progressBarWrapper}>
                <div className={styles.progressBarFill} style={{width: '40%'}} />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};