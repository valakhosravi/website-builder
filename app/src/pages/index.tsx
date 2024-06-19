import React from 'react';

import homeConfig from '@/data/home.json'
import usePageGenerator from '@/hooks/usePageGenerator';

export default function Home() {
  const page = usePageGenerator(homeConfig);

  return (
    <main
    >
      {page}
    </main>
  );
}
