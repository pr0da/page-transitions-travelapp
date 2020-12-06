import React from 'react';
import IconBase from './IconBase';
import IconThreeDot from './IconThreeDot';

interface Props {}

function AppNavigation(props: Props) {
  const {} = props;
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <header>
      <div className="nav-wrapper">
        <nav>
          <a href="#" onClick={() => setMenuOpen((open) => !open)}>
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
