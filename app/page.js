import React from 'react';
import Sidebar from "@/components/sidebar";
import Navigation from "@/components/navigation";
import Socials from "@/components/socials";
import About from "@/components/about";
import Experiences from "@/components/experiences/experiences";
import Education from "@/components/education/education";
import Projects from '@/components/projects/projects';
import Volunteering from "@/components/volunteering/volunteering";
import Credits from '@/components/credits';
import {promises as fs} from 'fs';

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/public/translations/en.json', 'utf-8');
  const data = JSON.parse(file);

  return (
    <main className="font-body flex min-h-screen flex-col items-center px-4 py-12 lg:px-24 lg:py-24">
      <div className="z-2 flex w-full max-w-5xl flex-col text-base lg:flex-row">
        <div className="flex flex-col gap-16 pb-32 lg:fixed lg:h-screen lg:justify-between">
          <Sidebar data={data.general}></Sidebar>
          <Navigation></Navigation>
          <Socials data={data.general.socials}></Socials>
        </div>
        <div className='lg:pl-[42%]'>
          <About data={data.general}></About>
          <Experiences data={data.experiences}></Experiences>
          <Education data={data.education}></Education>
          <Volunteering data={data.volunteering}></Volunteering>
          <Projects data={data.projects}></Projects>
          <Credits data={data.general}></Credits>
        </div>
      </div>
    </main>
  )
}
