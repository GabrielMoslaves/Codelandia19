import Button from "../../../Components/Button";
import Title from "../../../Components/Title";
import "./styles.scss";
import Working from "../../../Components/Images/Working.png";

function Apresentacao() {
  return (
    <div className="apresentacao-background">
      <div className="apresentacao-container">
        <div className="left">
          <Title>
            Rachi, <br />
            é tudo que você <br />
            precisa em um só lugar.
          </Title>

          <Button padding="10px 20px" margin="25px 0">
            Cadastrar-se
          </Button>
        </div>

        <img className="working-image" src={Working} />
      </div>
    </div>
  );
}

export default Apresentacao;
