import Logo from "components/Logo/Logo";
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

  return (
    <header className="w-full h-auto sticky top-0 bg-inherit z-50">
      <div>
        <Logo />

        <nav>
          <Navigation />
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
