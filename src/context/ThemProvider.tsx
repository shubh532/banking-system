import { createContext, useContext, useMemo, useState } from "react";
import lightTheme from "../theme/light";
import darkTheme from "../theme/dark";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

interface ThemeModeContextType {
    toggleThemeMode: () => void;
    mode: 'light' | 'dark';
}

const ThemeModeContext = createContext<ThemeModeContextType | undefined>(undefined);



export const useThemeMode = () => {
    const ctx = useContext(ThemeModeContext);
    if (!ctx) {
        throw new Error('useThemeMode must be used within a ThemeModeProvider');
    }
    return ctx;
}


interface ThemeModeProviderProps {
    children: React.ReactNode;
}

export const ThemeModeProvider = ({ children }:ThemeModeProviderProps) => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    }

    const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode])

    return (
        <ThemeModeContext.Provider value={{ toggleThemeMode: toggleTheme, mode }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeModeContext.Provider>
    )

}