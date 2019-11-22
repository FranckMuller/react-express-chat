import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { convertTime } from '../../utils';

import styles from './AudioMessage.module.scss';
import playIcon from '../../assets/icons/play.svg';
import pauseIcon from '../../assets/icons/pause.svg';

const AudioMessage = ({ audio }) => {
  const [isPlaing, togglePlay] = useState(false);
  const [displayedTime, updateDisplayedTime] = useState(null);
  const [progress, updateProgress] = useState(0);
  const audioEl = useRef(null);

  useEffect(() => {
    audioEl.current.volume = '.1';
    audioEl.current.addEventListener('loadedmetadata', () => {
      updateDisplayedTime(convertTime(audioEl.current.duration));
    });

    audioEl.current.addEventListener('ended', () => {
      togglePlay(false);
      updateProgress(0);
    });
    audioEl.current.addEventListener('pause', () => {
      togglePlay(false);
    });
    audioEl.current.addEventListener('play', () => {
      togglePlay(true);
    });
    audioEl.current.addEventListener('timeupdate', () => {
      const duration = audioEl.current.duration;
      updateDisplayedTime(convertTime(audioEl.current.currentTime));
      updateProgress((audioEl.current.currentTime / duration) * 100);
    });
  }, []);

  const onTogglePlay = () => {
    if (isPlaing) {
      audioEl.current.pause();
    } else {
      audioEl.current.play();
    }
  };

  return (
    <div className={styles.audio}>
      <span style={{ width: `${progress}%` }} className={styles.progress}></span>
      <span className={styles.progressIcon}></span>
      <button onClick={onTogglePlay} className={styles.audioBtn}>
        {!isPlaing && <img src={playIcon} alt="play" />}
        {isPlaing && <img src={pauseIcon} alt="play" />}
      </button>
      <span className={styles.time}>{displayedTime}</span>
      <audio ref={audioEl} preload="auto" src={audio}></audio>
    </div>
  );
};

AudioMessage.propTypes = {
  audio: PropTypes.string.isRequired
};

export default AudioMessage;
