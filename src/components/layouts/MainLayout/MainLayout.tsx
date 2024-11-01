import { Outlet } from 'react-router-dom';

import { Header } from '@/components/UI';

import { StyledContent } from './MainLayout.styles';

export const MainLayout = () => (
  <>
    <Header />
    <StyledContent>
      <Outlet />
    </StyledContent>
  </>
);
