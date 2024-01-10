import React from 'react';
import cn from 'classnames';
import s from './VideoComponent.module.scss';

interface IProps {
  id: string;
  className?: string;
}

const VideoComponent: React.FC<IProps> = ({ id, className = '' }) => {
  return (
    <div className={cn(s.root, className)}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        className={s.frame}
      />
    </div>
  );
};

export default VideoComponent;
