import {
  Container,
  ContainerContent,
  LeftContent,
  RightContainer,
} from '../styles/pages/About';

export const About: React.FC = () => {
  return (
    <Container>
      <ContainerContent>
        <LeftContent>
          <div className='titleContainer'>
            <div></div>
            <h1>About me</h1>
          </div>
          <h4>
            I am a full stack web and mobile developer based in Porto Alegre-RS,
            Brazil.
          </h4>
          <p>
            Since October 2019, I study computer science and web development,
            already in December of that year, I started studying Java and
            Javascript languages in the courses offered by CoderBr.
          </p>
          <p>
            In August 2020 I started learning a Javascript, NodeJS and React
            development stack in the Rocketseat course.
          </p>
          <p>
            In this course I was able to develop my skills in web development
            and mobile applications, using the tools of a robust development
            stack that allows integration between backend, frontend and mobile.
          </p>
          <p>
            On this website, you can see the results of this trail, accessing my
            featured works and the articles published on my blog.
          </p>
        </LeftContent>
        <RightContainer>
          <img src='portrait.png' alt='' />
        </RightContainer>
      </ContainerContent>
    </Container>
  );
};
