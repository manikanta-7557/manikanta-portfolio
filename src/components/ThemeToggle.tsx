import { useEffect, useState } from "react";
import { Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  const handleClick = () => {
    setShowDialog(true);
    setTimeout(() => setShowDialog(false), 2000); // Auto-close after 2s
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        className="glass-dark rounded-full w-10 h-10 flex items-center justify-center"
        aria-label="Dark mode"
        onClick={handleClick}
      >
        <Moon className="h-5 w-5 text-yellow-300" />
      </Button>
      {showDialog && (
        <div className="absolute right-0 top-12 z-50 bg-black/90 text-white text-xs rounded-lg shadow-lg px-4 py-2 min-w-[160px] border border-white/10 animate-fade-in">
          Theme switching is under evaluation.
          <br />Only dark mode is available.
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
