import Image from 'next/image';
import styles from '../../styles/sessions/CategorySections.module.scss';

const services = [
  { icon: "/assets/service-1.png", title: "Calculated Weather", desc: "Built Wicket longer admire do barton vanity itself do in it." },
  { icon: "/assets/service-2.png", title: "Best Flights", desc: "Engrossed listening. Park gate sell they west hard for the." },
  { icon: "/assets/service-3.png", title: "Local Events", desc: "Barton vanity itself do in it. Preferd to men it engrossed listening." },
  { icon: "/assets/service-4.png", title: "Customization", desc: "We deliver outsourced aviation services for military customers" }
];

export const CategorySection = () => {
  return (
    <section className={styles.categoryWrapper}>
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.subTitle}>CATEGORY</p>
          <h2 className={styles.mainTitle}>We Offer Best Services</h2>
          {/* Top Right */}
          <div className={styles.plusGrid}>
            <Image src="/assets/Group 4.png" alt="" width={150} height={150} />
          </div>
        </div>

        {/* Services Row */}
        <div className={styles.servicesGrid}>
          {services.map((item, index) => (
            <div key={index} className={`${styles.cardWrapper} ${index === 1 ? styles.active : ''}`}>
              
              {index === 1 && <div className={styles.orangeAccent} />}
              
              <div className={styles.card}>
                <div className={styles.iconContainer}>
                  <Image src={item.icon} alt={item.title} width={70} height={70} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};