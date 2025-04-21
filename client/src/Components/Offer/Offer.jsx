


import React, {useState, useRef, useEffect }from 'react'
import Image_Offer from '../OtherImages/Image offer.png'
import Image_Offer_Two from '../OtherImages/Image offer two.png'
import Image_Offer_Three from '../OtherImages/image offer three.png'
import './Offer.css'




const Offer = () => {
    const containerRef = useRef(null);
    const [showContent, setShowContent] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const offset = containerRef.current?.offsetTop || 0;
        const scrollPosition = window.scrollY + window.innerHeight;
        if (scrollPosition > offset + 100) {
          setShowContent(true);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      // Reset animation on reload
      setShowContent(false);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <>
        <div className={`offer-container ${showContent ? 'show' : ''}`} ref={containerRef}>
          <div className='offer-wrapper'>
            <div><h3 className={showContent ? 'slide-in' : ''}>What We Offer</h3></div>
          </div>
  
          <div className='offer-wrapper-two'>
            <div className={showContent ? 'img-left' : ''}><img src={Image_Offer} alt='' /></div>
            <div className={showContent ? 'img-center' : ''}><img src={Image_Offer_Two} alt='' /></div>
            <div className={showContent ? 'img-right' : ''}><img src={Image_Offer_Three} alt='' /></div>
          </div>
        </div>
      </>
    )
  }
  
  export default Offer