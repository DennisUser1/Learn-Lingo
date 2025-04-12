import AuthModal from "components/AuthModal/AuthModal";
import AuthNav from "components/AuthNav/AuthNav";
import Logo from "components/Logo/Logo";
import Menu from "components/Menu/Menu";
import Navigation from "components/Navigation/Navigation";
import ThemeToggle from "components/ThemeToggle/ThemeToggle";
import { useState } from "react";

interface HeaderProps {
  isHomePage?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isHomePage = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  const handleAction = (mode?: "login" | "register") => {
    setIsMenuOpen(false);
    if (mode) {
      setAuthMode(mode);
      setIsAuthModalOpen(true);
    } else {
      setIsAuthModalOpen(false);
    }
  };

  return (
    <header className="w-full h-auto sticky top-0 bg-inherit z-50">
      <div>
        <Logo />

        <nav>
          <Navigation />
        </nav>
        <div className="hidden desktop:flex">
          <AuthNav onAction={handleAction} />
        </div>

        <ThemeToggle />
        {isMenuOpen && <Menu onAction={handleAction} />}
        {isAuthModalOpen && (
          <AuthModal mode={authMode} onAction={handleAction} />
        )}
      </div>
    </header>
  );
};

export default Header;
