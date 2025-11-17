import React from 'react';
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
import {promises as fs} from 'fs';

export default async function Home({ searchParams }) {
  const params = await searchParams;
  const lang = params?.lang || 'en';
  const file = await fs.readFile(process.cwd() + `/public/translations/${lang}.json`, 'utf-8');
  const data = JSON.parse(file);

  return (
    <main className="font-body flex min-h-screen flex-col items-center px-4 py-12 lg:px-24 lg:py-24">
      <div className="z-2 flex w-full max-w-6xl flex-col text-base lg:flex-row">
        <div className="mb-8 lg:-mt-16 lg:fixed">
          <LanguageSwitcher />
        </div>
        <div className="flex flex-col gap-6 pb-16 lg:fixed lg:h-fit lg:justify-between">
          <Profile data={data.general} />
          <Navigation data={data.navigation} />
          <Socials data={data.general.socials} />
        </div>
        <div className='lg:pl-[35%]'>
          <About data={data.general} />
          <Experiences data={data.experiences} />
          <Education data={data.education} />
          <Volunteering data={data.volunteering} />
          <Projects data={data.projects} />
          <Credits data={data.general} />
        </div>
      </div>
    </main>
  )
}
