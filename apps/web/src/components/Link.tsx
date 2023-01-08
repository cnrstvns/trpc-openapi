'use client';

import NextLink from 'next/link';
import clsx from 'clsx';
import { ReactNode, useMemo } from 'react';
import { usePathname } from 'next/navigation';

type Props = {
  href: string;
  children: ReactNode;
};

export default function Link({ href, children }: Props) {
  const pathname = usePathname();

  const active = useMemo(() => pathname === href, [href, pathname]);

  return (
    <NextLink
      href={href}
      className={clsx(
        'text-white hover:text-blue-500 active:text-blue-600 transition',
        {
          'text-blue-500 hover:text-blue-600 active:text-blue-700': active,
        },
      )}
    >
      {children}
    </NextLink>
  );
}
