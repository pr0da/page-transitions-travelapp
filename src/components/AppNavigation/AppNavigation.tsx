import React from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';
import IconBase from '../IconBase';
import IconThreeDot from '../IconThreeDot';
import header1 from '../../assets/header1.jpg';
import header2 from '../../assets/header2.jpg';
import header3 from '../../assets/header3.jpg';
import BackgroundTransition from './BackgroundTransition';
import BackgroundImage from './BackgroundImage';
import NavigationLink from './NavigationLink';
import AppNavTransition from '../AppNavTransition';
import { useSelector } from 'react-redux';
import { getIndexedUserFirstName } from '../../slices';
import styles from './AppNavigation.module.css';

interface Props {}

function AppNavigation(props: Props) {
  const {} = props;
  const [menuOpen, setMenuOpen] = React.useState(false);
  const router = useRouter();
  const firstName = useSelector(getIndexedUserFirstName);
  return (
    <header className={cn('w-screen bg-black h-72 relative', styles.header)}>
      <div className="absolute top-0 w-screen overflow-hidden h-72">
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
      <div className="relative z-10 w-screen px-5 bg-green-900 bg-opacity-25 lg:px-0">
        <nav className="relative max-w-screen-lg mx-auto">
          <ul className="hidden py-3 sm:block">
            <NavigationLink href="/">{firstName}'s Home</NavigationLink>
            <NavigationLink href="/place">{firstName}'s Places</NavigationLink>
            <NavigationLink href="/group">
              {firstName}'s Group Trips
            </NavigationLink>
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
