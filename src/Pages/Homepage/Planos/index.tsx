import Button from "../../../Components/Button";
import Card from "../../../Components/Card";
import Title from "../../../Components/Title";
import CardPlanos from "./CardPlanos";
import "./styles.scss";

function Planos() {
  return (
    <div className="planos-wrapper">
      <div className="planos-top">
        <Title className="title">Nossos planos</Title>
        <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia
          mi quis euismod ultrices.
        </div>
      </div>
      <div className="planos-bot">
        <CardPlanos plano="Bronze" valor="28"/>
        <CardPlanos hasButton={true} color="#ffffff"background="#293145" padding="20px 20px "fontSize="30px"plano="Prata" valor="58"/>
        <CardPlanos plano="Ouro" valor="100"/>
      
      </div>
    </div>
  );
}

export default Planos;
