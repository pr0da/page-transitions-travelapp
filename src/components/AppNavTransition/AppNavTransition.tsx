import React, { useState } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';
import FollowButton from './FollowButton';
import { useSelector } from 'react-redux';
import { getIndexedUser } from '../../slices';

interface Props {}

function AppNavTransition(props: Props) {
  const {} = props;
  const [following, setFollowing] = useState(false);
  const router = useRouter();
  const isPlaceActive = router.pathname === '/place';
  const isGroupActive = router.pathname === '/group';
  const selectedUser = useSelector(getIndexedUser);
  return (
    <>
      <div
        className={cn(
          'w-48 transition-all duration-500 absolute top-40 left-0 transform-gpu',
          {
            '-translate-x-2 -translate-y-24 scale-75': isPlaceActive,
            '-translate-x-16 -translate-y-16 scale-25': isGroupActive,
          }
        )}
      >
        <div
          className={cn(
            'absolute w-10 h-10 bg-green-500 border-2 border-black opacity-0 rounded-50 right-2 bottom-2',
            {
              'opacity-100': isGroupActive,
            }
          )}
        ></div>
        <img
          src={selectedUser.img}
          className={cn('w-full transition-all duration-500', {
            rounded: router.pathname === '/',
            'rounded-50': router.pathname === '/group',
          })}
        />
      </div>
      <FollowButton
        following={following}
        onClick={() => setFollowing((prev) => !prev)}
        className={cn('transform-gpu', {
          'transition-all duration-500': !isGroupActive,
          '-translate-x-52 -translate-y-20': isPlaceActive,
          'transition-none opacity-0': isGroupActive,
        })}
      />

      <h2
        className={cn(
          'absolute left-0 text-4xl transition-all duration-500 top-92',
          {
            'text-white transform-gpu scale-75 translate-x-36 -translate-y-32': isPlaceActive,
            'text-white transform-gpu -translate-y-32': isGroupActive,
          }
        )}
      >
        {isGroupActive ? (
          <span>{selectedUser.trips[0]}</span>
        ) : (
          <span>{selectedUser.name}</span>
        )}
      </h2>
    </>
  );
}

export default AppNavTransition;
