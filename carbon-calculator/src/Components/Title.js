import styles from "../ComponentStyles/Title.module.css"
import React, { useState, useEffect } from 'react';
const Title = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animation, setAnimation] = useState("fadeIn"); // New state to manage animation
  // Step 2: Define an array of quotes
  const quotes = [
    { text: "In 2020, global carbon dioxide (CO2) emissions from fossil fuels and industry were approximately 31.5 billion metric tons." },
    { text: "The energy sector is the largest contributor to global CO2 emissions, accounting for about 75% of total emissions." },
    { text: "China is the world's largest emitter of CO2, responsible for around 28% of global emissions, followed by the United States (15%) and the European Union (7%)." },
    { text: "The average per capita CO2 emissions in the United States are approximately 16.5 metric tons per year, compared to about 7.5 metric tons in the European Union and 2.5 metric tons in China." },
    { text: "Transportation contributes about 14% of global CO2 emissions, with road vehicles, aviation, and shipping being major contributors." },
    { text: "Industries such as cement, steel, and chemicals contribute about 21% of global CO2 emissions." },
    { text: "Despite progress, renewable energy sources like wind and solar power accounted for only 11% of global electricity generation in 2019." },
    { text: "Deforestation and land-use changes contribute about 11% of global CO2 emissions annually." },
    { text: "To limit global warming to 1.5 degrees Celsius above pre-industrial levels, global CO2 emissions must be reduced by about 45% from 2010 levels by 2030." },
    { text: "Carbon emissions contribute significantly to global warming, leading to climate impacts such as sea-level rise, extreme weather events, and disruptions to ecosystems and biodiversity." },
  ];

  const changeSlide = (newSlide) => {
    setAnimation("fadeOut"); // Start by fading out the current quote
    setTimeout(() => {
        setCurrentSlide(newSlide);
        setAnimation("fadeIn"); // After fade out, fade in the new quote
    }, 500); // This timeout should match the duration of your fade-out animation
};

const nextSlide = () => {
    const newSlide = (currentSlide + 1) % quotes.length;
    changeSlide(newSlide);
};

const prevSlide = () => {
    const newSlide = (currentSlide - 1 + quotes.length) % quotes.length;
    changeSlide(newSlide);
};

useEffect(() => {
    const interval = setInterval(nextSlide, 7000); // Automatically change slide every 7 seconds
    return () => clearInterval(interval);
}, [currentSlide]);


  return (
    /*
     <div className={styles.container}>
       <img src="/R.png" alt="Carbon Emission" className={styles.main_image}/>
       <h1 className={styles.text}>Making Earth Greener</h1>
     </div>
    */

    <div className={styles.main}>
      <div className={styles.leftmain}>

        <div className={styles.maintext}>
          Making Earth <span className={styles.greener}>Greener</span>
        </div>



        <div className={styles.slideshow}>
        
        <div className = {styles.facts}>  Fun facts:</div> 
           
        <div className={`${styles.quote} ${styles[animation]}`}>{quotes[currentSlide].text}</div>
        
        </div>


        <div className={styles.subtext}>  
          <h3>Calculate your carbon footprint today!</h3>
        </div>





      </div>

      <div className={styles.rightmain}>
        <img src="/R.png" alt="Carbon Emission" className={styles.main_image} />
      </div>

    </div>

  );
}

export default Title;