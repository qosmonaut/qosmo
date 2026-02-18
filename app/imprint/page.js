'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Imprint() {
    const [email, setEmail] = useState('info@example.org');

    useEffect(() => {
        // Get the current domain from window.location
        const domain = window.location.hostname;
        setEmail(`info@${domain}`);
    }, []);

    return (
        <main className="flex min-h-screen flex-col p-24 font-mono text-sm">
            <div className='flex flex-col'>
                <Link href="/" className='hover:text-primary-300 mr-4 mb-6 flex flex-row transition-all'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-2 h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    <span>Home</span>
                </Link>
                <h2 className='mb-8 text-2xl font-medium tracking-widest'>Imprint</h2>
            </div>
            <div className='text-primary-400'>
                <p>Alen Roady</p>
                <a href={`mailto:${email}`} className='hover:text-primary-300'>{email}</a>
            </div>
        </main>
    );
}