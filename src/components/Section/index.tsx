import React from "react";

import {
  Container,
  Content,
  HeaderWrapper,
  Header,
  DropboxLogo,
} from "./styles";

interface Props {
  variant: "blue" | "beige" | "white" | "black";
  title: string;
  description: string;
}

const Section: React.FC<Props> = ({ variant, title, description }) => {
  function handletogle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }
  const buttonvariant = Math.round(Math.random());
  return (
    <Container className={variant}>
      <HeaderWrapper>
        <Header>
          <h1>
            <DropboxLogo />
            <span>DropBOX</span>
          </h1>
          <button onClick={handletogle}>
            {" "}
            {buttonvariant === 0 ? "Acessar" : "interagir"}{" "}
          </button>
        </Header>
      </HeaderWrapper>
      <Content>
        <h2> {title} </h2>
        <p> {description} </p>
      </Content>
    </Container>
  );
};

export default Section;
