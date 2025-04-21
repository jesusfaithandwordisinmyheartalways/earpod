


import React, { useEffect, useRef } from 'react';
import './EarPods.css';


// Dynamically import all images from the folder
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../Images', false, /\.(png|jpe?g|svg)$/)).sort();




const EarPods = () => {
 
  const canvasRef = useRef(null);
  const frameCount = images.length;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    canvas.width = 1158;
    canvas.height = 770;

    const img = new Image();
    img.src = images[0];
    img.onload = () => context.drawImage(img, 0, 0);

    const preloadImages = () => {
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    const updateImage = (index) => {
      const img = new Image();
      img.src = images[index];
      img.onload = () => context.drawImage(img, 0, 0);
    };

    const handleScroll = () => {
      const wrapper = document.querySelector('.EarPods-Wrapper');
      const rect = wrapper.getBoundingClientRect();
      const scrollTop = window.scrollY + rect.top;
      const scrollFraction = (window.scrollY - scrollTop + window.innerHeight / 2) / (wrapper.offsetHeight);
      const frameIndex = Math.min(frameCount - 1, Math.max(0, Math.ceil(scrollFraction * frameCount)));
      requestAnimationFrame(() => updateImage(frameIndex));
    };

    window.addEventListener('scroll', handleScroll);
    preloadImages();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);





  return (
    <>
      <div className='EarPods-Container'>
        <div className='EarPods-Wrapper'>
          <canvas ref={canvasRef} id="hero-lightpass" />
        </div>
      </div>

      {/* Spacer to allow scroll */}
      <div className="Scroll-Spacer"></div>




    </>
  );
};




export default EarPods;
