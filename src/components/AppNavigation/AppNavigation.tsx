import React from 'react';
import { useRouter } from 'next/router';
import IconBase from '../IconBase';
import IconThreeDot from '../IconThreeDot';
import header1 from '../../assets/header1.jpg';
import header2 from '../../assets/header2.jpg';
import header3 from '../../assets/header3.jpg';
import BackgroundTransition from './BackgroundTransition';
import BackgroundImage from './BackgroundImage';
import NavigationLink from './NavigationLink';
import AppNavTransition from '../AppNavTransition';

interface Props {}

function AppNavigation(props: Props) {
  const {} = props;
  const [menuOpen, setMenuOpen] = React.useState(false);
  const router = useRouter();
  return (
    <header className="w-screen h-72 bg-black">
      <div className="absolute w-screen h-72 overflow-hidden top-0">
        <BackgroundTransition in={router.pathname === '/'}>
          <BackgroundImage url={header1} />
        </BackgroundTransition>
        <BackgroundTransition in={router.pathname === '/place'}>
          <BackgroundImage url={header2} />
        </BackgroundTransition>
        <BackgroundTransition in={router.pathname === '/group'}>
          <BackgroundImage url={header3} />
        </BackgroundTransition>
      </div>
      <div className="w-screen relative z-10 bg-green-900 bg-opacity-25 px-5 lg:px-0">
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

          <AppNavTransition />
        </nav>
      </div>
    </header>
  );
}

export default AppNavigation;
