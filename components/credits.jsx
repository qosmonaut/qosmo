import React from "react";
import Link from 'next/link';

const Credits = (props) => {
        return (
        <div data-section id='credits' className='group mt-32'>
            <div className='text-primary-400'>
                <div className='mb-18'>
                    Built on a <a href="https://github.com/karlgrossmann/two-column-portfolio" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-highlight transition-all">template </a>
                    by <a href="https://github.com/karlgrossmann/" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-highlight transition-all">Karl Grossmann </a>
                    using <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-highlight transition-all">Next.js </a>
                    and <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-highlight transition-all"> Tailwind CSS</a>.
                </div>
                <div className='flex flex-row justify-between'>
                    <Link href="/imprint" className="hover:text-primary-400 scroll-auto transition-all">Imprint</Link>
                    <span><Link href="/" className="hover:text-primary-400 scroll-auto transition-all">{props.data.name}</Link> | 2025</span>
                </div>
            </div>
        </div>
    )
}

export default Credits