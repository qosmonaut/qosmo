import React from 'react';

const LanguageSwitcher = ({ currentLang, setCurrentLang }) => {
    return (
        <div className="flex flex-row gap-2 items-center justify-end">
            <button
                onClick={() => setCurrentLang('en')}
                className={`px-3 py-1 text-sm font-medium transition-all rounded ${
                    currentLang === 'en'
                        ? 'bg-primary-400 text-primary-50'
                        : 'bg-primary-100 text-primary-400 hover:bg-primary-200'
                }`}
            >
                EN
            </button>
            <button
                onClick={() => setCurrentLang('de')}
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
