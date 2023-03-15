import React, { useState, useEffect }  from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
//Components
import ScrollForMore from "../components/scrollForMore";

//Ease

const transition = { duration: 1.6, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  animate: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {duration: 1, ...transition}
  },
};

const lastName = {
  animate: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

const Model = ({ imageDetails }) => {
  const body = document.querySelector("body");
  

  const {scrollYProgress} = useViewportScroll();
  const [canScroll, setCanScroll] = useState(false);

  const scale = useTransform(scrollYProgress, [0,1], [1.1, 1]);

  useEffect(()=>{
      !canScroll ? body.classList.add("no-scroll") : body.classList.remove("no-scroll")
  }, [canScroll, body.classList])
  
  return (
    <motion.div
    onAnimationComplete={() => setCanScroll(true)}
      initial="initial"
      animate="animate"
      exit="exit"
      className="single"
    >
      <div className="container fluid">
        <div className="row center top-row">
          <div className="top">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{y:0, opacity:1, transition: {delay: 2.4, ...transition}}} className="details">
              <div className="location">
                <span>28.538336</span>
                <span>-81.379234</span>
              </div>
              <div className="mua">MUA: @mylifeascrystall</div>
            </motion.div>
            <motion.div className="model">
              <motion.span variants={firstName} className="first">
                <motion.span variants={letter}>L</motion.span>
                <motion.span variants={letter}>i</motion.span>
                <motion.span variants={letter}>n</motion.span>
                <motion.span variants={letter}>d</motion.span>
                <motion.span variants={letter}>a</motion.span>
              </motion.span>
              <motion.span variants={lastName} className="last">
                <motion.span variants={letter}>O</motion.span>
                <motion.span variants={letter}>z</motion.span>
                <motion.span variants={letter}>o</motion.span>
                <motion.span variants={letter}>n</motion.span>
                <motion.span variants={letter}>d</motion.span>
                <motion.span variants={letter}>i</motion.span>
              </motion.span>
            </motion.div>
          </div>
        </div>
        <div className="row bottom-row">
          <div className="bottom">
            <div className="image-container-single">
              <motion.div
                initial={{
                  width: imageDetails.width,
                  height: imageDetails.height,
                  y: "-50%",
                }}
                animate={{
                  y: 0,
                  width: "100%",
                  transition: { delay: 0.2, ...transition },
                }}
                className="thumbnail-single"
              >
                <div className="frame-single">
                  <motion.img
                    initial={{ scale: 1.1 }}
                    style={{scale: scale}}
                    animate={{
                      transition: { delay: 0.2, ...transition },
                      top: "-50%",
                    }}
                    src={require("../images/lindaHigh.jpg")}
                    alt="a model portrait"
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <ScrollForMore />
        </div>
      </div>
      <div className="detailed-information">
        <div className="container">
          <div className="row">
            <h2 className="title">
              The insiration behind the artwork & <br /> what it means.
            </h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Model;
