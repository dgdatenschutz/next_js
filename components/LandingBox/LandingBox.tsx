import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './LandingBox.module.scss';

type BlockProps = {
  blockCode: string;
  blockDescription: string;
  imageUrl: string;
  imageAlt: string;
  delay: number; 
};

const Block: React.FC<BlockProps> = ({ blockCode, blockDescription, imageUrl, imageAlt, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`${styles.main} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.icon}>
        <Image src={imageUrl} alt={imageAlt} width={40} height={40} className="responsive" />
      </div>
      <div className={styles.separator} />
      <div className={styles.content}>
        <h4>{blockCode}</h4>
        <p>{blockDescription}</p>
      </div>
    </div>
  );
};

export default Block;
