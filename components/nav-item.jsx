import React from "react";

function NavItem(props) {
    return (
    <a href={props.href} className='group flex flex-row items-center justify-center py-3 lg:justify-start'>
            <div className={props.active ? 'text-primary-400 group-hover:text-primary-300 mr-4 transition-all' : 'text-primary-400 group-hover:text-primary-300 mr-4 transition-all'}>{props.num}</div>
            <div className={props.active ? 'bg-primary-400 group-hover:bg-primary-300 mr-4 h-0.5 w-16 transition-all group-hover:w-16' : 'bg-primary-400 group-hover:bg-primary-300 mr-4 h-0.5 w-8 transition-all group-hover:w-16'}/>
            <div className={props.active ? 'transition-alltext-primary-400  group-hover:text-primary-300 transition-all' : 'text-primary-400 group-hover:text-primary-300'}>{props.name}</div>
        </a>
    )
}

export default NavItem