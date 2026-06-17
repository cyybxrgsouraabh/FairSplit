import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { HamBurgerMenu } from "./HamburgerMenu";
import { ModeToggle } from "./mode-toggle";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-zinc-100/60 dark:border-zinc-800/60 backdrop-blur-xl bg-white/80 dark:bg-zinc-950/80">
      {/* Logo */}
      <span className="font-GTWalsheim text-2xl font-bold text-purple-500 cursor-pointer" onClick={() => navigate("/")}>
        FairSplit
      </span>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
        <li>
          <a href="#features" className="px-4 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            Features
          </a>
        </li>
        <li>
          <a href="#how-it-works" className="px-4 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            How it Works
          </a>
        </li>
        <li>
          <a href="#pricing" className="px-4 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            Pricing
          </a>
        </li>
      </ul>

      {/* CTA Buttons */}
      <div className="flex items-center gap-3">
        <ModeToggle />
        <Button
          variant="ghost"
          onClick={() => navigate("/login")}
          className="hidden sm:inline-flex font-GTWalsheim text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          Log In
        </Button>
        <Button
          onClick={() => navigate("/signup")}
          className="font-GTWalsheim text-sm bg-purple-600 hover:bg-purple-500 text-white rounded-lg px-4 py-2 transition-all duration-200 shadow-sm shadow-purple-500/20 hover:shadow-purple-500/30"
        >
          Sign Up
        </Button>
        <HamBurgerMenu />
      </div>
    </nav>
  );
};

export default NavBar;