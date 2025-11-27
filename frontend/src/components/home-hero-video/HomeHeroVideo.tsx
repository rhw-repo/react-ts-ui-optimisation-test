import styles from "./HomeHeroVideo.module.css";
import MuxPlayer from "@mux/mux-player-react";

const HomeHeroVideo: React.FC = () => {
  const playbackId = import.meta.env.VITE_MUX_PLAYBACK_ID;

  if (!playbackId) {
    return <div>Error: No playback ID provided.</div>;
  }

  return (
    <>
      <p className="sr-only">
        Drone aerial view video of a Canadian pine forest and lake. No audio.
        Text 'HEADLINE' overlaid onto the video
      </p>
      <div className={styles.videoSectionContainer}>
        <MuxPlayer
          className={styles.videoSectionVideo}
          playbackId={playbackId}
          streamType="on-demand"
          metadata={{
            video_id: "drone-video",
            video_title: "drone_video",
          }}
          muted
          autoPlay
          loop
          playsInline
        />
        <div className={styles.videoSectionOverlay}></div>
        {/*<video
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
        </video>*/}
      </div>
    </>
  );
};

export default HomeHeroVideo;
