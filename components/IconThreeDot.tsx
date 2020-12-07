import React from 'react';
import { gsap, Sine } from 'gsap';

interface Props {
  open?: boolean;
}

function IconThreeDot(props: Props) {
  const { open } = props;
  const firstRef = React.useRef<SVGCircleElement>(null);
  const middleRef = React.useRef<SVGCircleElement>(null);
  const lastRef = React.useRef<SVGCircleElement>(null);

  React.useEffect(() => {
    if (open) {
      gsap.to(firstRef.current, {
        duration: 0.2,
        x: 18,
        ease: Sine.easeOut,
      });
      gsap.to(lastRef.current, {
        duration: 0.2,
        x: -18,
        ease: Sine.easeOut,
      });
      gsap.to([firstRef.current, middleRef.current, lastRef.current], {
        duration: 0.2,
        stagger: 0.04,
        fill: '#7eebe6',
        ease: Sine.easeOut,
      });
    } else {
      gsap.to(firstRef.current, {
        x: 0,
        ease: Sine.easeIn,
        duration: 0.2,
      });
      gsap.to(lastRef.current, {
        x: 0,
        ease: Sine.easeIn,
        duration: 0.2,
      });
      gsap.to([firstRef.current, middleRef.current, lastRef.current], {
        duration: 0.2,
        fill: 'white',
      });
    }
  }, [open]);

  return (
    <g fill="white">
      <circle ref={firstRef} cx="3" cy="12" r="3" />
      <circle ref={middleRef} cx="12" cy="12" r="3" />
      <circle ref={lastRef} cx="21" cy="12" r="3" />
    </g>
  );
}

export default IconThreeDot;
