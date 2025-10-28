import React from "react";

const Credits = (props) => {
        return (
        <div data-section id='credits' className='group mt-32'>
            <div className='text-surface-600'>
                <div className='mb-4'>
                    Built on a <a href="https://github.com/karlgrossmann/two-column-portfolio" target="_blank" rel="noopener noreferrer" className="text-on-background transition-all hover:text-primary-500">template </a>
                    by <a href="https://karlgrossmann.com" target="_blank" rel="noopener noreferrer" className="text-on-background transition-all hover:text-primary-500">Karl Grossmann </a>
                    using <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-on-background transition-all hover:text-primary-500">Next.js </a>
                    and <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-on-background transition-all hover:text-primary-500"> Tailwind CSS</a>.
                </div>
                <div className='flex flex-row justify-between'>
                    <a href="/imprint" rel="noopener noreferrer" className="scroll-auto transition-all hover:text-on-background">Imprint</a>
                    <span><a href="/" rel="noopener noreferrer" className="scroll-auto transition-all hover:text-on-background">{props.data.name}</a> | 2025</span>
                </div>
            </div>
        </div>
    )
}

export default Credits