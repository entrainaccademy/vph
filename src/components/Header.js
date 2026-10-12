import Logo from "./Logo";
import SiteNav from "./SiteNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/90">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
        <Logo />
        <SiteNav />
      </div>
    </header>
  );
}
