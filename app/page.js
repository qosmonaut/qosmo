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
import {promises as fs} from 'fs';

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/public/translations/en.json', 'utf-8');
  const data = JSON.parse(file);

  return (
    <main className="font-body flex min-h-screen flex-col items-center px-4 py-12 lg:px-24 lg:py-24">
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
