import { LinkProps } from 'next/link';
import React from 'react';
import ActiveLink from '../ActiveLink';

function NavigationLink(props: React.PropsWithChildren<LinkProps>) {
  const { children, ...rest } = props;
  return (
    <ActiveLink {...rest} activeClassName="font-bold">
      <a className="text-white">
        <li className="mr-10 inline-block">{children}</li>
      </a>
    </ActiveLink>
  );
}

export default NavigationLink;
