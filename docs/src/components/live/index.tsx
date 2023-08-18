'use client';

import { Suspense } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { themes } from 'prism-react-renderer';

export const Live = ({
  scope,
  children
}: any) => {
  return (
    <div className='mt-4 text-sm' style={{ minHeight: '200px' }}> 
      <Suspense>
        <LiveProvider
          code={children}
          scope={scope}
          noInline={false}
          theme={themes.github}
        >
          <div className='px-6 pt-2'>
            <LivePreview />
            <LiveError />
          </div>
          <div className='px-4'>
            <LiveEditor />
          </div>
        </LiveProvider>
      </Suspense>
    </div>
  );
};
