import Card from "./Card"
import square from '../assets/images/squareplaceholder.jpg'

const Projects = () => {
    let key = 0
    const projects = [
        {'title' : 'Memory Game', image : square, description : 'Test your memory with a game that shows you a list of randomized images to click.'},
        {title : 'Sample proj', 'image' : square, 'description' : 'Sample project description blah blah blah blah lorem ipsum foo bar' }
    
    ]


    return(
            <div className='projects'>
                <h1 className='projects-header'>Projects</h1>
                <div className='projects-container'>
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