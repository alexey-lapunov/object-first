import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { MainLayout } from '@/components/layouts';
import { DashboardPage } from '@/pages/Dashboard/DashboardPage';
import { EventsPage } from '@/pages/Events/EventsPage';
import { HelpPage } from '@/pages/Help/HelpPage';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
