// softsell/components/DarkModeToggle.tsx
import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div className="fixed top-5 right-5 z-50">
      <button
        onClick={() => setIsDark(!isDark)}
        className="px-4 py-2 rounded-lg font-medium
          bg-white dark:bg-gray-800
          text-gray-900 dark:text-white
          border border-gray-200 dark:border-gray-700
          hover:bg-gray-100 dark:hover:bg-gray-700
          transition-all duration-200"
        aria-label="Toggle dark mode"
      >
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default DarkModeToggle;
