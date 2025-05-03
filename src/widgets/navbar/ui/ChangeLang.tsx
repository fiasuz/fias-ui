'use client';

import * as React from 'react';
import { GlobeIcon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';
import { Button } from '@/shared/ui/button';
import { languages } from '../lib/data';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { LanguageRoutes } from '@/shared/config/i18n/types';

export function ChangeLang() {
  const { locale } = useParams();
  const pathname = usePathname();
  const router = useRouter();

  const changeLocale = (locale: LanguageRoutes) => {
    const segments = pathname.split('/');
    segments[1] = locale;
    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <GlobeIcon />
          <span>{languages.find((e) => e.key == locale)?.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((e, i) => (
          <DropdownMenuItem key={i} onClick={() => changeLocale(e.key)}>
            {e.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
