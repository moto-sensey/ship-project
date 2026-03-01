import "./assets/styles/main.scss";
import { Background } from "./Background";
import { Container } from "./Container";
import {Header} from "./components/Header/Header";

export const App = () => {
  return (
    <>
      <Background>
        <Container>
          <Header/>
        </Container>
      </Background>
    </>
  );
};
