import React from "react";
import ProjectItem from "./project-item";

const Projects = (props) => {
    return (
        <div data-section id='projects' className='mb-16'>
            <h2 className='visible mb-8 font-medium tracking-widest text-lg'>{props.data.navigation.projects}</h2>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-2'>
                {props.data.projects.map(function(object, index){
                    return <ProjectItem
                        key={object.name}
                        name={object.name}
                        lib={object.framework}
                        description={object.description}
                        href={object.href}
                    />
                })}
            </div>
        </div>
    )
}

export default Projects