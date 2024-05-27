import React, { ReactNode } from 'react';
type Props = {
    children: ReactNode;
  };
  

const MainLayout: React.FC<Props> = (
  {children}
) => {
  return <div className='p-20 bg-slate-200 min-h-screen'>{children}</div>;
};

export default MainLayout;
