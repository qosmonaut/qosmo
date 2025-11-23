'use client';

import React, { useState, useEffect } from 'react';
import Profile from "@/components/profile";
import Navigation from "@/components/navigation";
import Socials from "@/components/socials";
import About from "@/components/about";
import Experiences from "@/components/experiences/experiences";
import Education from "@/components/education/education";
import Projects from '@/components/projects/projects';
import Volunteering from "@/components/volunteering/volunteering";
import Credits from '@/components/credits';
import LanguageSwitcher from '@/components/language-switcher';

export default function Home() {
  const [currentLang, setCurrentLang] = useState('en');
  const [data, setData] = useState(null);

  useEffect(() => {
    // Load translation file based on current language
    fetch(`/translations/${currentLang}.json`)
      .then(res => res.json())
      .then(jsonData => setData(jsonData))
      .catch(err => console.error('Error loading translations:', err));
  }, [currentLang]);

  if (!data) {
    return (
      <main className="font-body flex min-h-screen flex-col items-center justify-center">
        <div>Loading...</div>
      </main>
    );
  }

  return (
    <main className="font-body flex min-h-screen flex-col items-center px-4 py-12 lg:px-12 lg:py-24">
      <div className="z-2 flex w-full max-w-6xl flex-col text-base lg:flex-row">
        <div className="mb-8 -mt-8 lg:-mt-16 lg:fixed">
          <LanguageSwitcher currentLang={currentLang} setCurrentLang={setCurrentLang} />
        </div>
        <div className="flex flex-col pb-16 lg:fixed lg:h-[91%] lg:justify-between">
          <div className='flex flex-col'>
            <Profile data={data.general} />
            <Navigation data={data.navigation} />
          </div>
          <Socials data={data.general.socials} />
        </div>
        <div className='lg:pl-[35%]'>
          <About data={data.general} />
          <Experiences data={data} />
          <Education data={data} />
          <Volunteering data={data} />
          <Projects data={data} />
          <Credits data={data} />
        </div>
      </div>
    </main>
  )
}
