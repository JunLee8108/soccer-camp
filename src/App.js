import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./App.css";

function App() {
  const [isImageLoaded, setIsImageLoaded] = useState(false); // 이미지 로드 상태 관리

  // For Why Our Soccer Camp Section
  const controlsWhyJoin = useAnimation();
  const [refWhyJoin, inViewWhyJoin] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  React.useEffect(() => {
    if (inViewWhyJoin) {
      controlsWhyJoin.start("visible");
    }
  }, [controlsWhyJoin, inViewWhyJoin]);

  // For Camp Schedule Section
  const controlsSchedule = useAnimation();
  const [refSchedule, inViewSchedule] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  React.useEffect(() => {
    if (inViewSchedule) {
      controlsSchedule.start("visible");
    }
  }, [controlsSchedule, inViewSchedule]);

  // For Pricing Section
  const controlsPricing = useAnimation();
  const [refPricing, inViewPricing] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  React.useEffect(() => {
    if (inViewPricing) {
      controlsPricing.start("visible");
    }
  }, [controlsPricing, inViewPricing]);

  // For Image Loading
  const overlayVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  // Variants for Sections
  const cardVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const scheduleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const pricingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  return (
    <div className="app">
      <header className="header">
        <img
          src="imgs/home-bg.webp"
          alt="Background"
          className="background-image"
          onLoad={handleImageLoad}
        />
        {isImageLoaded && (
          <motion.div
            className="overlay"
            initial="hidden"
            animate="visible"
            variants={overlayVariants}
          >
            <h1>Austin Soccer Camp </h1>
            <p>Your path to becoming the next soccer star starts here!</p>
            <a href="#register" className="cta-button">
              Join Now
            </a>
          </motion.div>
        )}
      </header>

      {/* Why Our Soccer Camp Section */}
      <section className="about-section" id="why-join" ref={refWhyJoin}>
        <h2>Why Our Soccer Camp?</h2>

        <motion.div
          className="card-container"
          variants={cardVariants}
          initial="hidden"
          animate={controlsWhyJoin}
        >
          <motion.div className="card" variants={cardVariants}>
            <div className="card-image">
              <img src="imgs/coach.webp" alt="coach"></img>
            </div>
            <h3>Elite Coaches</h3>
            <p>
              Train with world-class coaches who have experience in top leagues
              and know what it takes to reach the professional level.
            </p>
          </motion.div>
          <motion.div className="card" variants={cardVariants}>
            <div className="card-image">
              <img src="imgs/stadium.jpg" alt="facilities"></img>
            </div>
            <h3>World-Class Facilities</h3>
            <p>
              Play in state-of-the-art facilities, designed to mimic
              professional environments, ensuring you get the best out of your
              training.
            </p>
          </motion.div>
          <motion.div className="card" variants={cardVariants}>
            <div className="card-image">
              <img src="imgs/teamwork.webp" alt="teamwork"></img>
            </div>
            <h3>Teamwork & Leadership</h3>
            <p>
              Develop the mental and physical skills needed to excel in soccer,
              while also learning the importance of teamwork and leadership on
              and off the field.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Camp Schedule Section */}
      <section className="schedule-section" id="schedule">
        <motion.section
          className="schedule"
          ref={refSchedule}
          initial="hidden"
          animate={controlsSchedule}
          variants={scheduleVariants}
        >
          <h2>Camp Schedule</h2>
          <p>Here’s what a typical day at our soccer camp looks like:</p>
          <ul className="schedule-list">
            <li>
              <strong>08:00 AM:</strong> Warm-up and fitness drills
            </li>
            <li>
              <strong>10:00 AM:</strong> Tactical training
            </li>
            <li>
              <strong>12:00 PM:</strong> Lunch break
            </li>
            <li>
              <strong>02:00 PM:</strong> Skill-building exercises
            </li>
            <li>
              <strong>04:00 PM:</strong> Friendly matches and strategy review
            </li>
          </ul>
        </motion.section>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section" id="pricing" ref={refPricing}>
        <motion.div
          className="pricing-container"
          initial="hidden"
          animate={controlsPricing}
          variants={pricingVariants}
        >
          <h2>Pricing</h2>
          <div className="pricing-cards">
            <motion.div className="pricing-card" variants={pricingVariants}>
              <h3>Basic Package</h3>
              <p className="price">$300</p>
              <ul>
                <li>5-Day Camp</li>
                <li>Access to All Facilities</li>
                <li>Lunch Included</li>
              </ul>
              <a href="#register" className="cta-button">
                Sign Up
              </a>
            </motion.div>

            <motion.div className="pricing-card" variants={pricingVariants}>
              <h3>Elite Package</h3>
              <p className="price">$500</p>
              <ul>
                <li>7-Day Camp</li>
                <li>1-on-1 Coaching</li>
                <li>Full Board Meals</li>
              </ul>
              <a href="#register" className="cta-button">
                Sign Up
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Register Section */}
      {/* <section className="signup-section" id="register">
        <h2>Register for the Camp</h2>
        <form className="signup-form">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter your full name" />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Enter your email" />

          <label htmlFor="age">Age</label>
          <input type="number" id="age" placeholder="Enter your age" />

          <label htmlFor="position">Preferred Position</label>
          <select id="position">
            <option value="forward">Forward</option>
            <option value="midfielder">Midfielder</option>
            <option value="defender">Defender</option>
            <option value="goalkeeper">Goalkeeper</option>
          </select>

          <button type="submit" className="submit-btn">
            Sign Up Now
          </button>
        </form>
      </section> */}

      <footer className="footer">
        <p>© 2024 Soccer Camp. All rights reserved. | Privacy Policy</p>
      </footer>
    </div>
  );
}

export default App;
