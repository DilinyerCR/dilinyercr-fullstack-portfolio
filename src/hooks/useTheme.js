// useTheme.js
import { useState, useEffect, useCallback } from 'react';

// Nombre del atributo que usamos en el HTML para la configuración de tema
const THEME_DATA_ATTRIBUTE = 'data-theme';

export function useTheme() {
    // 1. Inicializa el estado leyendo la preferencia guardada o del sistema
    const [theme, setTheme] = useState(() => {
        // Si estamos en el lado del servidor (SSR), usamos 'light' por defecto
        if (typeof window === 'undefined') {
            return 'light';
        }

        const saved = localStorage.getItem('theme');
        if (saved) return saved;

        // Predeterminación del sistema
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    // 2. Efecto Secundario: Aplica el tema al DOM y guarda en localStorage
    useEffect(() => {
        // Aplica el atributo data-theme al elemento <html>
        document.documentElement.setAttribute(THEME_DATA_ATTRIBUTE, theme);
        // Persiste la elección del usuario
        localStorage.setItem('theme', theme);
    }, [theme]); // Se ejecuta cada vez que 'theme' cambia

    // 3. Función de alternancia optimizada
    const toggleTheme = useCallback(() => {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    }, []);

    // El hook devuelve el estado actual y la función para cambiarlo
    return [theme, toggleTheme];
}