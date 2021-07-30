import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { cloneElement, ReactElement } from 'react';

interface AtciveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({
  children,
  activeClassName,
  shouldMatchExactHref = false,
  ...rest
}: AtciveLinkProps) {
  const { asPath } = useRouter();

  let isActive = false;

  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }

  if (
    !shouldMatchExactHref &&
    (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))
  ) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, { className: isActive ? activeClassName : '' })}
    </Link>
  );
}
