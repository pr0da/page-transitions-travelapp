import { useRouter } from 'next/router';
import cn from 'classnames';
import Link, { LinkProps } from 'next/link';
import React, { Children } from 'react';

interface Props extends LinkProps {
  activeClassName: string;
}

// https://github.com/vercel/next.js/blob/canary/examples/active-class-name/components/ActiveLink.js
const ActiveLink = (props: React.PropsWithChildren<Props>) => {
  const { children, activeClassName, ...rest } = props;
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = React.isValidElement(child)
    ? child.props.className
    : '';
  const className =
    asPath === props.href || asPath === props.as
      ? cn(childClassName, activeClassName)
      : childClassName;

  return (
    <Link {...rest}>
      {React.isValidElement(child) &&
        React.cloneElement(child, {
          className: className || null,
        })}
    </Link>
  );
};

export default ActiveLink;
