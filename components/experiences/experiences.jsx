import React from "react";
import ExperienceItem from "./experience-item";

const Experiences = (props) => {
    return (
        <div data-section id='experiences' className='mb-16'>
            <h2 className='visible mb-8 font-medium tracking-widest text-lg'>{props.data.navigation.experiences}</h2>
            {props.data.experiences.map(function(object, index){
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

export default Experiences