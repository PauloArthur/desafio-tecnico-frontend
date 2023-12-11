import { FiSun } from 'react-icons/fi';
import { BsFillMoonStarsFill } from 'react-icons/bs';

import { useTheme } from '@contexts/ThemeProvider';

import { NavbarHeader, ToggleButton } from './styles';

export default function Navbar() {
  const { isDarkMode, themeToggler } = useTheme();
  return (
    <NavbarHeader>
      <div className="container flex justify-end mx-auto">
        <div className="relative flex flex-wrap items-center">
          <ToggleButton
            onClick={themeToggler}
            className={`${isDarkMode && 'checked'}`}
          >
            <div>{isDarkMode ? <BsFillMoonStarsFill /> : <FiSun />}</div>
          </ToggleButton>
        </div>
      </div>
    </NavbarHeader>
  );
}
