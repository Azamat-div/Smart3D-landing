import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import s from './Header.module.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOnScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('click', handleClose);
    }

    return () => {
      window.removeEventListener('click', handleClose);
    };
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener('scroll', handleOnScroll);
    return () => {
      window.removeEventListener('scroll', handleOnScroll);
    };
  }, []);

  return (
    <div className={cn(s.root, { [s.withBack]: scroll > window.innerHeight })}>
      <div className={s.logoText}>SMART3D CORPORATION</div>
      <nav className={s.navBar}>
        {links.slice(0, 6).map((el) => (
          <li key={el.title} className={s.navLink}>
            <a href={el.link}>{el.title}</a>
          </li>
        ))}
      </nav>
      <button type="button" onClick={() => setIsOpen(!isOpen)} className={cn(s.burgerButton, { [s.isOpen]: isOpen })}>
        <span />
      </button>
      <div className={cn(s.fullNavbarWrapper, { [s.isOpen]: isOpen })}>
        <nav className={s.fullNavBar}>
          {links.map((el) => (
            <li key={el.title} className={s.navLink}>
              <a href={el.link}>{el.title}</a>
            </li>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;

const links = [
  {
    title: 'наши продукты',
    link: '#production',
  },
  {
    title: 'приложение',
    link: '#app',
  },
  {
    title: 'способы заработка',
    link: '#ways',
  },
  {
    title: 'инструменты',
    link: '#tools',
  },
  {
    title: 'мобильная компания',
    link: '#company',
  },
  {
    title: 'активация',
    link: '#activation',
  },
  {
    title: 'преимущества нескольких компаний',
    link: '#activation',
  },
  {
    title: 'юридическая информация',
    link: '#law',
  },
  {
    title: 'большая реклама',
    link: '#add',
  },
  {
    title: 'вопросы и ответы',
    link: '#questions',
  },
];
