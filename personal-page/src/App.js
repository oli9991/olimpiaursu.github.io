import './App.scss';
import design from './media/design.jpg';
import { IoLogoFacebook, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';

function App() {
  return (
    <div className='page'>
      <div className='text'>
        <div>
          <h2>HI, I AM</h2>
          <h1>OLIMPIA</h1>
          <div className='line'></div>
          <h3>FRONTEND DEVELOPER</h3>
          <a href='mailto:ursuolimpiad@gmail.com'>ursuolimpiad@gmail.com</a>
        </div>
        <div className='links'>
          <a href='https://www.linkedin.com/in/olimpia-ursu-8b9939173/'>
            <IoLogoLinkedin />
          </a>
          <a href='https://github.com/oli9991'>
            <IoLogoGithub />
          </a>
          <a href='https://www.facebook.com/profile.php?id=100004170120749'>
            <IoLogoFacebook />
          </a>
        </div>
      </div>
      <div className='image'>
        <img src={design} alt='design-system' />
      </div>
    </div>
  );
}

export default App;
