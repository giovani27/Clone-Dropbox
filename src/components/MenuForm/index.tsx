import React from "react";
import { FaWindows } from "react-icons/fa";

import { Container, Navigation, DropboxLogo, Form } from "./styles";

const MenuForm: React.FC = () => {
  function handletogle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }
  return (
    <Container>
      <Navigation>
        <h1>
          <DropboxLogo />
          <span>Dropbox</span>
        </h1>
        <button className="action--close" onClick={handletogle}>
          X
        </button>
      </Navigation>

      <Form>
        <span className="title">Registre-se</span>
        <span className="subtitle">Preencha o formulario a baixo</span>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Sobrenome" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Senha" />

        <button>Prosseguir</button>
        <span className="terms">
          Esta Pagina Esta Sujeita a Politica de privacidade e aos termos de
          serviço{" "}
        </span>
      </Form>
    </Container>
  );
};

export default MenuForm;
