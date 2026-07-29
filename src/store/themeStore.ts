import { create } from 'zustand';

interface ThemeState {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
  toggleTheme: () => set((state) => {
    const newDarkMode = !state.isDarkMode;
    document.documentElement.classList.toggle('dark', newDarkMode);
    return { isDarkMode: newDarkMode };
  }),
}));