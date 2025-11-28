import styles from "./HomeHeroVideo.module.css";
import { useState } from "react";

const HomeHeroVideo: React.FC = () => {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <>
      <p className="sr-only">
        Drone aerial view video of a Canadian pine forest and lake. No audio.
        Text 'HEADLINE' overlaid onto the video
      </p>
      {!videoReady && (
      <img
        src="/assets/thumbnails/thumbnail-drone-video.webp"
        alt="Drone aerial view…"
        fetchPriority="high"
        className={styles.videoSectionVideo}
      />
    )}
      <div className={styles.videoSectionContainer}>
        <div className={styles.videoSectionOverlay}></div>
        <video
          className={styles.videoSectionVideo}
          autoPlay
          muted
          loop
          // iOS
          playsInline
          poster="/assets/thumbnails/thumbnail-drone-video.webp"
          onLoadedData={() => setVideoReady(true)}
        >
          <source
            src="/assets/mp4/7226223-hd_1920_1080_30fps.mp4"
            type="video/mp4"
                  
          />
        </video>
      </div>
    </>
  );
};

export default HomeHeroVideo;
