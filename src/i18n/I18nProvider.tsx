'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translations, type Locale } from './translations';

type I18nContextType = {
    locale: Locale;
    setLocale: (l: Locale) => void;
    t: (key: string) => string;
};

const I18nContext = createContext<I18nContextType | null>(null);

function get(obj: unknown, path: string): unknown {
    return path.split('.').reduce<unknown>((acc, k) => {
        if (acc && typeof acc === 'object' && k in acc) return (acc as Record<string, unknown>)[k];
        return undefined;
    }, obj);
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>('fr');

    useEffect(() => {
        const stored = typeof window !== 'undefined' ? (localStorage.getItem('locale') as Locale | null) : null;
        if (stored === 'fr' || stored === 'en') setLocaleState(stored);
        else setLocaleState('fr');
    }, []);

    useEffect(() => {
        if (typeof document !== 'undefined') document.documentElement.lang = locale;
        if (typeof window !== 'undefined') localStorage.setItem('locale', locale);
    }, [locale]);

    const setLocale = (l: Locale) => setLocaleState(l);

    const value = useMemo<I18nContextType>(() => {
        const t = (key: string): string => {
            const v = get(translations[locale], key);
            if (typeof v === 'string') return v;
            const fallback = get(translations.en, key);
            if (typeof fallback === 'string') return fallback;
            return key;
        };
        return { locale, setLocale, t };
    }, [locale]);

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
    const ctx = useContext(I18nContext);
    if (!ctx) throw new Error('useI18n must be used within I18nProvider');
    return ctx;
}