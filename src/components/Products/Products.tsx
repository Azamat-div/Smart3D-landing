import React from 'react';
import CorporateLogo from '../../assets/icons/corporateLogo.svg';
import ColoredConstructor from '../../assets/icons/3d-constructorColored.svg';
import Constructor from '../../assets/icons/3d-constructor.svg';
import Catalog from '../../assets/icons/catalog.svg';
import Chat from '../../assets/icons/chat.svg';
import Door from '../../assets/icons/door.svg';
import Panels from '../../assets/icons/panels.svg';
import Star from '../../assets/icons/star.svg';
import Design from '../../assets/icons/design.svg';
import Distribution from '../../assets/icons/distribution.svg';
import BackImage from '../../assets/images/img-landing.jpg';
import s from './Products.module.scss';
import { useMainContext } from '../../context';

const Products = () => {
  const { allData } = useMainContext();
  return (
    <>
      <div className="title" id="production">
        {allData['landing.products.title']}
      </div>
      <div className={s.root}>
        <div className={s.leftColumn}>
          <img src={BackImage} alt="" className={s.backImage} />
          <CorporateLogo />
        </div>
        <div className={s.products}>
          {productLines.map((line) => (
            <div key={`${line.id}productLine`} className={s.productsLine}>
              {line.products.map((product) => (
                <div className={s.product} key={`${product.id}productInLineItem`}>
                  <div className={s.productTitle}>{allData[product.title]}</div>
                  <div className={s.productImage}>{product.image}</div>
                  <div className={s.productDescription}>{allData[product.description]}</div>
                </div>
              ))}
              <div className={s.lineText}>
                <div className={s.lineTitle}>{allData[line.title]}</div>
                <div className={s.lineDescription}>{allData[line.description]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const productLines = [
  {
    title: 'landing.products.digital.title',
    description: 'landing.products.digital.description',
    products: [
      {
        title: 'landing.products.constructor.title',
        image: <ColoredConstructor />,
        description: 'landing.products.constructor.description',
        id: 11,
      },
      {
        title: 'landing.products.catalog.title',
        image: <Catalog />,
        description: 'landing.products.catalog.description',
        id: 12,
      },
      {
        title: 'landing.products.chat.title',
        image: <Chat />,
        description: 'landing.products.chat.description',
        id: 13,
      },
    ],
    id: 1,
  },
  {
    title: 'landing.products.physical.title',
    description: 'landing.products.physical.description',
    products: [
      {
        title: 'landing.products.doors.title',
        image: <Door />,
        description: 'landing.products.doors.description',
        id: 21,
      },
      {
        title: 'landing.products.panels.title',
        image: <Panels />,
        description: 'landing.products.panels.description',
        id: 22,
      },
      {
        title: 'landing.products.innovations.title',
        image: <Star />,
        description: 'landing.products.innovations.description',
        id: 23,
      },
    ],
    id: 2,
  },
  {
    title: 'landing.products.mobileApps.title',
    description: 'landing.products.mobileApps.description',
    products: [
      {
        title: 'landing.products.companyApp.title',
        image: <Constructor />,
        description: 'landing.products.companyApp.description',
        id: 31,
      },
      {
        title: 'landing.products.designApp.title',
        image: <Design />,
        description: 'landing.products.designApp.description',
        id: 32,
      },
      {
        title: 'landing.products.distributionApp.title',
        image: <Distribution />,
        description: 'landing.products.distributionApp.description',
        id: 33,
      },
    ],
    id: 3,
  },
];

export default Products;
