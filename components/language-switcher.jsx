'use client';

import React from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const LanguageSwitcher = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentLang = searchParams.get('lang') || 'en';

    const switchLanguage = (lang) => {
        const params = new URLSearchParams(searchParams);
        params.set('lang', lang);
        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="flex flex-row gap-2 items-center justify-end">
            <button
                onClick={() => switchLanguage('en')}
                className={`px-3 py-1 text-sm font-medium transition-all rounded ${
                    currentLang === 'en'
                        ? 'bg-primary-400 text-primary-50'
                        : 'bg-primary-100 text-primary-400 hover:bg-primary-200'
                }`}
            >
                EN
            </button>
            <button
                onClick={() => switchLanguage('de')}
                className={`px-3 py-1 text-sm font-medium transition-all rounded ${
                    currentLang === 'de'
                        ? 'bg-primary-400 text-primary-50'
                        : 'bg-primary-100 text-primary-400 hover:bg-primary-200'
                }`}
            >
                DE
            </button>
        </div>
    );
};

export default LanguageSwitcher;
