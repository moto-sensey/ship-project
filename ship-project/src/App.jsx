import "./assets/styles/main.scss";
import { Background } from "./Background";
import { Container } from "./Container";
import {Header} from "./components/Header/Header";
import { About } from "./components/Main/About/About";
import { Slider } from "./components/Main/Slider/Slider";
import { useState } from "react";

export const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleSlideChange = (newIndex) => {
    setCurrentIndex(newIndex);
  };
  return (
    <>
      <Background currentIndex={currentIndex}>
        <Container>
          <Header/>
          <About/>
          <Slider onChangeSlide={handleSlideChange}/>
        </Container>
      </Background>
    </>
  );
};
