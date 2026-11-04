import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/sonner';
import { AppLayout } from '@/components/layout/AppLayout';
import { SearchProvider } from '@/components/search/SearchContext';
import HomePage from '@/pages/HomePage';
import DepartmentPage from '@/pages/DepartmentPage';
import ProcedurePage from '@/pages/ProcedurePage';
import NotFoundPage from '@/pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <TooltipProvider>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<HomePage />} />
              <Route path=":department" element={<DepartmentPage />} />
              <Route path=":department/:slug" element={<ProcedurePage />} />
              <Route path="404" element={<NotFoundPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
          <Toaster />
        </TooltipProvider>
      </SearchProvider>
    </BrowserRouter>
  );
}
