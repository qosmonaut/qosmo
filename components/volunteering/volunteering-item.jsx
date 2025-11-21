import React from "react";

function VolunteeringItem(props) {
    return (
        <div className="group bg-background hover:bg-primary-100 mb-4 flex flex-row p-5 transition-all">
            <div className='basis-1/4'>
                <div className='mr-2 w-full text-sm font-mono'>{props.startDate} – {props.endDate}</div>
                {props.logo && (
                    <img src={props.logo} alt={props.organisation} className='m-4 w-24 object-contain' />
                )}
            </div>
            <div className='flex basis-3/4 flex-col'>
                <a href={props.href} target="_blank" rel="noopener noreferrer" className='font-medium transition-all'>
                    {props.position}{props.event && ` | ${props.event}`}
                </a>
                <a href={props.href} target="_blank" rel="noopener noreferrer" className='text-primary-400 mb-4 flex flex-row items-center'>
                    <span>{props.organisation}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="invisible ml-1 h-3 w-3 scale-50 transition ease-in-out group-hover:visible group-hover:scale-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </a>
                <div className='text-primary-400'>{props.description}</div>
            </div>
        </div>
    )
}

export default VolunteeringItem