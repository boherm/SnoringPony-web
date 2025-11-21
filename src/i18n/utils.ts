import { ui, defaultLang } from './ui.ts';

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        // get string by key can be nested like 'menu.features'
        const keys = key.toString().split('.');
        let result: any = ui[lang];
        for (const k of keys) {
            result = result?.[k];
            if (result === undefined) break;
        }

        // fallback to default language if translation is missing
        if (result === undefined) {
            result = ui[defaultLang];
            for (const k of keys) {
                result = result?.[k];
                if (result === undefined) break;
            }
        }

        return result ?? key;
    }
}
