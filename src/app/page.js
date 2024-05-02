'use client'

// Import the CSS module
import styles from "./page.module.css";

// Import React and necessary components
import { FaSignal } from "react-icons/fa";
import { MdSignalWifi3Bar } from "react-icons/md";
import { FaBatteryFull } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import RatingStars from './components/RatingStars';
import { useState } from 'react';
import { BiDislike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";


export default function Home() {
  // State for managing rating
  const [rating, setRating] = useState(0);

  // Handler function for rating change
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  
  return (
    <main className={styles.main}> 
      <div className={styles.mobileView}>
        <div className={styles.headerContainer}>
          <p className={styles.timeStyle}>9:41</p>
          <div className={styles.headerIcons}> 
            <p><FaSignal/></p>
            <p className={styles.networkIcon}><MdSignalWifi3Bar /></p>
            <p><FaBatteryFull /></p>
          </div>
        </div>
        <div className={styles.headerContainer}>
          <p><ImCross/></p>
          <div></div>
        </div>
        <div className={styles.headerContainer}>
          <p className={styles.titleStyle}>Leave a review</p>
          <div></div>
        </div>
        <div className={styles.headerContainers}>
          <p className={styles.textStyle}>safety</p>
          <div></div>
        </div>
        <p className={styles.reviewText}>Lorem ipsum dolor sit amet consectetur.</p>
        <div className={styles.ratingContainer}>
          {/* Use the RatingStars component */}
          <RatingStars value={rating} onChange={handleRatingChange}/>
          <div></div>
        </div>

        <div className={styles.headerContainers}>
          <p className={styles.textStyle}>communication</p>
          <div></div>
        </div>
        <p className={styles.reviewText}>Lorem ipsum dolor sit amet consectetur.</p>
        <div className={styles.ratingContainer}>
          {/* Use the RatingStars component */}
          <RatingStars value={rating} onChange={handleRatingChange}/>
          <div></div>
        </div>

        <div className={styles.headerContainers}>
          <p className={styles.textStyle}>Would you recommend Trausti?</p>
          <div></div>
        </div>
        <p className={styles.reviewText}>Lorem ipsum dolor sit amet consectetur.</p>
        <div className={styles.headerContainer}>
          {/* Use the RatingStars component */}
          <div className={styles.likeContainer}>
            <div className={styles.likes}>
            <BiDislike size={50}/>
            <p>No</p>
            </div>
            <div className={styles.likes}>
            <BiSolidLike size={50} color="green"/>
            <p>Yes</p>
            </div>
          </div>
          <div></div>
        </div>

        <div className={styles.headerContainers}>
          <p className={styles.textStyle}>Praise</p>
          <div></div>
        </div>
        <p className={styles.reviewText}>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
    </main>
  );
}
