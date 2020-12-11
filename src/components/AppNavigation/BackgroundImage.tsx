import React from 'react';

function BackgroundImage(props: { url: string; className?: string }) {
  const { className, url } = props;
  return (
    <div
      style={{ backgroundImage: `url(${url})` }}
      className={`${className} bg-center bg-cover absolute w-screen h-80`}
    />
  );
}

export default BackgroundImage;
