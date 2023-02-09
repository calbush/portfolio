const Card = ({ project }) => {

    return(
        <div className='card'>
            <img src={`${project.image}`} alt='' />
            <h2>{`${project.title}`}</h2>
            <div className='project-description'>{`${project.description}`}</div>
        </div>
    )
}

export default Card