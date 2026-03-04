import { Outlet, useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ArrowUp } from "lucide-react";

const Layout = () => {
  const { pathname } = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top on route change with offset
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  // Show scroll-to-top after 30%
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setShowScrollTop(scrollPercent > 0.3);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      {/* Sticky CTA */}
      <Link
        to="/contact"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-primary text-primary-foreground text-xs font-medium px-3 py-6 hover:bg-primary-dark transition-colors duration-200 hidden md:block"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        Request a Quote
      </Link>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-40 w-10 h-10 border border-border bg-background flex items-center justify-center transition-all duration-300 hover:border-primary ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={16} strokeWidth={1.5} />
      </button>
    </div>
  );
};

export default Layout;
