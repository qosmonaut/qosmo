import React from "react";

function EducationItem(props) {
    return (
        <div className="group bg-background hover:bg-primary-100 mb-4 flex flex-row p-5 transition-all">
            <div className='text-primary-400 mr-2 basis-1/4 text-xs'>{props.startDate} – {checkEndDate(props)}</div>
            <div className='basis-3/4'>
                <a href={props.href} target="_blank" rel="noopener noreferrer" className='font-medium transition-all'>{props.subject} ({props.degree})</a>
                <div className='text-primary-400 mb-4'>{props.university}</div>
                <div className='text-primary-400'>
                        {Array.isArray(props.description)
                                ? props.description.map((line, idx) => (
                                        <span key={idx} className='block'>{line}</span>
                                    ))
                                : props.description}
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