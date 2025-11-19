import styles from "./HomeHeroVideo.module.css";

const HomeHeroVideo: React.FC = () => {
  return (
    <>
      <p className="sr-only">
        Drone aerial view video of a Canadian pine forest and lake. No audio.
        Text 'HEADLINE' overlaid onto the video"
      </p>
      <div className={styles.videoSectionContainer}>
        <video
          className={styles.videoSectionVideo}
          autoPlay
          muted
          loop
          // iOS
          playsInline
          poster="/assets/thumbnails/thumbnail-drone-video.webp"
        >
          <source
            src="/assets/mp4/7226223-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className={styles.videoSectionOverlay}></div>
      </div>
    </>
  );
};

export default HomeHeroVideo;
