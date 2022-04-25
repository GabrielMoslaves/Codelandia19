import Title from "../../../Components/Title";
import "./styles.scss";
import boneco from "../../../Components/Images/boneco.png";
import emoji from "../../../Components/Images/emoji.png";
import shield from "../../../Components/Images/shield.png";

function ComoFunciona() {
  return (
    <div className="comofunciona-container">
      <Title className="title2" fontSize="25px">
        Como Funciona
      </Title>
      <div className="itens-wrapper">
        <div className="first-item">
          <img src={boneco} />
          <Title fontSize="15px">crie conexões</Title>
          <span>Lorem ipsum dolor sit amet, consecteteu.</span>
        </div>
        <div className="first-item">
          <img src={shield} />
          <Title fontSize="15px">100% gratuito</Title>
          <span>Lorem ipsum dolor sit amet, consecteteu.</span>
        </div>
        <div className="first-item">
          <img src={emoji} />
          <Title fontSize="15px">
            Compartilhamento
          </Title>
          <span>Lorem ipsum dolor sit amet, consecteteu.</span>
        </div>
      </div>
    </div>
  );
}

export default ComoFunciona;
