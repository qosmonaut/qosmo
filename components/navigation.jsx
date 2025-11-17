'use client'

import React, { useState, useEffect, useRef } from "react";
import NavItem from "./nav-item";

const Navigation = (props) => {
    const [activeSection, setActiveSection] = useState(null);
    const observer = useRef(null);

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
            if (visibleSection) {
                setActiveSection(visibleSection.id);
            }
        }, {threshold:0.5});

        const sections = document.querySelectorAll('[data-section]');

        sections.forEach((section) => {
            observer.current.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.current.unobserve(section);
            });
        };
    }, []);

    return (
        <div id='navigation' className='font-base py-8 tracking-widest uppercase hide-short'>
            <div className='mx-auto flex w-max flex-col items-start lg:mx-0'>
                <NavItem active={activeSection === 'about' ? true : false} href='#about' num='01' name={props.data.about}></NavItem>
                <NavItem active={activeSection === 'experiences' ? true : false} href='#experiences' num='02' name={props.data.experiences}></NavItem>
                <NavItem active={activeSection === 'education' ? true : false} href='#education' num='03' name={props.data.education}></NavItem>
                <NavItem active={activeSection === 'volunteering' ? true : false} href='#volunteering' num='04' name={props.data.volunteering}></NavItem>
                <NavItem active={(activeSection === 'projects') || (activeSection === 'credits') ? true : false} href='#projects' num='05' name={props.data.projects}></NavItem>
            </div>
        </div>
    )
}

export default Navigation