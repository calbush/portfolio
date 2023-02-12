import githublogo from '../assets/images/githublogo.png'
import instalogo from '../assets/images/instalogo.png'

const Footer = () => {

    return(
        <footer>
            <p>Placeholder text</p>
            <div className='logo-holder'>
                <a href='https://www.instagram.com/calebtothebush/' target='_blank' rel='noreferrer noopener'><img className='insta-logo'src={instalogo} alt='Link to my instagram profile'/></a>
                <a href='https://github.com/calbush' target='_blank' rel='noreferrer noopener'><img className='github-logo'src={githublogo} alt='Link to my github profile'/></a>
            </div>
        </footer>
    )
}

export default Footer