const Header = () => {
    return(
        <nav className='header'>
            <div className='home-button'><h3>{'>_'}</h3></div>
            <div className='nav-buttons-container'>
                <button className='about-button' alt='jump to about section'>About</button>
                <button className='projects-button' alt='jump to projects section'>Projects</button>
                <button className='contact-button' alt='jump to contact section'>Contact</button>
            </div>
        </nav>
    )
}

export default Header