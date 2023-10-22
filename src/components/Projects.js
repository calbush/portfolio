import Card from "./Card"
import thecup from '../assets/images/thecup.png'
import reptile from '../assets/images/reptile.png'

const Projects = () => {
    let key = 0
    const projects = [
        {'title' : 'The Cup', image : thecup, description : 'Ever have trouble deciding on a movie to watch? The Cup is a movie roulette website. Users can select from categories like genre, streaming service, and popularity. The Cup will use TMDB\'s API to display a random movie matching the user\'s selected parameters. Built with React.', link : 'https://thecup.netlify.app/'},
        {title : 'Remember the Reptile', 'image' : reptile, link: 'https://remember-the-reptile.netlify.app/', 'description' : 'A simple memory game. Click on any image and the cards will be shuffled around. Don\'t click the same image twice. Built with React.' }
    
    ]


    return(
            <div id='projects' className='projects section'>
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