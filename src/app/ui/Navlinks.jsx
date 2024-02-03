'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/' },
  { name: 'About Me', href: '/about' },
  { name: 'Work Experience', href: '/work-experience' },
  { name: 'Education', href: '/education' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'my-auto p-5 text-sm text-lightThemePrimaryText hover:text-lightThemeSecondaryText hover:font-extrabold',
              {
                'text-lightThemeSecondaryText font-extrabold':
                  pathname === link.href,
              }
            )}
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
