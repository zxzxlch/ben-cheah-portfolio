import React from 'react';

const YoutubeEmbed = ({ src, title, width, height, maxWidth = 0 }) => {
  const aspectRatio = width / height;
  return (
    <div className="relative mb-6" style={{ maxWidth: `${maxWidth}px` }}>
      <div style={{ paddingBottom: `calc(100%/${aspectRatio})` }}></div>
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        width={width}
        height={height}
        src={src}
        title={title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default YoutubeEmbed;
