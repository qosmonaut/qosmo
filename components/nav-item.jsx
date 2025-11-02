import React from "react";

function NavItem(props) {
    return (
    <a href={props.href} className='flex flex-row py-3 items-center group justify-center lg:justify-start'>
            <div className={props.active ? 'mr-4 text-primary-400 transition-all group-hover:text-primary-300' : 'mr-4 text-primary-400 transition-all group-hover:text-primary-300'}>{props.num}</div>
            <div className={props.active ? 'mr-4 w-16 h-0.5 bg-primary-400 transition-all group-hover:bg-primary-300 group-hover:w-16' : 'w-8 h-0.5 mr-4 bg-primary-400 transition-all group-hover:w-16 group-hover:bg-primary-300'}/>
            <div className={props.active ? 'transition-alltext-primary-400  group-hover:text-primary-300 transition-all' : 'text-primary-400 group-hover:text-primary-300'}>{props.name}</div>
        </a>
    )
}

export default NavItem