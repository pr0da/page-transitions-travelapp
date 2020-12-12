import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './BackgroundTransition.module.css';

type Props = Pick<
  React.ComponentProps<typeof CSSTransition>,
  'in' | 'children'
>;

function BackgroundTransition(props: Props) {
  return (
    <CSSTransition
      {...props}
      unmountOnExit
      classNames={styles}
      addEndListener={(node, done) => {
        node.addEventListener('transitionend', done, false);
      }}
    />
  );
}

export default BackgroundTransition;
