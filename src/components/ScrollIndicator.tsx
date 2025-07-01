
import { useEffect, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [sections, setSections] = useState<Element[]>([]);

  useEffect(() => {
    const sectionElements = Array.from(document.querySelectorAll(".section"));
    setSections(sectionElements);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      let newActiveSection = 0;
      sectionElements.forEach((section, index) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionBottom = sectionTop + (section as HTMLElement).offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          newActiveSection = index;
        }
      });
      
      setActiveSection(newActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (index: number) => {
    if (sections[index]) {
      sections[index].scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const scrollUp = () => {
    if (activeSection > 0) {
      scrollToSection(activeSection - 1);
    }
  };

  const scrollDown = () => {
    if (activeSection < sections.length - 1) {
      scrollToSection(activeSection + 1);
    }
  };

  return (
    <div className="auto-scroller">
      <Button
        variant="ghost"
        size="icon"
        className={`rounded-full glass ${activeSection === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/20'}`}
        onClick={scrollUp}
        disabled={activeSection === 0}
      >
        <ChevronUp className="h-5 w-5" />
      </Button>
      
      <div className="flex flex-col items-center space-y-2 my-2">
        {sections.map((_, index) => (
          <div
            key={index}
            className={`scroll-indicator ${index === activeSection ? "active" : ""}`}
            onClick={() => scrollToSection(index)}
          />
        ))}
      </div>
      
      <Button
        variant="ghost"
        size="icon"
        className={`rounded-full glass ${activeSection === sections.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/20'}`}
        onClick={scrollDown}
        disabled={activeSection === sections.length - 1}
      >
        <ChevronDown className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default ScrollIndicator;
