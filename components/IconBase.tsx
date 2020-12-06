import React from 'react';
import cn from 'classnames';

interface Props {
  width?: number;
  height?: number;
  iconName?: string;
  iconColor?: string;
  className?: string;
}

function IconBase(props: React.PropsWithChildren<Props>) {
  const {
    width = 18,
    height = 18,
    iconColor = 'currentColor',
    iconName = 'box',
    children,
    className,
  } = props;
  return (
    <svg
      {...{ width, height }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      role="presentation"
      aria-labelledby={iconName}
      className={cn(className, 'inline-block align-baseline -mb-px')}
    >
      <title id={iconName} lang="en">
        {iconName} icon
      </title>
      <g fill={iconColor}>{children}</g>
    </svg>
  );
}

export default IconBase;
