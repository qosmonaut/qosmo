import React from "react";
import Image from "next/image";

function ExperienceItem(props) {
    return (
        <div className="group flex flex-row mb-4 p-5 transition-all hover:bg-surface-200">
            <div className='mr-2 text-surface-600 text-xs basis-1/4'>{props.startDate} – {checkEndDate(props)}</div>
            <div className='basis-3/4'>
                <a href={props.href} target="_blank" rel="noopener noreferrer" className='font-medium transition-all'>{props.title} | {props.company} </a>
                <div className='text-surface-600 mb-4'>{props.description}</div>
                <div className='flex flex-row'>
                    {props.skills ? props.skills.map(function(object, index){
                        return <div key={object} className='bg-surface-400 py-1 px-3 rounded-full text-xs mr-2'>{object}</div>
                    }) : ""}
                </div>
            </div>
        </div>
    )
}

function checkEndDate(props) {
    if (!props.endDate) {
        return 'present';
    } else {
        return (props.endDate); 
    }  
}

export default ExperienceItem