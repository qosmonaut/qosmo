import React from "react";

const About = (props) => {
    return (
        <div data-section id='about' className='group mb-16'>
            <div className='text-primary-400'>
                {props.data.about.map(function(paragraph, index){
                    return <div key={index} className='mb-6'>{paragraph}</div>
                })}
            </div>
        </div>
    )
}

export default About