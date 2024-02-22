import Plyr, { PlyrProps } from "plyr-react";
import "plyr-react/plyr.css";

interface VideoPlayerProps {
  src: string;
  type: string;
  poster?: string;
  autoplay?: boolean;
  options?: PlyrProps["options"];
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  type,
  poster = "",
  autoplay = false,
  options = {},
}) => {
  return (
    <Plyr
      source={{
        type: "video",
        sources: [
          {
            src,
            type,
          },
        ],
        poster: poster,
      }}
      autoPlay={autoplay} // Move autoplay here
      options={options}
    />
  );
};

export default VideoPlayer;
