
import { Github, Linkedin, Instagram } from "lucide-react";

interface SocialIconsProps {
  className?: string;
}

const SocialIcons = ({ className = "" }: SocialIconsProps) => {
  return (
    <div className={`flex items-center space-x-6 ${className}`}>
      <a
        href="https://github.com/manikanta-7557"
        target="_blank"
        rel="noopener noreferrer"
        className="neon-icon neon-icon-github"
      >
        <Github className="w-6 h-6 text-white/80 hover:text-white transition-colors" />
      </a>
      
      <a
        href="https://linkedin.com/in/manikanta-peddi"
        target="_blank"
        rel="noopener noreferrer"
        className="neon-icon neon-icon-linkedin"
      >
        <Linkedin className="w-6 h-6 text-white/80 hover:text-white transition-colors" />
      </a>

      <a
        href="https://instagram.com/manikanta__2475"
        target="_blank"
        rel="noopener noreferrer"
        className="neon-icon neon-icon-instagram"
      >
        <Instagram className="w-6 h-6 text-white/80 hover:text-white transition-colors" />
      </a>
    </div>
  );
};

export default SocialIcons;
