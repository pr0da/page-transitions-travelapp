import React from 'react';
import Link, { LinkProps } from 'next/link';
import IconBase from './IconBase';
import IconThreeDot from './IconThreeDot';
import ActiveLink from './ActiveLink';

interface Props {}

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

function AppNavigation(props: Props) {
  const {} = props;
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <header className="w-screen h-80 bg-black">
      <div className="w-screen relative z-10 bg-green-700 bg-opacity-25 px-5 lg:px-0">
        <nav className="max-w-screen-lg mx-auto relative">
          <ul className="py-3 hidden sm:block">
            <NavigationLink href="/">Home</NavigationLink>
            <NavigationLink href="/place">Places</NavigationLink>
            <NavigationLink href="/group">Group Trips</NavigationLink>
          </ul>
          <a
            href="#"
            className="absolute right-0 top-2"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <IconBase
              className="menu"
              icon-name="menu"
              icon-color="white"
              width={28}
              height={28}
            >
              <IconThreeDot open={menuOpen} />
            </IconBase>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default AppNavigation;
