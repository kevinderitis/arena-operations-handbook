import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Menu, Search, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Sidebar } from '@/components/navigation/Sidebar';
import { ScrollToTop } from './ScrollToTop';
import { useSearch } from '@/components/search/SearchContext';
import { SearchDialog } from '@/components/search/SearchDialog';
import { AppearanceMenu } from '@/components/theme/AppearanceMenu';

export function AppLayout() {
  const { setOpen } = useSearch();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-[1400px] items-center gap-3 px-4">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open navigation">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 p-0">
              <div className="flex h-14 items-center gap-2 border-b px-4">
                <BookOpen className="h-5 w-5 text-primary" />
                <span className="font-semibold">Arena Operations Handbook</span>
              </div>
              <Sidebar onNavigate={() => setMobileOpen(false)} />
            </SheetContent>
          </Sheet>

          <Link to="/" className="flex items-center gap-2 font-semibold">
            <BookOpen className="h-5 w-5 text-primary" />
            <span className="hidden sm:inline">Arena Operations Handbook</span>
          </Link>

          <div className="ml-auto flex items-center gap-2">
            <AppearanceMenu />
            <Button
              variant="outline"
              className="hidden w-64 justify-start text-muted-foreground sm:flex"
              onClick={() => setOpen(true)}
            >
              <Search className="mr-2 h-4 w-4" />
              Search handbook...
              <kbd className="ml-auto rounded border bg-muted px-1.5 text-xs">⌘K</kbd>
            </Button>
            <Button variant="ghost" size="icon" className="sm:hidden" onClick={() => setOpen(true)} aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-[1400px] flex-1">
        <aside className="hidden w-64 shrink-0 border-r md:block">
          <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto">
            <Sidebar />
          </div>
        </aside>
        <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>

      <SearchDialog />
    </div>
    </>
  );
}
