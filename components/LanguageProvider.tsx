"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_LOCALE,
  isLocale,
  localize,
  translations,
  type Locale,
  type LocalizedText as LocalizedTextValue,
  type MetadataPage,
  type TranslationDictionary,
} from "@/data/i18n";

export const LANGUAGE_STORAGE_KEY = "leo-website-locale";

export type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  translations: TranslationDictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function setDocumentLanguage(locale: Locale) {
  document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    let storedLocale: string | null = null;

    try {
      storedLocale = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    } catch {
      // The English default remains available if storage is blocked.
    }

    const initialLocale = isLocale(storedLocale) ? storedLocale : DEFAULT_LOCALE;
    setLocaleState(initialLocale);
    setDocumentLanguage(initialLocale);

    function handleStorage(event: StorageEvent) {
      if (event.key === LANGUAGE_STORAGE_KEY && isLocale(event.newValue)) {
        setLocaleState(event.newValue);
        setDocumentLanguage(event.newValue);
      }
    }

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  useEffect(() => {
    setDocumentLanguage(locale);
  }, [locale]);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
    setDocumentLanguage(nextLocale);

    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLocale);
    } catch {
      // The in-memory selection still works when storage is unavailable.
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "en" ? "zh" : "en");
  }, [locale, setLocale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      toggleLocale,
      translations: translations[locale],
    }),
    [locale, setLocale, toggleLocale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider.");
  }

  return context;
}

export function LocalizedText({
  value,
}: {
  value: LocalizedTextValue<ReactNode>;
}) {
  const { locale } = useLanguage();
  return <>{localize(value, locale)}</>;
}

export function useLocalizedMetadata(page: MetadataPage) {
  const { translations: currentTranslations } = useLanguage();
  const { title, description } = currentTranslations.metadata[page];

  useEffect(() => {
    function applyMetadata() {
      if (document.title !== title) {
        document.title = title;
      }

      const descriptionElements =
        document.querySelectorAll<HTMLMetaElement>('meta[name="description"]');

      for (const descriptionElement of descriptionElements) {
        if (descriptionElement.content !== description) {
          descriptionElement.content = description;
        }
      }
    }

    applyMetadata();

    const observer = new MutationObserver(applyMetadata);
    observer.observe(document.head, {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [description, title]);

  return { title, description };
}

export function LocalizedMetadata({ page }: { page: MetadataPage }) {
  useLocalizedMetadata(page);
  return null;
}
