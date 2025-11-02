import React from "react";

function ExperienceItem(props) {
    return (
        <div className="group flex flex-row mb-4 p-5 transition-all bg-background hover:bg-primary-100">
            <div className='mr-2 text-sm text-primary-400 basis-1/4'>{props.startDate} – {checkEndDate(props)}</div>
            <div className='basis-3/4'>
                <a href={props.href} target="_blank" rel="noopener noreferrer" className='font-medium transition-all'>{props.title} | {props.company} </a>
                <div className='text-primary-400 mb-4'>
                        {Array.isArray(props.description)
                                ? props.description.map((line, idx) => (
                                        <span key={idx} className='block'>{line}</span>
                                    ))
                                : props.description}
                </div>
                <div className='flex flex-row flex-wrap gap-2'>
                    {props.skills ? props.skills.map(function(object, index){
                        return <div key={object} className='bg-primary-300 text-primary-50 px-3 py-1 rounded-full text-xs shrink-0 whitespace-nowrap'>{object}</div>
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