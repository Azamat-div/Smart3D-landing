import React from 'react';
import { useMainContext } from '../../context';
import VideoComponent from '../VideoComponent';
import s from './ProgramVideo.module.scss';

const ProgramVideo = () => {
  const { allData } = useMainContext();
  return (
    <div className={s.root} id="video-program">
      <div className="title">{allData['landing.videoProgram.title']}</div>
      <VideoComponent id="gdeZdaRBlbY" />
    </div>
  );
};

export default ProgramVideo;
