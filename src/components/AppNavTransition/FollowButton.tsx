import React from 'react';
import cn from 'classnames';

type Props = React.HTMLProps<HTMLButtonElement> & {
  following: boolean;
};

function FollowButton(props: Props) {
  const { following, className, ...rest } = props;
  return (
    <button
      {...rest}
      type="button"
      aria-checked={following}
      className={cn(
        className,
        'text-white py-1 px-2 font-bold w-36 rounded absolute top-80 left-56 block bg-red-500 checked:bg-green-700'
      )}
    >
      {following ? <span>&#10004; Following</span> : <span>Follow</span>}
    </button>
  );
}

export default FollowButton;
