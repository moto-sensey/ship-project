import "./assets/styles/main.scss";
import { Background } from "./Background";
import { Container } from "./Container";

export const App = () => {
  return (
    <>
      <Background>
        <Container>
          <h1>Hello React</h1>
        </Container>
      </Background>
    </>
  );
};
