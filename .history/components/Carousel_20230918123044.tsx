import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import Image from 'next/image';
import styles from './Carousel.module.css';

const Carousel = forwardRef(({ children }: { children: React.ReactNode[] }, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragEndX, setDragEndX] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handlePrevClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? children.length - 1 : prevIndex - 1));
    }
  };

  const handleNextClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex === children.length - 1 ? 0 : prevIndex + 1));
    }
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
  };

  const handleDragEnd = (e) => {
    setIsDragging(false);
    setDragEndX(e.clientX);
    if (dragEndX - dragStartX > 50) {
      handlePrevClick();
    } else if (dragEndX - dragStartX < -50) {
      handleNextClick();
    }
  };

  useEffect(() => {
    const handleTransitionEnd = () => {
      setIsAnimating(false);
    };
    const slider = document.querySelector(`.${styles.slider}`);
    slider.addEventListener('transitionend', handleTransitionEnd);
    return () => {
      slider.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, []);

  useImperativeHandle(ref, () => ({
    prev: handlePrevClick,
    next: handleNextClick,
    goTo: (index) => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrentIndex(index);
      }
    },
  }));

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={styles.carousel}>
      {isLoading ? (
        <div className={styles.spinner} />
      ) : (
        <>
          <div className={styles.slider} onMouseDown={handleDragStart} onMouseUp={handleDragEnd} onMouseLeave={handleDragEnd}>
            {children.map((child, index) => {
              if (React.isValidElement(child)) {
                return (
                  <div
                    key={index}
                    className={styles.slide}
                    style={{
                      opacity: currentIndex === index ? 1 : 0,
                      transition: isAnimating ? 'opacity 0.5s ease-in-out' : 'none',
                    }}
                  >
                    <Image src={child.props.src} alt={child.props.alt} width={800} height={600} onLoad={handleImageLoad} />
                    {child.props.caption && <div className={styles.caption}>{child.props.caption}</div>}
                  </div>
                );
              }
              return null; // or some fallback
            })}
          </div>
          <button className={styles.prevButton} onClick={handlePrevClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                d="M14.707 15.707l-8-8a.999.999 0 0 1 0-1.414l8-8a.999.999 0 1 1 1.414 1.414L8.414 7l7.707 7.707a.999.999 0 1 1-1.414 1.414z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button className={styles.nextButton} onClick={handleNextClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                d="M5.293 15.707l8-8a.999.999 0 0 0 0-1.414l-8-8a.999.999 0 1 0-1.414 1.414L11.586 7l-7.707 7.707a.999.999 0 1 0 1.414 1.414z"
                fill="currentColor"
              />
            </svg>
          </button>
        </>
      )}
    </div>
  );
});

export default Carousel;