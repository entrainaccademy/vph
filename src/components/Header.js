import Logo from "./Logo";
import SiteNav from "./SiteNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-white">
      <div className="relative mx-auto flex max-w-[100rem] items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-12 xl:px-20">
        <Logo />
        <SiteNav />
      </div>
    </header>
  );
}
