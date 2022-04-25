import Button from "../../../../Components/Button";
import Card from "../../../../Components/Card";
import "./styles.scss";

interface Props {
  plano: string;
  valor: string;
  background?: string;
  color?: string;
  fontSize?: string;
  padding?: string;
  hasButton?: boolean;
}

function CardPlanos({
  plano,
  valor,
  background,
  color,
  fontSize,
  padding,
  hasButton = false
}: Props) {
  return (
    <Card backgroundColor={background}>
      <div style={{ color, padding }} className="card-plano-container">
        <div style={{ fontSize }} className="plano">
          {plano}
        </div>
        {hasButton? (<Button className="prefer-button" fontSize="13px"padding="01px 30px">PREFERIDO</Button>) : ''}
        <div className="price">
          <div className="cifra">R$</div>
          <div className="valor">{valor}</div>
          <div className="mes">/mês</div>
        </div>
        <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia
          mi quis euismod ultrices.
        </div>
        <Button padding="05px 50px">Assinar</Button>
      </div>
    </Card>
  );
}

export default CardPlanos;
