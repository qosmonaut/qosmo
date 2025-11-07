import React from "react";

function ExperienceItem(props) {
    return (
        <div className="group bg-background hover:bg-primary-100 mb-4 flex flex-row p-5 transition-all">
            <div className='text-primary-400 mr-2 basis-1/4 text-sm font-mono'>{props.startDate} – {checkEndDate(props)}</div>
            <div className='basis-3/4'>
                <a href={props.href} target="_blank" rel="noopener noreferrer" className='font-medium transition-all'>{props.title} | {props.company} </a>
                <div className='text-primary-400 mb-4'>
                    {Array.isArray(props.description) ? 
                        props.description.map((line, idx) => (
                            <span key={idx} className='block'>{line}</span>
                        )) : props.description}
                </div>  
                <div className='flex flex-row flex-wrap gap-2'>
                    {props.skills ? props.skills.map((object, index) => {
                        return <div key={object} className='bg-primary-300 text-primary-50 shrink-0 rounded-full px-3 py-1 text-xs whitespace-nowrap'>{object}</div>
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