import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Thumbnail from '../assets/MaskGroup.png'

function UseFullVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoUrl = "https://www.youtube.com/embed/aueDCe4PIao?si=CkMW7mKkz3dgpvj8";

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className="contain-fluid bg-gray-100 py-16 md:py-20 md:px-16 sm:px-8 px-4">
      <div className="relative w-full max-w-[660px] mx-auto flex justify-center items-center flex-col aspect-video">

        <p className="md:text-4xl text-xl font-bold md:pb-10 pb-6">Use illustrations in UI design</p>

        {isPlaying ? (
          <iframe
            src={videoUrl + "&autoplay=1"}
            title="YouTube Video Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
          ></iframe>
        ) : (
          <div className="flex relative justify-center items-center">
            {/* Custom Thumbnail */}
            <Box
              component="img"
              src={Thumbnail}
              alt="Custom Thumbnail"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                cursor: "pointer",
              }}
              onClick={handlePlay}
            />
            {/* Play Button */}
            <IconButton
              onClick={handlePlay}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                color: "white",
                // padding: "16px",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.9)",
                },
              }}
            >
              <PlayArrowIcon sx={{ fontSize: "48px" }} />
            </IconButton>
          </div>
        )}
      </div>
    </section>
  );
}

export default UseFullVideo;


