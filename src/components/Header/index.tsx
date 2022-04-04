import { Link } from "react-router-dom";
import { Navigation } from "../Navigation";

export const Header = () => (
  <header className="flex items-center justify-between px-10 py-6 bg-gray-200 sticky top-0 z-50">
    <div className="flex items-center space-x-2">
      <Link to='/' >
        <img
          className="h-full w-28"
          src="https://rarolabs.com.br/assets/logo-cae9beb1976500005b5e29dea19bdaa2761082232703a16beb71ffd2117014e5.png"
          alt="Workflow"
        />
      </Link>
    </div>
    <nav className="flex items-center space-x-8 font-bold text-[#44c2fd]">
      <Navigation />
    </nav>
  </header>
);