import React, { useContext } from "react";
import {
  IntroductionContainer,
  IntroWrapper,
  IntroSubHeading,
  IntroMainHeading,
  IntroDescription,
  ButtonContainer
} from "./intro.styles";
import CustomButton from "../customButton/CustomButton.component";
import AnimatedWrapper from "../animated/AnimatedWrapper";
import { ThemeContext } from "../../context";

const Introduction = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <IntroductionContainer id="home" darkMode={darkMode}>
      <IntroWrapper>
        <IntroSubHeading>
          <AnimatedWrapper splitWord={true}>Welcome</AnimatedWrapper>
        </IntroSubHeading>
        <IntroSubHeading>
          <AnimatedWrapper splitWord={true}>To</AnimatedWrapper>
        </IntroSubHeading>
        <IntroMainHeading>
          <AnimatedWrapper splitWord={true}>Rune</AnimatedWrapper>
        </IntroMainHeading>
        <IntroSubHeading>
          <AnimatedWrapper splitWord={true}>Games</AnimatedWrapper>
        </IntroSubHeading>
        <IntroDescription>
          <AnimatedWrapper>
            A work in progress website with games. Welcome to the first version
            of Rune Games!
          </AnimatedWrapper>
        </IntroDescription>
        <ButtonContainer>
          <AnimatedWrapper>
            <CustomButton href="#projects">View Games</CustomButton>
          </AnimatedWrapper>
          <AnimatedWrapper>
            <CustomButton href="#contact">Sugestions</CustomButton>
          </AnimatedWrapper>
        </ButtonContainer>
      </IntroWrapper>
    </IntroductionContainer>
  );
};
export default Introduction;
