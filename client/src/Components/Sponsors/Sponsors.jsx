



import React, { useEffect, useRef, useState } from 'react'
import './Sponsors.css'
import sponsors_image from '../OtherImages/playstation_images_sponsors.png'
import sponsors_image_two from '../OtherImages/roku_ sponsors_image.png'
import sponsors_image_three from '../OtherImages/sasmsung_ sponsors_image.png'
import sponsors_image_four from '../OtherImages/xbox_ sponsors_image.png'

const Sponsors = () => {
  const sponsorRef = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = sponsorRef.current.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        setInView(true);
      } else {
        setInView(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run on first load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className={`sponsors-container ${inView ? 'show-sponsors' : ''}`}
        ref={sponsorRef}
      >
        <div className='sponsors-wrapper'>
          <div>
            <h3 className={`slide-in-heading ${inView ? 'slide' : ''}`}>
              Our Sponsors
            </h3>
          </div>
        </div>

        <div className='sponsors-wrapper-two'>
  <div className={`marquee-track ${inView ? 'marquee-animate' : ''}`}>
    {/* Original Set */}
    <img src={sponsors_image} alt='' />
    <img src={sponsors_image_two} alt='' />
    <img src={sponsors_image_three} alt='' />
    <img src={sponsors_image_four} alt='' />

    {/* Duplicated Set */}
    <img src={sponsors_image} alt='' />
    <img src={sponsors_image_two} alt='' />
    <img src={sponsors_image_three} alt='' />
    <img src={sponsors_image_four} alt='' />
  </div>
</div>



      </div>
    </>
  )
}

export default Sponsors