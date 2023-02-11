import image from '../assets/images/profilepic.JPG'

const Intro = () => {

    return (
        <div className='intro-container'>   
            <img className='profile-picture' src={image} alt=''/>
            <div className='intro-text'>{`Hi, I'm Caleb. :)`}</div>
        </div>

    )
}

export default Intro