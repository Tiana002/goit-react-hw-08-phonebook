import React from 'react';
import videoBg from '../../soil/letter.mp4';
import { Video } from './VideoBg.styled';

export const BackgroundVideo = () => {
  return (
    <div>
      <Video
        autoPlay
        loop
        muted
        playsinline
        preload="yes"
        poster={videoBg}
        src={videoBg}
      />
    </div>
  );
};
