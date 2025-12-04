
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const navLinks = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight &&
          sectionId
        ) {
          setActiveSection(sectionId);
          setIsVisible(sectionId !== "home");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`navbar ${
        isVisible ? "navbar-visible" : "navbar-hidden"
      } glass-dark px-6 py-3`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Manikanta Peddi
          </span>
        </div>

        {isMobile ? (
          <>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
            
            {mobileMenuOpen && (
              <div className="absolute top-full left-0 right-0 z-50 glass-dark border-t border-white/10 animate-slide-in-top">
                <nav className="container mx-auto py-4">
                  <ul className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <Button
                          variant="ghost"
                          className={`w-full text-left ${
                            activeSection === link.href.replace("#", "")
                              ? "text-blue-400"
                              : "text-white/80"
                          } hover:text-white transition-colors`}
                          onClick={() => handleNavClick(link.href)}
                        >
                          {link.title}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center space-x-6">
            <nav>
              <ul className="flex space-x-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      className={`relative px-2 py-1 ${
                        activeSection === link.href.replace("#", "")
                          ? "text-blue-400"
                          : "text-white/80"
                      } hover:text-white transition-colors`}
                      onClick={() => handleNavClick(link.href)}
                    >
                      {link.title}
                      <span
                        className={`absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 transform origin-left transition-transform duration-300 ${
                          activeSection === link.href.replace("#", "")
                            ? "scale-x-100"
                            : "scale-x-0"
                        }`}
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <ThemeToggle />
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
