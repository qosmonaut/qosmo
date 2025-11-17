import React from 'react';
import Link from 'next/link';
import {promises as fs} from 'fs';

export default async function Imprint() {
    return (
        <main className="flex min-h-screen flex-col p-24 font-mono text-sm">
            <div className='flex flex-col'>
                <Link href="/" className='hover:text-highlight mr-4 mb-6 flex flex-row transition-all'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-2 h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    <span>Home</span>
                </Link>
                <h2 className='mb-8 text-2xl font-medium tracking-widest'>Imprint</h2>
            </div>
            <div className='text-primary-400'>
                <p>Alen Roady</p>
                <a href="mailto:info@qosmo.me">info@qosmo.me</a>
            </div>
        </main>
    );
}