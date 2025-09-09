'use client';

import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';
import useLocalStorage from 'use-local-storage';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

const ModeToggle = () => {
  // Set initial theme based on localStorage, falling back to 'light'
  const [darkMode, setDarkMode] = useLocalStorage('theme', 'light');
  // Track if component is mounted
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Mark component as mounted
    setMounted(true);

    // Check system preference and update if no existing preference
    const defaultDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    if (!localStorage.getItem('theme')) {
      setDarkMode(defaultDark ? 'dark' : 'light');
    }

    // Apply theme
    if (darkMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode, setDarkMode]);

  // Prevent flash of incorrect theme by not rendering until mounted
  if (!mounted) {
    return null;
  }

  return (
    <div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            asChild
            className="focus-visible:ring-0 focus-visible:ring-offset-0"
            onClick={() => {
              setDarkMode(darkMode === 'dark' ? 'light' : 'dark');
            }}
          >
            {darkMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </TooltipTrigger>
          <TooltipContent>
            {darkMode === 'light'
              ? 'Enable dark mode'
              : 'Enable light mode'}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default ModeToggle;
