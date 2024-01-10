import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import MobileImage from '../../assets/images/mobile-img.png';
import AppStore from '../../assets/icons/appStore.svg';
import PlayMarket from '../../assets/icons/playMarket.svg';
import s from './BannerSlider.module.scss';

const BannerSlider = () => {
  const [slide, setSlide] = useState(0);
  const [isInit, setIsInit] = useState(true);
  const timeoutRef: { current: ReturnType<typeof setTimeout> | null } = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    return () => {
      resetTimeout();
    };
  }, []);

  useEffect(() => {
    if (isInit) {
      const timeout = setTimeout(() => {
        setIsInit(false);
        setSlide(slide + 1);
      }, 5000);
      timeoutRef.current = timeout;
    } else if (slide < banners.length - 1) {
      const timeout = setTimeout(() => setSlide(slide + 1), 5000);
      timeoutRef.current = timeout;
    } else {
      const timeout = setTimeout(() => setSlide(0), 5000);
      timeoutRef.current = timeout;
    }
  }, [slide]);

  return (
    <>
      <div className={s.root}>
        {banners.map((el, index) => (
          <img
            src={el.imageURL}
            alt="Header Banner"
            className={cn(s.image, {
              [s.initial]: isInit, // мы не хотим анимацию на первом слайде при запуске
              [s.active]: index === slide,
              [s.prevImage]: index === slide - 1 || (slide === 0 && index === banners.length - 1),
            })}
            key={el.id}
          />
        ))}
        <div className={s.info}>
          <div className={s.textContainer}>
            <div className={s.title}>ФРАНШИЗА В СМАРТФОНЕ</div>
            <div className={s.proposition}>
              получите лицензию и зарабатывайте в приложении на 3D ремонте от 10 000 $
            </div>
          </div>
          <div className={s.imageContainer}>
            <img src={MobileImage} alt="" />
            <div className={s.appLinks}>
              <a href="https://google.com" className={s.appLink}>
                <AppStore className={s.icon} /> <span>APP STORE</span>
              </a>
              <a href="https://google.com" className={s.appLink}>
                <PlayMarket className={s.icon} /> <span>GOOGLE PLAY</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={s.imageContainerMobile}>
        <img src={MobileImage} alt="" />
        <div className={s.appLinks}>
          <a href="https://google.com" className={s.appLink}>
            <AppStore className={s.icon} /> <span>APP STORE</span>
          </a>
          <a href="https://google.com" className={s.appLink}>
            <PlayMarket className={s.icon} /> <span>GOOGLE PLAY</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default BannerSlider;

const banners = [
  {
    imageURL: 'https://env-3884663.jcloud.kz/upload/iblock/bf0/bf03b10b8aec6d7e19ab062716b0102c.jpg',
    id: 0,
  },
  {
    imageURL: 'https://env-3884663.jcloud.kz/upload/iblock/84e/84ed331144fc2ef2d096eb252fb7a863.jpg',
    id: 1,
  },
  {
    imageURL: 'https://env-3884663.jcloud.kz/upload/iblock/087/087e5d309e6b6f5be1ee57944769b044.jpg',
    id: 2,
  },
];
