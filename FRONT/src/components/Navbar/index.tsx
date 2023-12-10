import { NavbarHeader } from './styles';
import { useTheme } from '../../contexts/ThemeProvider';

export default function Navbar() {
  const { isDarkMode, themeToggler } = useTheme();
  return (
    <NavbarHeader>
      <div className="container flex justify-end mx-auto">
        <div className="relative flex flex-wrap items-center">
          <input
            className="relative w-16 h-8 transition-colors appearance-none cursor-pointer rounded-2xl peer bg-slate-300 after:absolute after:top-1 after:left-1 after:h-6 after:w-6 after:rounded-full after:bg-slate-500 after:transition-all checked:bg-white checked:after:left-9 checked:after:bg-slate-700 hover:bg-slate-400 after:hover:bg-slate-600 checked:hover:bg-slate-100 checked:after:hover:bg-slate-900 focus:outline-none checked:focus:bg-slate-100 checked:after:focus:bg-slate-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-200 disabled:after:bg-slate-300"
            type="checkbox"
            checked={isDarkMode}
            onClick={themeToggler}
          />
        </div>
      </div>
    </NavbarHeader>
  );
}
