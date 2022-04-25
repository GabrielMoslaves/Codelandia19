import Button from "../../../Components/Button";
import Title from "../../../Components/Title";
import "./styles.scss";

function Contato() {
  return (
    <div className="contato-container">
      <div className="top">
        <Title>Contato</Title>
        <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia
          mi quis euismod ultrices.
        </div>
      </div>
      <div className="bottom">
        <input placeholder='Seu melhor e-mail aqui' className="input"></input>
        <Button> Enviar </Button>
      </div>
    </div>
  );
}

export default Contato;
