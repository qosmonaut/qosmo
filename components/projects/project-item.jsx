function ProjectItem(props) {
    return (
        <a href={props.href} target="_blank" rel="noopener noreferrer" className="group bg-primary-100 flex flex-col p-5 brightness-75 transition-all hover:z-10 hover:scale-102 hover:brightness-100">
            <div className='text-primary-400 mb-4 flex flex-row items-center justify-between'>
                <div className='flex flex-row items-center'>
                    <span className='ml-1 text-xs font-medium tracking-widest uppercase'>{props.lib}</span>
                </div>
            </div>
            <h1 className="mb-4 text-xl subpixel-antialiased">{props.name}</h1>
            <div className="text-primary-400 text-xs">{props.description}</div>
        </a>
    )
}

export default ProjectItem