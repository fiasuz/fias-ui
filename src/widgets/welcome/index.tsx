'use client';

import { getPosts } from '@/shared/config/api/testApi';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React from 'react';

const Welcome = () => {
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts({ _limit: 1 }),
  });

  console.log('CSR posts', data);

  return (
    <div className="custom-container h-full bg-accent min-h-[400px] rounded-2xl flex items-center justify-center">
      <Link
        className="github-button"
        href="https://github.com/fiasuz/create-fias"
        data-color-scheme="no-preference: light; light: light; dark: dark;"
        data-icon="octicon-star"
        data-size="large"
        aria-label="Star fiasuz/create-fias on GitHub"
      >
        Star on github
      </Link>
    </div>
  );
};

export default Welcome;
