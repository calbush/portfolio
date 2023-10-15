const Card = ({ project }) => {

    return(
        <a href={project.link} target="_blank" rel="noreferrer" className='no-underline-link'>
            <div className='card'>
                <img className='card-image' src={`${project.image}`} alt='' />
                <div className='card-text'>
                    <h2>{`${project.title}`}</h2>
                    <p className='card-description'>{`${project.description}`}</p>
                </div>
            </div>
        </a>
    )
}

export default Card