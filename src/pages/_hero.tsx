import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaHackerrank,
} from 'react-icons/fa';

import {
  Container,
  VerticalTitle,
  NameText,
  WelcomeText,
  SocialMediaContainer,
} from '../styles/pages/Hero';

const Hero: React.FC = () => {
  const iconSize = '3rem';
  const iconColor = ``;

  return (
    <Container>
      <VerticalTitle>Web Developer</VerticalTitle>
      <NameText>
        ricardo<span>.</span>granvilla
      </NameText>
      <WelcomeText>
        <p>Welcome to my website!</p>
        <p>I'm a Front-end &amp; Back-end Developer</p>
      </WelcomeText>
      <SocialMediaContainer>
        <div className='iconContainer'>
          <a href='https://www.linkedin.com/in/ricardo-granvilla-053a8121/'>
            <FaLinkedin size={iconSize} fill={iconColor} />
          </a>
          <a href='https://github.com/rgranvilla'>
            <FaGithub size={iconSize} fill={iconColor} />
          </a>
          <a href='https://www.instagram.com/granvilla.ricardo/?hl=pt-br'>
            <FaInstagram size={iconSize} fill={iconColor} />
          </a>
          <a href='https://twitter.com/granvillaricar1'>
            <FaTwitter size={iconSize} fill={iconColor} />
          </a>
          <a href='https://www.hackerrank.com/rgranvilla'>
            <FaHackerrank size={iconSize} fill={iconColor} />
          </a>
        </div>
      </SocialMediaContainer>
    </Container>
  );
};

export default Hero;
