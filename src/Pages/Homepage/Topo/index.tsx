import "./styles.scss";
import HeaderLogo from '../../../Components/Images/HeaderLogo.png'

function Topo() {
  return (
    <header className="header-container">
      <div className="left">
        <img src={HeaderLogo} />
      </div>
      <div className="right">
        <div>Funcionalidades</div>
        <div>App</div>
        <div>Planos</div>
        <div>Contato</div>
      </div>
    </header>
  );
}

export default Topo;
