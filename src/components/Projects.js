import Card from "./Card"

const Projects = () => {
    let key = 0
    const projects = [
        {'title' : 'Memory Game', image : 'someimage', description : 'Test your memory with a game that shows you a list of randomized images to click.'},
        {title : 'Sample proj', 'image' : 'someimage.jpg', 'description' : 'Sample project description' }
    
    ]


    return(
        <div className='projects-container section-container'>
            <h1>Projects</h1>
            {projects.map((project) => {
                key += 1
                return <Card key={`${key}`} project={project} />
            })}
        </div>
    )
}

export default Projects