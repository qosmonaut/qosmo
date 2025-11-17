'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

function ProjectItem(props) {
    const [isOpen, setIsOpen] = useState(false);
    const isArray = Array.isArray(props.href);
    
    // Check if array contains images (common image extensions)
    const isImageArray = isArray && props.href.length > 0 && 
        props.href.some(url => /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url));
    
    const Tag = isArray && !isImageArray ? 'div' : 'a';
    
    // For image arrays, use onClick to open gallery
    const handleClick = (e) => {
        if (isImageArray) {
            e.preventDefault();
            setIsOpen(true);
        }
    };
    
    const linkProps = isImageArray 
        ? { onClick: handleClick, style: { cursor: 'pointer' } }
        : isArray 
            ? {} 
            : { href: props.href, target: "_blank", rel: "noopener noreferrer" };
    
    // Prepare slides for lightbox
    const slides = isImageArray ? props.href.map(src => ({ src })) : [];
    
    return (
        <>
            <Tag {...linkProps} className="group bg-primary-100 flex flex-col p-5 brightness-75 transition-all hover:z-10 hover:scale-102 hover:brightness-100">
                <div className='text-primary-400 mb-4 flex flex-row items-center justify-between'>
                    <div className='flex flex-row items-center'>
                        <span className='ml-1 text-xs font-medium tracking-widest uppercase'>{props.lib}</span>
                    </div>
                </div>
                <h1 className="mb-4 text-xl subpixel-antialiased">{props.name}</h1>
                <div className="text-primary-400 text-xs">{props.description}</div>
                
                {isArray && !isImageArray && (
                    <div className="mt-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:mt-4 group-hover:max-h-40">
                        <div className="text-primary-400 flex flex-wrap gap-2 text-xs">
                            {props.href.map((link, index) => (
                                <a
                                    key={index}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-highlight transition-colors"
                                >
                                    [{index + 1}]
                                </a>
                            ))}
                        </div>
                    </div>
                )}
                
                {isImageArray && (
                    <div className="mt-4 text-primary-400 text-xs">
                        Click to view {props.href.length} {props.href.length === 1 ? 'image' : 'images'}
                    </div>
                )}
            </Tag>
            
            {isImageArray && (
                <Lightbox
                    open={isOpen}
                    close={() => setIsOpen(false)}
                    slides={slides}
                />
            )}
        </>
    )
}

export default ProjectItem