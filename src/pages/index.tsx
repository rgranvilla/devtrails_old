import Head from 'next/head';
import NavigatorBar from '../components/NavigatorBar/NavigatorBar';
import {
  Container,
  Nav,
  HeroContainer,
  AboutContainer,
} from '../styles/pages/Home';
import { About } from './_about';
import Hero from './_hero';

export default function Home() {
  return (
    <div>
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,800;1,300;1,400;1,600;1,800&family=Raleway:ital,wght@0,200;0,400;0,500;0,800;1,200;1,400;1,500;1,800&display=swap'
          rel='stylesheet'
        />
        <link rel='shortcut icon' href='favicon.png' type='image/png' />
        <title>Dev Trails</title>
      </Head>
      <Container>
        <Nav>
          <NavigatorBar />
        </Nav>
        <HeroContainer>
          <Hero />
        </HeroContainer>
        <AboutContainer>
          <About />
        </AboutContainer>
      </Container>
    </div>
  );
}
