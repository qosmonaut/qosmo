import React from "react";

function EducationItem(props) {
    return (
        <div className="group bg-background hover:bg-primary-100 mb-4 flex flex-row p-5 transition-all">
            <div className='text-primary-400 mr-2 basis-1/4 text-sm font-mono'>{props.startDate} – {checkEndDate(props)}</div>
            <div className='basis-3/4'>
                <a href={props.href} target="_blank" rel="noopener noreferrer" className='font-medium transition-all'>{props.degree} {props.subject}</a>
                <a href={props.href} target="_blank" rel="noopener noreferrer" className='mb-4 flex flex-row items-center'>
                    <span>{props.university}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="invisible ml-1 h-3 w-3 scale-50 transition ease-in-out group-hover:visible group-hover:scale-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </a>
                <div className='text-primary-400'>
                    {Array.isArray(props.description) ?
                        props.description.map((line, idx) => (
                            <span key={idx} className='block'>{line}</span>
                        )) : props.description}
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

export default EducationItem