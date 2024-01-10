import React from 'react';
import BannerSlider from './components/BannerSlider';
import Promotion from './components/Promotion/Promotion';
import s from './App.module.scss';
import Products from './components/Products';
import NewBrand from './components/NewBrand';
import MobileApp from './components/MobileApp';
import EarnAndAdvantages from './components/EarnAndAdvantages';
import PartnerHave from './components/PartnerHave';
import ProgramVideo from './components/ProgramVideo';
import PartnerTools from './components/PartnerTools/PartnerTools';
import Partnership from './components/Partnership';
import How from './components/How';
import RightsDefense from './components/RightsDefense';
import Add from './components/Add';
import Questions from './components/Questions';
import Footer from './components/Footer';
import Activation from './components/Activation/Activation';
import Header from './components/Header';
import { advantagesData, earnData, questions } from './data';
import { useMainContext } from './context';

const App = () => {
  const { allData, explanationData, questionsData } = useMainContext();
  return (
    <div className={s.root}>
      <Header />
      <BannerSlider />
      <Promotion /> {/* on Bitrix */}
      <Products /> {/* on Bitrix */}
      <NewBrand /> {/* on Bitrix */}
      <MobileApp /> {/* on Bitrix */}
      <EarnAndAdvantages // on Bitrix
        title={allData['landing.earn.title'] as string}
        description={allData['landing.earn.description'] as string}
        data={earnData}
      />
      <PartnerHave /> {/* on Bitrix */}
      <ProgramVideo /> {/* on Bitrix */}
      <PartnerTools /> {/* on Bitrix */}
      <Partnership /> {/* on Bitrix */}
      <Questions // on Bitrix
        questions={explanationData}
        title={allData['landing.appFeatures.title'] as string}
        showButton={false}
      />
      <How /> {/* on Bitrix */}
      <Activation /> {/* on Bitrix */}
      <EarnAndAdvantages // on Bitrix
        title={allData['landing.advantages.title'] as string}
        description={allData['landing.advantages.description'] as string}
        data={advantagesData}
        id="advantages"
      />
      <RightsDefense /> {/* on Bitrix */}
      <Add /> {/* on Bitrix */}
      <Questions questions={questionsData} title={allData['landing.questions.title'] as string} id="questions" />{' '}
      {/* on Bitrix */}
      <Footer />
    </div>
  );
};

export default App;
