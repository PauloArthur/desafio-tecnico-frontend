import { useTheme } from 'styled-components';
import { NavbarHeader } from './styles';

export default function Navbar() {
  const { isDarkMode, themeToggler } = useTheme();
  console.log(isDarkMode);
  return (
    <NavbarHeader>
      <div className="container flex justify-end mx-auto">
        <div className="relative flex flex-wrap items-center">
          <input
            className="relative w-16 h-8 transition-colors appearance-none cursor-pointer rounded-2xl peer bg-slate-300 after:absolute after:top-1 after:left-1 after:h-6 after:w-6 after:rounded-full after:bg-slate-500 after:transition-all checked:bg-emerald-200 checked:after:left-9 checked:after:bg-emerald-500 hover:bg-slate-400 after:hover:bg-slate-600 checked:hover:bg-emerald-300 checked:after:hover:bg-emerald-600 focus:outline-none checked:focus:bg-emerald-400 checked:after:focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-200 disabled:after:bg-slate-300"
            type="checkbox"
            onClick={themeToggler}
          />
        </div>
      </div>
    </NavbarHeader>
  );
}
