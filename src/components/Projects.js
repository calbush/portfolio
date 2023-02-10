import Card from "./Card"
import python from '../assets/images/python.jpeg'

const Projects = () => {
    let key = 0
    const projects = [
        {'title' : 'Memory Game', image : python, description : 'Test your memory with a game that shows you a list of randomized images to click.'},
        {title : 'Sample proj', 'image' : python, 'description' : 'Sample project description blah blah blah blah lorem ipsum foo bar' }
    
    ]


    return(
        <div className='projects-container section-container'>
            <div className='projects-content-container'>
                <h1>Projects</h1>
                <div className='cards-container'>
                    {projects.map((project) => {
                        key += 1
                        return <Card key={`${key}`} project={project} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects