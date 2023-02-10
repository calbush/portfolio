const Card = ({ project }) => {

    return(
        <div className='card'>
            <img className='card-image' src={`${project.image}`} alt='' />
            <div className='card-text'>
                <h2>{`${project.title}`}</h2>
                <p className='card-description'>{`${project.description}`}</p>
            </div>
        </div>
    )
}

export default Card