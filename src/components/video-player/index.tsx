"use client";

import React, { useState } from 'react';
import styles from './styles.module.scss';

interface VideoPlayerProps {
  videoId: string;
  title: string;
  description: string;
  duration: string;
  isLocked?: boolean;
  videoType?: 'youtube' | 'vimeo' | 'local' | 'url';
  videoSrc?: string; // Pro lokální videa nebo přímé URL
  thumbnailSrc?: string; // Náhledový obrázek
}

export default function VideoPlayer({
  videoId,
  title,
  description, 
  duration,
  isLocked = false,
  videoType = 'youtube',
  videoSrc,
  thumbnailSrc
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Generování URL podle typu videa
  const getVideoUrl = () => {
    switch (videoType) {
      case 'youtube':
        return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1`;
      case 'vimeo':
        return `https://player.vimeo.com/video/${videoId}?autoplay=1&badge=0`;
      case 'local':
        return videoSrc || `/videos/${videoId}.mp4`;
      case 'url':
        return videoSrc;
      default:
        return videoSrc;
    }
  };

  const handlePlay = () => {
    if (!isLocked) {
      setIsPlaying(true);
    }
  };

  return (
    <div className={`${styles.videoItem} ${isLocked ? styles.videoLocked : ''}`}>
      <div className={styles.videoWrapper}>
        {isPlaying && !isLocked ? (
          // Přehrává se video
          <>
            {videoType === 'youtube' || videoType === 'vimeo' ? (
              <iframe
                width="100%"
                height="100%"
                src={getVideoUrl()}
                frameBorder="0"
                allowFullScreen
                title={title}
              />
            ) : (
              <video
                controls
                autoPlay
                width="100%"
                height="100%"
                poster={thumbnailSrc}
              >
                <source src={getVideoUrl()} type="video/mp4" />
                Váš prohlížeč nepodporuje video.
              </video>
            )}
          </>
        ) : (
          // Náhled před přehráním
          <>
            <div 
              className={`${styles.videoPlaceholder} ${isLocked ? styles.lockedPlaceholder : ''}`}
              style={thumbnailSrc ? { 
                backgroundImage: `url(${thumbnailSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              } : {}}
            >
              <div 
                className={isLocked ? styles.lockIcon : styles.playButton}
                onClick={handlePlay}
              >
                {isLocked ? '🔒' : '▶'}
              </div>
              <p>{title}</p>
            </div>
            {isLocked && <div className={styles.blurOverlay}></div>}
          </>
        )}
      </div>
      
      <h3>{title}</h3>
      <p>{description}</p>
      <span className={styles.videoDuration}>{duration}</span>
      
      {isLocked && (
        <div className={styles.unlockInfo}>
          <small>Toto video se odemkne po aktivaci kurzu</small>
        </div>
      )}
    </div>
  );
}
