import React from 'react';
import Logo from '../../assets/icons/corporateLogoColor.svg';
import PlayMarket from '../../assets/icons/playMarketColored.svg';
import AppStore from '../../assets/icons/appStore.svg';
import Twitter from '../../assets/icons/twitter.svg';
import Facebook from '../../assets/icons/facebook.svg';
import Instagram from '../../assets/icons/instagram.svg';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={s.root}>
      <div className={s.firstLine}>
        <button type="button" onClick={() => window.scrollTo(0, 0)}>
          <Logo />
        </button>
        <div className={s.links}>
          <a href="#production" className={s.link}>
            Наши продукты
          </a>
          <a href="#app" className={s.link}>
            Приложение
          </a>
          <a href="#ways" className={s.link}>
            Способы заработка
          </a>
          <a href="#tools" className={s.link}>
            Инструменты
          </a>
          <a href="#company" className={s.link}>
            Мобильная компания
          </a>
          <a href="#activation" className={s.link}>
            Активация
          </a>
          <a href="#advantages" className={s.link}>
            Преимущества нескольких компаний
          </a>
          <a href="#law" className={s.link}>
            Юридическая информация
          </a>
          <a href="#add" className={s.link}>
            Большая реклама
          </a>
          <a href="#questions" className={s.link}>
            Вопросы и ответы
          </a>
        </div>
        <div className={s.buttons}>
          <button type="button">
            <AppStore />
            <div className={s.textWrapper}>
              <div className={s.titleApp}>Download on the</div>
              <div className={s.nameApp}>App Store</div>
            </div>
          </button>
          <button type="button">
            <PlayMarket />
            <div className={s.textWrapper}>
              <div className={s.titleApp}>GET IT ON</div>
              <div className={s.nameApp}>Google Play</div>
            </div>
          </button>
        </div>
      </div>
      <div className={s.secondLine}>
        <div className={s.rightsText}>© 2022 Smart3D Corporation. All Rights Reserved</div>
        <div className={s.socials}>
          <a href="https://twitter.com">
            <Twitter />
          </a>
          <a href="https://facebook.com">
            <Facebook />
          </a>
          <a href="https://instagram.com">
            <Instagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
