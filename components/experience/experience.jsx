import React from "react";
import ExperienceItem from "./experience-item";

const Experience = (props) => {
    return (
        <div data-section id='experience' className='mb-16'>
            <h2 className='visible mb-8 font-medium tracking-widest text-lg'>{props.data.navigation.experience}</h2>
            {props.data.experience.map(function(object, index){
                return <ExperienceItem  
                    key={`${object.title}+${object.startDate}`}
                    title={object.title}
                    company={object.company}
                    href={object.href}
                    logo={object.logo}
                    startDate={object.startDate}
                    endDate={object.endDate}
                    description={object.description}
                    skills={object.skills}
                />
            })}
        </div>
    )
}

export default Experience