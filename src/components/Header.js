const Header = () => {
    return(
        <nav className='header'>
            <div className='home-button'><h3>{'>_'}</h3></div>
            <div className='nav-buttons-container'>
                <a href="#projects"><button className='projects-button' alt='jump to projects section'>Projects</button></a>
                <a href="#about"><button className='about-button' alt='jump to about section'>About</button></a>
            </div>
        </nav>
    )
}

export default Header